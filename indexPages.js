const serviceWorkerFileName="./service-worker.js";
if('serviceWorker' in navigator){
    window.addEventListener('load',()=>{
        navigator.serviceWorker.register(serviceWorkerFileName).then((res)=>{
            console.log('SW register success',res.scope);
        }),
        (error)=>{
            console.log('SW register failed',error);
        }
    })
}