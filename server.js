const express = require("express");
const app = express();
const port = 3000;

// Basic route to simulate the web application
app.get("/", (req, res) => {
  res.send("Hello, welcome to the admissions system!");
});

// Multi-tenancy simulation: Undergraduate route
app.get("/undergraduate", (req, res) => {
  res.send("Welcome Undergraduate Student!");
});

// Multi-tenancy simulation: Graduate route
app.get("/graduate", (req, res) => {
  res.send("Welcome Graduate Student!");
});

// Multi-tenancy simulation: Staff memeber route
app.get("/staff", (req, res) => {
  res.send("Welcome Staff Memeber!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
