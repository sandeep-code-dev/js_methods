const cache = ["itemA", "itemB", "itemC"];
const MAX_CACHE_SIZE = 3;

function updateCache(newEntry, currentCache) {
  const existingIndex = currentCache.indexOf(newEntry);
  let updatedCache;
  if (existingIndex !== -1) {
    updatedCache = currentCache.toSpliced(existingIndex, 1);
    updatedCache = updatedCache.toSpliced(updatedCache.length, 0, newEntry);
  } else {
    updatedCache = updatedCache.toSpliced(currentCache.length, 0, newEntry);
  }
}
