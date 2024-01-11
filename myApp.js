let express = require('express');
let app = express();

// adding some kind of information. A middleware needs to be mounted using the method app.use(path, middlewareFunction).
//  The first path argument is optional.If you don’t pass it, the middleware will be executed for all requests.

// Mount the express.static() middleware to the path /public with app.use().
//  The absolute path to the assets folder is __dirname + /public.

// Now your app should be able to serve a CSS stylesheet.
//  Note that the / public / style.css file is referenced in the / views / index.html in the project boilerplate.
// Your front - page should look a little better now!



app.get('/', (req, res) => {

  app.use("/public", express.static(__dirname + "/public"));
    // Send the "views/index.html" file as a response
    res.sendFile(__dirname + "/views/index.html");
});


  
console.log("Hello World")

 module.exports = app;
