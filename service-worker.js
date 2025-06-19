const CACHE_NAME = "myportal-v2";

const urlsToCache = [
  "/index.html",
  "/live.html",
  "/categories.html",
  "/login.html",
  "/style.css",
  "/stylelive.css",
  "/js/countdown.js",
  "/categories.js",
  "/feature.js",
  "/manifest.json",
  "/act.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      )
    )
  );
  self.clients.claim();
});


self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(event.request)
        .then((networkResponse) => {
          return caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
        })
        .catch(() => {
          if (event.request.mode === "navigate") {
            return caches.match("/index.html");
          }

          return new Response("You're offline. Resource not cached.", {
            headers: { "Content-Type": "text/plain" },
          });
        });
    })
  );
});
