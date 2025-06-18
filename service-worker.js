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

// INSTALL: Cache all static assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
  self.skipWaiting();
});

// ACTIVATE: Delete old caches
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

// FETCH: Serve from cache first, fallback to network, then fallback to /index.html or offline message
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(event.request)
        .then((networkResponse) => {
          // Cache dynamically fetched pages (e.g., with query strings)
          return caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
        })
        .catch(() => {
          // If navigation, fallback to index.html
          if (event.request.mode === "navigate") {
            return caches.match("/index.html");
          }

          // Fallback text response for other types (e.g. images, JS)
          return new Response("You're offline. Resource not cached.", {
            headers: { "Content-Type": "text/plain" },
          });
        });
    })
  );
});
