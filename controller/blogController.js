const blogModel = require('../model/blogModel');
//handle GET blog request
function getBlogs(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    blogModel.getBlogsFromDB().then((result)=>{
        res.status(200).send(result);
    },(error)=>{
        res.status(200).send(error);
    });
}
//handle POST blog request
function addBlog(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    const {title,content} = req.query;
    blogModel.postBlogIntoDB(title,content).then((result)=>{
        res.status(200).send(result);
    },(error)=>{
        res.status(200).send(error);
    });
}
//handle PUT blog request
function updateBlog(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    const {id,title,content} = req.query;
    blogModel.updateBlogFromDB(id,title,content).then((result)=>{
        res.status(200).send(result);
    },(error)=>{
        res.status(200).send(error);
    });
}
//handle DELETE blog request
function deleteBlog(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    const {id} = req.query;
    blogModel.deleteBlogFromDB(id).then((result)=>{
        res.status(200).send(result);
    },(error)=>{
        res.status(200).send(error);
    });
}

module.exports = {getBlogs,addBlog,updateBlog,deleteBlog};