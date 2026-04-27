import seedEntries from "../data/timeline.json";
import { interactionLabels } from "../lib/constant";
import { todayISODate } from "../lib/data";

const STORAGE_KEY = "keenkeeper_timeline_entries";

function canUseStorage() {
  return typeof window !== "undefined" && Boolean(window.localStorage);
}

function sortNewestFirst(entries) {
  return [...entries].sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getTimelineEntries() {
  if (!canUseStorage()) {
    return sortNewestFirst(seedEntries);
  }

  const existing = window.localStorage.getItem(STORAGE_KEY);

  if (!existing) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(seedEntries));
    return sortNewestFirst(seedEntries);
  }

  try {
    const parsed = JSON.parse(existing);
    if (!Array.isArray(parsed)) {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(seedEntries));
      return sortNewestFirst(seedEntries);
    }
    return sortNewestFirst(parsed);
  } catch {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(seedEntries));
    return sortNewestFirst(seedEntries);
  }
}

export function saveTimelineEntries(entries) {
  if (!canUseStorage()) {
    return;
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
}

export function addInteractionEntry(type, friend) {
  const label = interactionLabels[type];

  if (!label || !friend) {
    return null;
  }

  const newEntry = {
    id: crypto.randomUUID(),
    friendId: friend.id,
    type,
    title: `${label} with ${friend.name}`,
    date: todayISODate(),
  };

  const current = getTimelineEntries();
  const updated = sortNewestFirst([newEntry, ...current]);
  saveTimelineEntries(updated);

  return newEntry;
}

export function getInteractionTypeCounts(entries) {
  return entries.reduce(
    (acc, entry) => {
      if (entry.type in acc) {
        acc[entry.type] += 1;
      }
      return acc;
    },
    { call: 0, text: 0, video: 0 }
  );
}