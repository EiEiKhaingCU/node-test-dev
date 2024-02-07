require('dotenv').config()
const express = require('express')
const http = require('http')
const app = express()
const server = http.createServer(app)
const PORT = 3000//process.env.PORT

const startServer = async () => {
    app.get('/', (req, res) => {
        res.send('Hello, world! This is the index page.');
    })
    app.get('/api/data', (req, res) => {
        const data = {
          message: 'This is some data from the API route.',
          timestamp: new Date().toISOString()
        };
        res.json(data);
      });

    server.listen(PORT, () => {
        console.log(`User service is running on port : ${PORT}`)
    })
        .on('error', (err) => {
            console.log(err);
            process.exit();
        })
        .on('close', () => {
            channel.close();
        })

}

startServer().then(() => console.log(`Node Test App is triggering.`))