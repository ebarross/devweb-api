const app = require('../app');
const request = require('supertest');

request(app)
  .get('/restaurant')
  .expect('Content-Type', /json/)
  .expect(200)
  .end(function (err, res) {
    if (err) throw err;
  });