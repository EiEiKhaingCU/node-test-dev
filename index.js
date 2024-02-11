
require('dotenv').config()
const express = require('express')
const http = require('http')
const app = express()
const server = http.createServer(app)
const path = require('path');
const PORT = 3050//process.env.PORT

const startServer = async () => {
    app.set('view engine', 'ejs');
    app.use(express.static(path.join(__dirname, 'public')));

    app.get('/home', (req, res) => {
        res.render('index');
    })

    app.get('/faq', async (req, res, next) => {
        return res.render('faq')
    });

    app.get('/privacy&policy', async (req, res, next) => {
        return res.render('privacy&policy')
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
