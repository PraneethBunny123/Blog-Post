require('dotenv').config();

const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')

const blogRoutes = require('./routes/blogRoutes')

const app = express()

// connect to mongodb
const dbUrl = process.env.MONGO_URI;

mongoose.connect(dbUrl)
    .then(() => app.listen(3000))
    .catch(err => console.error(err));

// register view engine
app.set('view engine', 'ejs')

// change default views folder to pages
app.set('views', './pages')

// listen
// moved inside of mongoose, so that we only listen for requests when connection to mongodb is established.

// middleware
// app.use((req, res, next) => {
//     console.log('New request made:')
//     console.log('Host: ', req.hostname)
//     console.log('Path: ', req.path)
//     console.log('Method: ', req.method)
//     next()
// })

//static files and middleware
app.use(express.static('public'))

// middleware to access data from form and pass it to req, so that the data will be added to database
app.use(express.urlencoded({extended: true}))

// middleware morgan
app.use(morgan('dev'))

// mongoose routes
// app.get('/add-blog', (req, res) => {
//     const blog = new Blog({
//         title: 'New Blog2',
//         snippet: 'New praneeth snippet',
//         body: 'A new blog by praneeth'
//     })

//     blog.save()
//         .then(result => {
//             res.send(result)
//         })
//         .catch(err => console.log(err)) 
// })

// // all blogs
// app.get('/all-blogs', (req, res) => {
//     Blog.find()
//         .then(result => {res.send(result)})
//         .catch(err => {console.log(err)})
// })

// // single blog
// app.get('/single-blog', (req, res) => {
//     Blog.findById('689b611f901a7704a9217d95')
//         .then(result => { res.send(result) })
//         .catch(err => {console.log(err)})
// })


// get req
app.get('/', (req, res) => {
    res.redirect('/blogs')

    // dummy data

    // const blogs = [
    //     {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    //     {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    //     {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    // ];
    // res.render('index', {title: 'Home', blogs})
})

app.get('/about', (req, res) => {
    res.render('about', {title: 'About'})
})

// blog routes
app.use('/blogs', blogRoutes)

// redirects
// app.get('/about-me', (req, res) => {
//     res.redirect('/about')
// })

// delete


// 404
app.use((req, res) => {
    res.status(404).render('404', {title: '404'})
})