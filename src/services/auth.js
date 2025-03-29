require("dotenv").config();

//code from auth0:
function runauth() {
  // Import required libraries
  const express = require("express");
  const { auth } = require("express-openid-connect");

  // Create an Express application
  const app = express();

  // Configuration for authentication
  const config = {
    authRequired: false, // Whether authentication is required for all routes
    auth0Logout: true, // Allow logout through Auth0
    secret: SECRET, // Secret key
    baseURL: "https://carboload.netlify.app", // Your app's base URL
    clientID: "ZXub5vMu1fCKRM79MYhOCG68Lnk81yjs", // Your Auth0 Client ID
    issuerBaseURL: "https://dev-w0ejqwv8i5gi2wfp.us.auth0.com", // Your Auth0 domain
  };

  // Attach authentication middleware to the app
  app.use(auth(config));

  // Route to check if the user is logged in or not
  app.get("/", (req, res) => {
    res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out");
  });

  // Add any other routes your app needs
  // Example of another route
  app.get("/profile", (req, res) => {
    if (req.oidc.isAuthenticated()) {
      res.send(`Hello, ${req.oidc.user.name}`);
    } else {
      res.send("Please log in to view your profile");
    }
  });
}

module.exports = { runauth };
