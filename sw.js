self.addEventListener("install", function(e){
  self.skipWaiting();
});

self.addEventListener("activate", function(e){
  self.clients.claim();
});

self.addEventListener("fetch", function(e){
  // Intentionally does nothing: not calling e.respondWith() lets every
  // request (including Supabase login/API calls) pass through to the
  // network completely untouched. This listener only needs to exist
  // for Android/Chrome to consider the site installable.
});
