// Ver https://stackoverflow.com/questions/46541071/progressive-web-app-does-not-work-offline-error
// https://developer.mozilla.org/es/docs/Web/Manifest
//ESTA ES LA POSTA PARA QUE SE MUESTRE EL BANNER
self.addEventListener('fetch', function(event){
  // console.log('fetch', event);
});


self.addEventListener('install', function(event) {
  // console.log('install', event);
});
