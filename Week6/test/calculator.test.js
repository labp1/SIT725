// Import Chai's assertion test and request library
const expect = require("chai").expect;
const request = require("request");

describe("Project API Tests", function () {
    const baseUrl = "http://localhost:3000";

    // Test Case 1: Server Health Check
    it("return status 200 to check if server works", function(done) {
        // Request() is an async function: Send GET HTTP request to baseURL
        request(baseUrl, function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            // Needs done() to wait for request() to finish
            done();
        });
    });

    // Test Case 2: Get All Projects API Endpoint
    it("should return all projects with status 200 and return valid project data response", function(done) {
        request(`${baseUrl}/api/projects`, function(error, response, body) {
            // Expect the status code to be 200
            expect(response.statusCode).to.equal(200);

            // Test the response content
            const jsonResponse = JSON.parse(body);
            expect(jsonResponse).to.have.property('status');

            expect(jsonResponse).to.have.property('data');
            expect(jsonResponse.data).to.be.an('array');
            
            expect(jsonResponse).to.have.property('message');
            expect(jsonResponse.message).to.be.a('string');
            
            done();
        });
    });

    // Test Case 3: Static File Access (CSS/JS/Images)
    it("should serve static files from public directory", function (done) {
        request.get(`${baseUrl}/js/scripts.js`, function (error, response, body) {
            expect(response.statusCode).to.equal(200);
            expect(body).to.include('function'); // Verify it's actually JavaScript content
            done();
        });
    });

    // Test Case 4: Non-existing Endpoint Handling
    it("should return status code 404 for non-existent API endpoints", function (done) {
        request.get(`${baseUrl}/nonexistent`, function (error, response, body) {
            expect(response.statusCode).to.equal(404); 
            done();
        });
    });

});
