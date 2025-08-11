const express = require('express')

const app = express()

// register view engine
app.set('view engine', 'ejs')

// change default views folder to pages
app.set('views', './pages')

// listen
app.listen(3000)


// get req
app.get('/', (req, res) => {
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    ];
    res.render('index', {title: 'Home', blogs})
})

app.get('/about', (req, res) => {
    res.render('about', {title: 'About'})
})

// redirects
// app.get('/about-me', (req, res) => {
//     res.redirect('/about')
// })

app.get('/blogs/create', (req, res) => {
    res.render('create', {title: 'Create a new blog'})
})

// 404
app.use((req, res) => {
    res.status(404).render('404', {title: '404'})
})