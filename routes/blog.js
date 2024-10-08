const express = require('express');
const path = require('path');
const blogs = require('../data/blogs');
const router = express.Router();

router.get('/', (req, res) =>{
    // res.sendFile(path.join(__dirname, '../templates/index.html'));
    res.render('home');
})

router.get('/blog', (req, res) =>{
    res.render('blogHome',{
        blogs : blogs
    });
})

router.get('/blogpost/:slug', (req, res) =>{
    // blogs.forEach(e => {
    //     console.log(e.title);
    // });
    myBlog = blogs.filter((e)=>{
        return e.slug == req.params.slug
    })
    res.render('blogPage',{
        title: myBlog[0].title,
        content: myBlog[0].content,
        author: myBlog[0].author
    })
})


module.exports = router