const request = require('supertest');

const server = require('./server');

describe('server', function(){
    it('runs the tests', function(){
        expect(true).toBe(true);
    })

    describe('GET /', function() {
        it('should return 200 OK', function() {
            // make a GET request to /
            request(server).get('/')
                .then(res => {
                // check that the status code is 200
                expect(res.status).toBe(200);
            })
        })

        it('should return JSON', function(){
            return request(server).get('/')
                .then(res => {
                    expect(res.type).toMatch(/json/i)
                })
        })

        it('should return JSON', function(){
            return request(server).get('/')
                .then(res => {
                    expect(res.body.api).toBe("up");
                })
        })
    })
});