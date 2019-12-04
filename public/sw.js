const CACHE_NAME_1 = "static-cache-v1";
// const CACHE_NAME_2 = "dynamic-cache-v1";
const FILES_TO_CACHE = ["./index.html"];

this.addEventListener("install", async () => {
  const cache = await caches.open(CACHE_NAME_1);
  cache.addAll(FILES_TO_CACHE);
});
