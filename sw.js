const CACHE='ki-tefillah-v3';
const SHELL=['/','/index.html','/style.css','/app.js','/data.js','/recordings.json','/manifest.webmanifest','/assets/images/ki-logo.png','/assets/images/icon-192.png','/assets/images/icon-512.png','/assets/cards/K-1.png','/assets/cards/2-3.png','/assets/cards/4-5.png'];

self.addEventListener('install',e=>{self.skipWaiting();});

self.addEventListener('activate',e=>{
  e.waitUntil(
    caches.keys()
      .then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))
      .then(()=>self.clients.claim())
  );
});

self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET') return;
  const url=new URL(e.request.url);
  if(url.origin!==self.location.origin) return;

  e.respondWith(
    fetch(e.request)
      .then(r=>{
        if(!r || r.status!==200) return r;
        const copy=r.clone();
        caches.open(CACHE).then(c=>c.put(e.request,copy));
        return r;
      })
      .catch(()=>caches.match(e.request))
  );
});
