const express = require('express');
const app = express();

// Load environment variables
require('dotenv').config();

// Define your /json GET route handler
app.get('/json', (req, res) => {
    // Access MESSAGE_STYLE from environment variables
    const messageStyle = process.env.MESSAGE_STYLE;

    // Set the default message
    let message = 'uppercase';

    // Depending on MESSAGE_STYLE, transform the message
    if (messageStyle === 'uppercase') {
        message = messageStyle.toUpperCase();
        console.log("TESTING")
    }

    // Send the JSON response
   res.json({ message });
});

console.log("Hello World")
module.exports = app;
