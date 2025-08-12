const mongoose = require('mongoose')
const Schema = mongoose.Schema

// create the instance of Schema, the object inside that schema is the structure we want to save our data in them database collection
const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, {timestamps: true})

const Blog = mongoose.model('Blog', blogSchema)

module.exports = Blog;