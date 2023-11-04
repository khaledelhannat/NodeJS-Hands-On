const express = require('express');
const { Worker, isMainThread, parentPort } = require('worker_threads');

const app = express();

app.get('/', (req, res) => {
    res.send(`Performance Example ${process.pid}`);
});

app.get('/timer', (req, res) => {
    if (isMainThread) {
        const worker = new Worker('./timerWorker.js'); // Create a new worker thread

        worker.postMessage(6000); // Send the delay duration to the worker thread

        worker.on('message', () => {
            res.send(`Ding ding ding ${process.pid}`);
        });
    } else {
        parentPort.on('message', (duration) => {
            const startTime = Date.now();
            while (Date.now() - startTime < duration) {
                // Do nothing, just wait for the specified duration
            }
            parentPort.postMessage('done'); // Notify the main thread when the delay is complete
        });
    }
})


console.log('worker process started...');
app.listen(3000);