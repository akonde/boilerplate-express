let express = require('express');
let app = express();
require('dotenv').config();

app.get('/', (req, res) => {

  app.use("/public", express.static(__dirname + "/public"));
    // Send the "views/index.html" file as a response
  res.sendFile(__dirname + "/views/index.html");
  
});

// app.get('/json', (req, res) => {
  
//   app.use("/json", express.static(__dirname + "/json"));
//   // Send the "views/index.html" file as a response
//   const messageStyle = process.env.MESSAGE_STYLE || 'uppercase';
//   const message = (messageStyle === 'uppercase') ? 'HELLO JSON' : 'Hello json'; 
//   res.json({ "message": "Hello json" })
//   console.log("testing server")
// });

app.get('/json', (req, res) => {
  // Access process.env.MESSAGE_STYLE and transform the message accordingly
  const messageStyle = process.env.MESSAGE_STYLE || 'uppercase';
  const message = (messageStyle === 'uppercase') ? 'HELLO JSON' : 'Hello json';

  // Respond with a JSON object
  res.json({ message });
});

console.log("Hello World")
 module.exports = app;
