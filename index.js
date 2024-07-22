const express = require("express");
const app = express();

const PORT = 4000 || 4001;

app.get("/", (req, res) => {
  res.send(`<h1>Server is running</h1>`);
});

app.get("/chicken", (req, res) => {
  res.send(`<h1>Hello Sir, I am serving chicken</h1>`);
});

app.get("/idli", (req, res) => {
  const idli = {
    name: "idli",
    size: "medium",
    isSambar: "true",
  };
  res.status(200).json(idli);
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
