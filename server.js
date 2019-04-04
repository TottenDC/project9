'use strict';

// Modules
const express = require('express');

// Variables
const app = express();

// Port setup
app.set('port', process.env.PORT || 30);

// Express middleware
app.use(express.json());

// Route declarations
// Serve React app as static asset in production
if (process.env.NODE_ENV === "production") {
    app.use(express.static('gallery_app/build'));
}

// 404 error handler
app.use((req, res, next) => {
    const err = new Error('Page Not Found');
    err.status = 404;
    next(err);
});
  
// Global error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500);
    const errLog = {
      status: err.status,
      message: err.message,
      stack: err.stack
    };
    res.json(errLog);
});
  
// Start port
const server = app.listen(app.get('port'), () => {
console.log(`Express server is listening on port ${server.address().port}`);
});