const { parentPort } = require('worker_threads');

parentPort.on('message', (duration) => {
    const startTime = Date.now();
    while (Date.now() - startTime < duration) {
        // Do nothing, just wait for the specified duration
    }
    parentPort.postMessage('done');
});