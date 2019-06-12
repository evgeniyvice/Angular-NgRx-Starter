// Install express server
import express = require('express')
import { Application } from 'express'
import path = require('path')

const app: Application = express()

const PORT = process.env.PORT || 4000

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/angular-ngrx-starter'))

app.get('/*', function (req, res) {

    res.sendFile(path.join(__dirname + '/dist/angular-ngrx-starter/index.html'))
})

// Start the app by listening on the default Heroku port
app.listen(PORT, () => {
    console.log(`Node Express server listening on http://localhost:${PORT}`)
})
