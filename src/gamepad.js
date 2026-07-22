'use strict';

// Runs in the preload context — it has access to the browser-side Gamepad API
// and to the Node.js-side ipcRenderer (because preload uses sandbox: false)

const POLL_INTERVAL_MS = 16;   // ~60 fps
const DEADZONE = 0.15;
const SPEED_LEFT  = 8;          // Linker Stick: Haupt-Mausbewegung
const SPEED_RIGHT = 4;          // Rechter Stick: Kamera (langsamer)

// Remembers which buttons were pressed on the previous poll (edge detection)
const prevButtonState = {};

function applyDeadzone(value) {
  return Math.abs(value) < DEADZONE ? 0 : value;
}

// Starts polling. ipcRenderer is passed in from preload.
function start(ipcRenderer, buttonMap) {
  const mapping = buttonMap || {};

  setInterval(() => {
    const gamepads = navigator.getGamepads ? navigator.getGamepads() : [];

    for (const gp of gamepads) {
      if (!gp) continue;

      // Left stick (axes 0 + 1) → fast mouse movement
      const lx = applyDeadzone(gp.axes[0] || 0);
      const ly = applyDeadzone(gp.axes[1] || 0);
      // Right stick (axes 2 + 3) → camera movement, dampened
      const rx = applyDeadzone(gp.axes[2] || 0);
      const ry = applyDeadzone(gp.axes[3] || 0);

      const dx = lx * SPEED_LEFT + rx * SPEED_RIGHT;
      const dy = ly * SPEED_LEFT + ry * SPEED_RIGHT;

      if (dx !== 0 || dy !== 0) {
        ipcRenderer.send('gamepad-mouse-move', { dx, dy });
      }

      // Buttons: trigger only on the initial press (no auto-repeat)
      gp.buttons.forEach((btn, idx) => {
        const stateKey = `${gp.index}_${idx}`;
        const isPressed = btn.pressed;
        if (isPressed && !prevButtonState[stateKey]) {
          const keyCode = mapping[String(idx)];
          if (keyCode) {
            ipcRenderer.send('gamepad-button', { keyCode });
          }
        }
        prevButtonState[stateKey] = isPressed;
      });
    }
  }, POLL_INTERVAL_MS);
}

module.exports = { start };
