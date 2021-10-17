const supertest = require('supertest');
const app = require('../app');

const request = supertest(app);

describe('/blog',()=>{
    describe('POST',()=>{
        it('should return 200 if request contains valid title and content', async ()=>{
            const res = await request.post('/api/v1/blogs').send({title:'jest test', content:'jest test'});
            expect(res.statusCode).toBe(200);
        })
    })
})