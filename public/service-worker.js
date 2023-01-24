const cacheName= "v1";
const cacheAssets = [
    `/`,
    `/_offline`,
    `/manifest.json`,
    `/icon-16x16.png`,
    `/assets/svg/logo-indozone.svg`,
    `/assets/gif/loading-1_200.gif`,
    `/assets/icons/logo-indozone.png`,
    "/assets/css/app.css"
]


self.addEventListener("install", function (event) {
    console.log("Hello world from the Service Worker 🤙");
    event.waitUntil(
        caches
            .open(cacheName)
            .then(function(cache){
                cache.addAll(cacheAssets);
            })
            .then(function(){
                self.skipWaiting();
            })
    )
});

/**
 * call activate
 */
self.addEventListener("activate", function(e){
    console.log('Service Worker Active')
    //Remove unwanted caches
    e.waitUntil(
        caches.keys().then(cacheNames =>{
            return Promise.all(
                cacheNames.map((cache)=> {
                    if (cache !== cacheName){
                        return caches.delete(cache)
                    }
                })
            )
        })
    )
})


/**
 * Self Event
 */

self.addEventListener("fetch", function(e){
    e.respondWith(
        caches.match(e.request).then(function(response) {
            return response || fetch(e.request);
        })
    );
})
