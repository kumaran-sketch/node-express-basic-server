const express = require('express');
const app = express();
const PORT = 3000;
require('dotenv').config();
app.get('/checkNginx', (req, res) => {
    console.log('Received GET request at checkNginx',req.headers);
    res.status(200).json({
        success: true,
        message: "Hello from Express server Testing the mat!"
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});