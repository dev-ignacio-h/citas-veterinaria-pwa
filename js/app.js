// Resgistrar service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('./sw.js')
    .then((resgistrado) =>
      console.log('Se registró correctamente... ', resgistrado)
    )
    .catch((error) => console.log('falló la instalación... ', error));
} else {
  console.log('Service Workers no soportados');
}
