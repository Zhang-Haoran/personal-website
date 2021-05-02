const express = require('express');
const router = express.Router();
const blogController = require('../controller/blogController');
/* GET blogs listing. */
router.get('/', blogController.getBlogs);
//POST blogs
router.post('/add',blogController.addBlog);
//UPDATE blog based on id
router.put('/update',blogController.updateBlog);
//DELETE blog based on id
router.delete('/delete',blogController.deleteBlog);
module.exports = router;
