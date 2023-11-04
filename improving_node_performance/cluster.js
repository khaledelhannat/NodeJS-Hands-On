const express = require('express');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

const app = express();

function delay(duration) {
    const startTime = Date.now();
    while (Date.now() - startTime < duration) {
        // pass
    }
}

app.get('/', (req, res) => {
    res.send(`Performance Example (Process ${process.pid})`);
});

app.get('/timer', (req, res) => {
    delay(6000);
    res.send(`Ding ding ding (Process ${process.pid})`);
});

if (cluster.isMaster) {
    // Create a worker for each CPU core
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died`);
    });
} else {
    console.log(`Worker ${process.pid} started`);
    app.listen(3000);
}
