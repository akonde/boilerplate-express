let express = require('express');
let app = express();

// app.get('/', (req, res) => {

//   app.use("/public", express.static(__dirname + "/public"));
//     // Send the "views/index.html" file as a response
//   res.sendFile(__dirname + "/views/index.html");
  
// });

app.get('/json', (req, res) => {

  app.use("/json", express.static(__dirname + "/json"));
    // Send the "views/index.html" file as a response
  res.json({ "message": "Hello json" })
  console.log("testing server")
});

  
// console.log("Hello World")

 module.exports = app;
