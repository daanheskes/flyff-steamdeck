'use strict';

// Runtime state per account: whether it is active and the active timer IDs
const state = {
  account1: { running: false, timers: [] },
  account2: { running: false, timers: [] },
  account3: { running: false, timers: [] },
  account4: { running: false, timers: [] }
};

// Current automation config (set by main.js)
let config = {
  account1: { actions: [] },
  account2: { actions: [] },
  account3: { actions: [] },
  account4: { actions: [] }
};

function setConfig(automationConfig) {
  if (automationConfig) config = automationConfig;
}

// Sends a single key press to the WebContents of a game view
function sendKey(webContents, keyCode) {
  try {
    webContents.sendInputEvent({ type: 'keyDown', keyCode });
    webContents.sendInputEvent({ type: 'keyUp', keyCode });
  } catch {
    // WebContentsView is not ready yet or is currently navigating — the next interval will try again
  }
}

// ±10% variation for anti-detection
function randomizeInterval(baseMs) {
  const variation = baseMs * 0.1;
  return baseMs + (Math.random() * 2 - 1) * variation;
}

// Starts automation for an account
function start(account, webContents, onStateChange) {
  const s = state[account];
  if (!s) return; // Safety check for undefined accounts
  if (s.running) return;
  s.running = true;

  const actions = (config[account] && config[account].actions) || [];
  actions.forEach(action => {
    if (!action.enabled) return;

    // Recursive function with a randomized interval
    function scheduleNext() {
      if (!s.running) return;
      const intervalMs = (action.intervalSec || action.intervalMs/1000 || 3) * 1000; // sec→ms, fallback
      const nextDelay = randomizeInterval(intervalMs);
      const timer = setTimeout(() => {
        if (!s.running) return;
        sendKey(webContents, action.key);
        scheduleNext(); // schedule the next execution
      }, nextDelay);
      s.timers.push(timer);
    }

    scheduleNext();
  });

  if (onStateChange) onStateChange(account, true);
}

// Stops all timers for an account
function stop(account, onStateChange) {
  const s = state[account];
  if (!s) return; // Safety check for undefined accounts
  s.running = false;
  s.timers.forEach(t => clearTimeout(t)); // clearTimeout statt clearInterval
  s.timers = [];
  if (onStateChange) onStateChange(account, false);
}

function isRunning(account) {
  const s = state[account];
  return s ? s.running : false;
}

module.exports = { setConfig, start, stop, isRunning };
