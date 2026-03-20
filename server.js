const express = require('express');
const app = express();
const PORT = 3000;
require('dotenv').config();
app.get('/checkNginx', (req, res) => {
    console.log('Received GET request at checkNginx',req.headers);
    res.status(200).json({
        success: true,
        message: "Hello from Express server Testing!"
    });
});

// Start Server
app.listen(3000,  () => {
    console.log("Server running on port 3000");
});