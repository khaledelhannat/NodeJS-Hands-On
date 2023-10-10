const http = require('http');

const PORT = 3000;

// Initialize a list of friends with some default data.
let friendsList = [
    {
        id: 0,
        name: 'Sir Kal Natt'
    },
    {
        id: 1, 
        name: 'Ser Micke Tayson'
    },
    {
        id: 2,
        name: 'Ser Donald Trump'
    }
];

// Create an HTTP server using Node.js's built-in 'http' module.
const server = http.createServer((req, res) => {

    // Split the URL path into an array of segments.
    const items = req.url.split('/');

    // Check the HTTP method and URL segments to determine how to handle the request.

    if(req.method === 'POST' && items[1] == 'friends'){
        // If it's a POST request to '/friends', handle incoming friend data.
        req.on('data', (data)=>{
            const friend = data.toString();
            console.log('Request:', friend);

            // Parse the received JSON data and add the friend to the list.
            friendsList.push(JSON.parse(friend));
        });

        // Pipe the incoming request to the response to acknowledge receipt.
        req.pipe(res);

    } else if (req.method === 'GET' && items[1] == 'friends') {
        // If it's a GET request to '/friends', handle friend list retrieval.

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');

        if (!items[2]){
            // If no specific friend ID is provided, send the entire friends list as JSON.
            res.end(JSON.stringify(friendsList));
        } else if (items[2]) {
            if(friendsList[items[2]]){
                // If a specific friend ID is provided and it exists, send that friend's data.
                res.end(JSON.stringify(friendsList[+items[2]]));
            } else {
                // If the requested friend ID doesn't exist, return a 404 error.
                res.statusCode = 404;
                res.setHeader('Content-Type', 'text/html');
                res.write('<html>');
                res.write('<body>');
                res.write('<ul>');
                res.write('<h2>Friend Not Found!</h2>');
                res.write('</ul>');
                res.write('</body>');
                res.write('</html>');
                res.end();
            }
        }

    } else if (req.method === 'GET' && items[1] === 'messages') {
        // If it's a GET request to '/messages', return a simple HTML message.

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<body>');
        res.write('<ul>');
        res.write('<li>Hello Kal!</li>');
        res.write('<li>How are you doing today?</li>');
        res.write('</ul>');
        res.write('</body>');
        res.write('</html>');
        res.end();
    } else if (req.method === 'GET' && items[1] === '') {
        // If it's a GET request with no specific path, return a simple home page.

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<body>');
        res.write('<ul>');
        res.write('<h1>This is Your Home Page</h1>');
        res.write('</ul>');
        res.write('</body>');
        res.write('</html>');
        res.end();
    } else {
        // For any other requests, return a 404 error.

        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<body>');
        res.write('<h1>ERROR 404: Page Not Found :(</h1>');
        res.write('</body>');
        res.write('</html>');
        res.end();
    }
});

// Start the server and listen on the specified port.
server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
})
