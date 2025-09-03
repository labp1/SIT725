// socket.test.js
const socketClient = require("socket.io-client");
const { expect } = require("chai");
const serverInstance = require("../server"); // Import and auto-initialize the server

/**
 * Test suite for Socket.IO server functionality
 * Verifies that the server correctly handles socket connections and broadcasts data
 */
describe("Socket.IO Server Testing Suite", function () {
  // Variable to store our socket connection instance
  let testSocketConnection;

  // Set maximum timeout for all tests in this suite to 5 seconds
  this.timeout(5000);

  /**
   * Setup phase: Execute once before all tests run
   * Establishes a socket connection to the test server
   */
  before((done) => {
    // Initialize a new socket.io client connection to our test server
    testSocketConnection = socketClient("http://localhost:3000");
    
    // Wait for successful connection before proceeding with tests
    testSocketConnection.on("connect", done);
  });

  after(() => {
    // Check if socket is still active before attempting to close
    if (testSocketConnection.connected) {
      // Gracefully terminate the socket connection
      testSocketConnection.disconnect();
    }
    
    // Shutdown the server after tests
    serverInstance.close();
  });

  /**
   * Test case: Verify server broadcasts numeric data to connected clients
   * This test validates that the random number emission functionality works correctly
   */
  it("should successfully receive numeric data via socket events", (done) => {
    // Listen for the 'number' event that our server emits every second
    testSocketConnection.on("number", (receivedValue) => {
      // Verify that the received data is of numeric type
      // This confirms our server is sending the expected data format
      expect(receivedValue).to.be.a("number");
      
      // Test passes - call done() to indicate successful completion
      done();
    });
  });
});
