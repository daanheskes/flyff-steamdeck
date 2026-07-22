'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const {
  normalizeQuestProfileStore,
  createQuestProfile,
  renameQuestProfile,
  deleteQuestProfile,
  switchQuestProfile,
  getActiveQuestProgress
} = require('../src/quest-profile-store.js');

test('normalizeQuestProfileStore creates a default profile when none exist', () => {
  const state = normalizeQuestProfileStore({});
  assert.equal(state.activeProfileId, 'default');
  assert.equal(state.profiles.length, 1);
  assert.equal(state.profiles[0].name, 'Default');
});

test('createQuestProfile adds a named profile and makes it active', () => {
  const state = normalizeQuestProfileStore({ activeProfileId: 'default', profiles: [{ id: 'default', name: 'Default', progress: {} }] });
  const next = createQuestProfile(state, 'Alt Account');
  assert.equal(next.activeProfileId, next.profiles[1].id);
  assert.equal(next.profiles[1].name, 'Alt Account');
  assert.deepEqual(next.profiles[1].progress, {});
});

test('switchQuestProfile, renameQuestProfile and deleteQuestProfile update the store correctly', () => {
  let state = normalizeQuestProfileStore({ activeProfileId: 'default', profiles: [{ id: 'default', name: 'Default', progress: {} }] });
  state = createQuestProfile(state, 'Alt Account');
  state = switchQuestProfile(state, state.profiles[1].id);
  state = renameQuestProfile(state, state.profiles[1].id, 'Main Alt');
  state = deleteQuestProfile(state, 'default');
  assert.equal(state.activeProfileId, state.profiles[0].id);
  assert.equal(state.profiles[0].name, 'Main Alt');
  assert.equal(state.profiles.length, 1);
});

test('getActiveQuestProgress returns the progress for the active profile', () => {
  const state = normalizeQuestProfileStore({
    activeProfileId: 'default',
    profiles: [
      { id: 'default', name: 'Default', progress: { '1-test': { done: true, skipped: false } } },
      { id: 'alt', name: 'Alt', progress: { '2-test': { done: false, skipped: true } } }
    ]
  });
  assert.deepEqual(getActiveQuestProgress(state), { '1-test': { done: true, skipped: false } });
});
