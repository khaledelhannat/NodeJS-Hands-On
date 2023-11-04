const express = require('express');


const app = express();

function delay(duration) {
    const startTime = Date.now();
    while (Date.now() - startTime < duration) {
        // pass
    }
}

app.get('/', (req, res) => {
    res.send(`Preformance Example ${process.pid}`);
});

app.get('/timer', (req, res) => {
    // delay
    delay(6000);
    res.send(`Ding ding ding ${process.pid}`);
});


console.log('worker process started...')
app.listen(3000);




