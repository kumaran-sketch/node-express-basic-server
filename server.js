const express = require('express');
const app = express();
const PORT = 3000;
require('dotenv').config();
// Basic GET API
app.get(process.env.apiEndpoint, (req, res) => {
    console.log('Received GET request at /api/hello',req.headers);
    res.status(200).json({
        success: true,
        message: "Hello from Express server!"
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});