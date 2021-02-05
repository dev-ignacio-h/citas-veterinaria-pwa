// archivos a cachear
const nombreCache = "apv-v1";
const archivos = [
  "/",
  "/index.html",
  "/css/bootstrap.css",
  "/css/styles.css",
  "/js/app.js",
  "/js/apv.js",
  "/manifest.json",
];
// Cuando se instala el service worker
// Buen lugar para cachear ciertos archivos
self.addEventListener("install", (e) => {
  console.log("Instalado el service worker");

  // Se espera a que se descarguen todos los archivos de caché y se agregan al caché
  e.waitUntil(
    caches.open(nombreCache).then((cache) => {
      console.log("cacheando");
      cache.addAll(archivos); // si es sólo un archivo se puede usar .add
    })
  );
});

// Activar el Service worker
// Buen lugar para nuevas versiones de la PWA
self.addEventListener("activate", (e) => {
  console.log("Service Worker Activado");

  console.log(e);
});

// Evento fetch para descargar archivos estáticos
self.addEventListener("fetch", (e) => {
  console.log(("Fetch...", e));
  e.respondWith(
    caches.match(e.request).then((respCache) => {
      return respCache;
    })
  );
});
