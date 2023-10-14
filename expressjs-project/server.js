const express = require('express');
const path = require('path');

const homeRouter = require('./routes/home.router');
const friendsRouter = require('./routes/friends.router');
const messagesRouter = require('./routes/messages.router');
const profileRouter = require('./routes/profile.router');




const app = express();
const PORT = 3000;


app.use((req, res, next) => {
    const aly = {
        'req.method': req.method,
        'req.url': req.url
    }

    console.log(aly);
    next();
})

app.use(express.json());

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));



app.use('/user-profile', profileRouter);
app.use('/', homeRouter);
app.use('/list', friendsRouter);
app.use('/messages', messagesRouter);


app.listen(PORT, () => {
    console.log(`Listening on ${PORT}...`)
})

