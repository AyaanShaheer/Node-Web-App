const request = require('supertest');
const app = require('../index'); // Import the app from index.js

describe('GET /', () => {
  it('responds with Hello, World! message', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .expect('Hello, World! This is my CI/CD demo app.', done);
  });
});