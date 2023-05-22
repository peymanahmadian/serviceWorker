const version='1.0';
self.addEventListener('activate',(e)=>{
    console.log(`active sw version ${version}`);
})
self.addEventListener('install',(e)=>{
    console.log('install');
})
self.addEventListener('fetch',(e)=>{
    console.log(`fetch ${e.request.url}`);
})
self.addEventListener('message',(e)=>{
    console.log(`received ${e.data.message}`);
})