const express = require('express')

const app = express()

// listen
app.listen(3000)


// get req
app.get('/', (req, res) => {
    res.sendFile('./pages/index.html', {root: __dirname})
})

app.get('/about', (req, res) => {
    res.sendFile('./pages/about.html', {root: __dirname})
})

// redirects
app.get('/about-me', (req, res) => {
    res.redirect('/about')
})

// 404
app.use((req, res) => {
    res.status(404).sendFile('./pages/404.html', {root: __dirname})
})