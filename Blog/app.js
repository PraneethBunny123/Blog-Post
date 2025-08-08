const express = require('express')

const app = express()

app.listen(3000)

app.get('/', (req, res) => {
    console.log(req.url, req.method)
    res.send('<p>Home express</p>')
})