import { join } from 'path'

// Install express server
import express from 'express'
import path from 'path'

const app = express()

const PORT = process.env.PORT || 4000

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/angular-ngrx-starter'))

app.get('/*', function (req, res) {

    res.sendFile(path.join(__dirname + '/dist/angular-ngrx-starter/index.html'))
})

// Start the app by listening on the default Heroku port
app.listen(PORT, () => {
    console.log(`Node Express server listening on http://localhost:${PORT}`);
})
