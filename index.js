const cluster = require('cluster');

if(cluster.isMaster)
{
    cluster.fork();
    cluster.fork();
    cluster.fork();
    cluster.fork();
} else {
    const express = require('express');

    const app = express();

    app.get('/blocking', (req, res) => {
        const start = Date.now();
        while(Date.now() - start < 5000) {};
    
        res.send('blocking finish!');
    });
    
    app.get('/fast', (req, res) => {
        res.send('fast finish!');
    });

    app.listen(3000);

};



