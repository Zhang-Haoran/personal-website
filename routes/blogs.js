const express = require('express');
const router = express.Router();
const blogService = require('../services/blogService')

/* GET blogs listing. */
router.get('/', function(req, res, next) {
    blogService.getBlogsFromDB().then((result)=>{
        res.status(200).send(result);
    },(error)=>{
        res.status(200).send(error);
    });
});

//POST blogs
router.post('/add',function (req,res){
    const {title,content} = req.query;
    blogService.postBlogIntoDB(title,content).then((result)=>{
        res.status(200).send(result);
    },(error)=>{
        res.status(200).send(error);
    });
});

//UPDATE blog based on id
router.put('/update',function (req,res){
    const {id,title,content} = req.query;
    blogService.updateBlog(id,title,content).then((result)=>{
        res.status(200).send(result);
    },(error)=>{
        res.status(200).send(error);
    });
});

//DELETE blog based on id
router.delete('/delete',function (req,res){
    const {id} = req.query;
    blogService.deleteBlog(id).then((result)=>{
        res.status(200).send(result);
    },(error)=>{
        res.status(200).send(error);
    });
});
module.exports = router;
