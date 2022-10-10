'use strict';

let obj = {};
console.log("okay lets go")

const express = require('express');
const router = express.Router();

// App
const app = express();
var os = require('os');



router.get('/info', (req,res) => {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const info = {hostname:os.hostname(), platform:os.platform(),ip:ip}
    res.send(JSON.stringify(info)) // ip address of the user
});
  
  app.use('/', router);
  app.listen(8080);
