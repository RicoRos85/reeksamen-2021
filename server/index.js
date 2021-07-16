const express = require('express');
// Used for more fancy output in console
const consola = require('consola');
// Used for building server rendered apps with Vue.js
const { Nuxt, Builder } = require('nuxt');
// Used for parsing incoming body requests
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();

// Import and set Nuxt.js options
const config = require('../nuxt.config.js');
// Import Router file (server/router.js)
const router = require('./router');
// Import .env file
config.dev = process.env.NODE_ENV !== 'production';

async function start() {
    // Init Nuxt.js
    const nuxt = new Nuxt(config);

    const { host, port } = nuxt.options.server;

    // Build only in DEV mode
    if(config.dev) {
        const builder = new Builder(nuxt);
        await builder.build();
    } else {
        await nuxt.ready();
    }

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    // Use express-session to keep track if User is logged in
    app.use(
        session({
            secret: 'ad7279aea9223ff746eef490',
            resave: false,
            saveUninitialized: false
        })
    );

    // Apply the routes to our application
    app.use('/', router);

    // Give Nuxt middleware to Express
    app.use(nuxt.render);

    // Listen to the server
    app.listen(port, host);
    consola.ready({
        message: `Server listening on http://${host}:${port}`,
        badge: true
    })
}
start();