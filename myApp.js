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
app.get('/views/index.html', (req, res) => {
    res.send("Hello Express")
})

console.log("Hello World")

 module.exports = app;
