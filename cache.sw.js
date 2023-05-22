const cacheName='version-1';
self.addEventListener('install',(e)=>{
    console.log("installing");
    e.waitUntil(
        caches.open(cacheName).then((cache)=>{
            return cache.addAll(['/','/index.html','/style.css'])
        })
    )
})
self.addEventListener('fetch',(e)=>{
    console.log(`fetch on ${e.request.url}`);
    e.respondWith(
        caches.match(e.request).then(res=>{
            if(res){
                return res
            }
            return fetch(e.request);
        })
    )
})