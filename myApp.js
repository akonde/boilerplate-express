let express = require('express');
// let http = require('http');
let app = express();

// let’s serve our first string! In Express,
//  routes takes the following structure: app.METHOD(PATH, HANDLER).
// METHOD is an http method in lowercase.
// PATH is a relative path on the server(it can be a string, or even a regular expression).
// HANDLER is a function that Express calls when the route is matched.
// Handlers take the form function(req, res) {... }, where req is the request object, and
// res is the response object.For example, the handler

// function(req, res) {
//   res.send('Response String');
// }
// will serve the string 'Response String'.
// app.get('/views/index.html', (req, res) => {
//     res.sendFile(path.join(__dirname, 'views', 'index.html'));
// })

app.get('/', (req, res) => {
    // Send the "views/index.html" file as a response
    res.sendFile(__dirname, 'views', 'index.html');
  });

console.log("Hello World")

 module.exports = app;
