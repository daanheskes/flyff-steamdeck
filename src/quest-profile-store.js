'use strict';

function makeProfileId() {
  return `profile-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`;
}

function normalizeQuestProfileStore(store = {}) {
  const profiles = Array.isArray(store.profiles) && store.profiles.length
    ? store.profiles.map(profile => ({
        id: profile.id || makeProfileId(),
        name: profile.name || 'Untitled Profile',
        progress: profile.progress && typeof profile.progress === 'object' ? profile.progress : {}
      }))
    : [{ id: 'default', name: 'Default', progress: {} }];

  const activeProfileId = store.activeProfileId && profiles.some(p => p.id === store.activeProfileId)
    ? store.activeProfileId
    : profiles[0].id;

  return { activeProfileId, profiles };
}

function getActiveQuestProgress(store) {
  const normalized = normalizeQuestProfileStore(store);
  const activeProfile = normalized.profiles.find(p => p.id === normalized.activeProfileId) || normalized.profiles[0];
  return activeProfile.progress || {};
}

function createQuestProfile(store, name) {
  const normalized = normalizeQuestProfileStore(store);
  const trimmed = (name || '').trim();
  const profileName = trimmed || 'Untitled Profile';
  const newProfile = { id: makeProfileId(), name: profileName, progress: {} };
  const profiles = [...normalized.profiles, newProfile];
  return { ...normalized, activeProfileId: newProfile.id, profiles };
}

function renameQuestProfile(store, profileId, name) {
  const normalized = normalizeQuestProfileStore(store);
  const trimmed = (name || '').trim();
  const profiles = normalized.profiles.map(profile => profile.id === profileId
    ? { ...profile, name: trimmed || profile.name || 'Untitled Profile' }
    : profile);
  return { ...normalized, profiles };
}

function deleteQuestProfile(store, profileId) {
  const normalized = normalizeQuestProfileStore(store);
  const remaining = normalized.profiles.filter(profile => profile.id !== profileId);
  if (!remaining.length) {
    const fallback = { id: 'default', name: 'Default', progress: {} };
    return { ...normalized, activeProfileId: fallback.id, profiles: [fallback] };
  }

  const nextActiveProfileId = normalized.activeProfileId === profileId
    ? remaining[0].id
    : normalized.activeProfileId;

  return { ...normalized, activeProfileId: nextActiveProfileId, profiles: remaining };
}

function switchQuestProfile(store, profileId) {
  const normalized = normalizeQuestProfileStore(store);
  if (!normalized.profiles.some(profile => profile.id === profileId)) return normalized;
  return { ...normalized, activeProfileId: profileId };
}

module.exports = {
  normalizeQuestProfileStore,
  createQuestProfile,
  renameQuestProfile,
  deleteQuestProfile,
  switchQuestProfile,
  getActiveQuestProgress
};
