const cacheName = 'my-app-cache';

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll([
        '/index.html',
        '/css/styles.css',
        '/css/normalize.css',
        '/css/f_btns.css',
        '/css/h_btns.css',
        '/css/m_tabela.css',
        '/css/modal.css',
        '/css/s_cronometro.css',
        '/css/s_dados_relatorio.css',
        '/js/index.js',
        '/js/elementsDOM.js',
        '/js/relatorioTabela.js',
        '/js/cronometro.js'
        // '/app.js'
      ]);
    }).catch(error =>{
        console.error('Falha ao armazenar em cache recursos:', error)
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
