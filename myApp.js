let express = require('express');
let app = express();
require('dotenv').config();

app.get('/', (req, res) => {

  app.use("/public", express.static(__dirname + "/public"));
    // Send the "views/index.html" file as a response
  res.sendFile(__dirname + "/views/index.html");
  
});
app.get('/json', (req, res) => {
  // Access MESSAGE_STYLE from environment variables
  const messageStyle = process.env.MESSAGE_STYLE;

  // Set the default message
  let message = 'Hello json';

  // Depending on MESSAGE_STYLE, transform the message
  if (messageStyle && messageStyle.toLowerCase() === 'uppercase') {
    message = message.toUpperCase();
  }

  // Send the response object
  res.json({ message });
});

console.log("Hello World")
 module.exports = app;
