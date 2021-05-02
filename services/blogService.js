const tools = require("../tools/tools");
const Pool = require('pg').Pool;
//connect to DB
const pool = new Pool({
    user: "haoranzhang",
    host: "localhost",
    database: "postgres",
    password: "",
    port: "5432"
});
//get blogs data from database
async function getBlogsFromDB() {
    return new Promise(((resolve, reject) => {
        pool.query(
            "SELECT * FROM blogs;",
            (err, result) => {
                if (err) {
                    console.log(`Can't fetch data`);
                    reject(err.message);
                }else {
                    resolve(result.rows);
                }
            }
        )
    }));
}
//post blog into database
async function postBlogIntoDB(title,content){
    return new Promise(((resolve, reject) => {
        pool.query(
            `INSERT INTO blogs(title, content, created_time, updated_time) VALUES('${title}','${content}','${tools.timeFormatter(new Date().getTime())}','${tools.timeFormatter(new Date().getTime())}');`,
            (err, result) => {
                if (err) {
                    console.log(`Can't insert data`);
                    reject(err.message);
                }else {
                    resolve('success');
                }
            }
        )
    }));
}
//updated blog based on id
async function updateBlog(id,title,content){
    return new Promise(((resolve, reject) => {
        pool.query(
            `UPDATE blogs SET title = '${title}', content = '${content}', updated_time = '${tools.timeFormatter(new Date().getTime())}' WHERE id = ${id};`,
            (err, result) => {
                if (err) {
                    console.log(`Can't update data`);
                    reject(err.message);
                }else {
                    resolve('success');
                }
            }
        )
    }));
}
//delete blog based on id
async function deleteBlog(id){
    return new Promise(((resolve, reject) => {
        pool.query(
            `DELETE FROM blogs WHERE id = ${id};`,
            (err, result) => {
                if (err) {
                    console.log(`Can't delete data`);
                    reject(err.message);
                }else {
                    resolve('success');
                }
            }
        )
    }));
}
module.exports = {getBlogsFromDB,postBlogIntoDB,updateBlog,deleteBlog};