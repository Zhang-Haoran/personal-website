const express = require('express');
const router = express.Router();
const blogController = require('../controller/blogController');
/* GET blogs listing. */
router.get('/', blogController.getBlogs);
//POST blogs
router.post('/',blogController.addBlog);
//UPDATE blog based on id
router.put('/',blogController.updateBlog);
//DELETE blog based on id
router.delete('/',blogController.deleteBlog);
module.exports = router;
