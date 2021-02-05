// Cuando se instala el service worker
// Buen lugar para cachear ciertos archivos
self.addEventListener('install', e => {
    console.log('Instalado el service worker');

    console.log(e);
})

// Activar el Service worker
// Buen lugar para nuevas versiones de la PWA
self.addEventListener('activate', e => {
    console.log('Service Worker Activado');

    console.log(e);
})

// Evento fetch para descargar archivos estáticos
self.addEventListener('fetch', e => {
    console.log(('Fetch...', e));
})