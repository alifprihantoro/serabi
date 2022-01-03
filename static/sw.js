if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('/sw.js', { scope: '/' })
        .then(() => {
            console.info('Developer for Life Service Worker Registered');
        }, err => console.error("Developer for Life Service Worker registration failed: ", err));

    navigator.serviceWorker
        .ready
        .then(() => {
            console.info('Developer for Life Service Worker Ready');
        });
}
