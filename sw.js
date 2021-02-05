// archivos a cachear
const actualizarCache = e => {
  e.waitUntil(
    caches.keys().then(keys => {
      // console.log(keys);
      return Promise.all(
        keys.filter(key => key !== nombreCache).map(key => caches.delete(key)) // se borran las versiones anteriores del cache
      );
    })
  );
};

const nombreCache = 'apv-v3';
const archivos = [
  '/',
  '/index.html',
  '/error.html',
  '/css/bootstrap.css',
  '/css/styles.css',
  '/js/app.js',
  '/js/apv.js',
  '/manifest.json',
];
// Cuando se instala el service worker
// Cachear ciertos archivos
self.addEventListener('install', e => {
  console.log('Instalado el service worker');

  // Se espera a que se descarguen todos los archivos de caché y se agregan al caché
  e.waitUntil(
    caches.open(nombreCache).then(cache => {
      console.log('cacheando');
      cache.addAll(archivos); // si es sólo un archivo se puede usar .add
    })
  );

  actualizarCache(e);
});

// Activar el Service worker
// Nuevas versiones de la PWA
self.addEventListener('activate', e => {
  console.log('Service Worker Activado');
  actualizarCache(e);
});

// Evento fetch para descargar archivos estáticos
self.addEventListener('fetch', e => {
  console.log(('Fetch...', e));
  e.respondWith(
    caches
      .match(e.request)
      .then(cacheResponse => cacheResponse || fetch(e.request))
      .catch(() => caches.match('/error.html'))
  );
});
