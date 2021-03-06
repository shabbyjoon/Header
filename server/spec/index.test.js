const request = require('supertest');
const server = require('../index');
const mongoose = require('mongoose');

describe('Express Server', function() {
  // const server;
  beforeAll(() => {
    mongoose.connect('mongodb://localhost:27017/spotify');
  });

  afterAll(done => {
    mongoose.disconnect(done);
  });
  // trying to figure out how to get the first test to work
  it('It should response the GET method', done => {
    request(server)
      .get('/artists/1')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  it('responds to GET to /artists/1 with JSON object', done => {
    request(server)
      .get('/artists/1')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  it('404 everything else', done => {
    request(server)
      .get('/foo/bar')
      .expect(404, done);
  });

  it('responds 400 to POST to /artists/1', done => {
    request(server)
      .post('/artists/1')
      .expect(400, done);
  });
});
