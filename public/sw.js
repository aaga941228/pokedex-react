const CACHE_NAME_1 = "static-cache-v1";
const CACHE_NAME_2 = "dynamic-cache-v1";
const FILES_TO_CACHE = ["./index.html"];

this.addEventListener("install", async () => {
  const cache = await caches.open(CACHE_NAME_1);
  cache.addAll(FILES_TO_CACHE);
});

this.addEventListener("active", () => {
  console.log("sw activated");
});

this.addEventListener("fetch", event =>
  event.respondWith(cacheThenNetwork(event))
);

const cacheThenNetwork = async event => {
  const { request } = event;
  const cache = await caches.open(CACHE_NAME_2);
  const cachedResponse = await cache.match(request);

  if (cachedResponse) {
    return cachedResponse;
  }

  const networkResponse = await fetch(request);
  return networkResponse;
};
