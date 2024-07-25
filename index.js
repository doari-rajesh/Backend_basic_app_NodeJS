const express = require("express");
const app = express();

const database = require("./config/database");
database();


// import person model schema
const Person = require('./models/Person');

const PORT = 4000 || 4001;

app.use(express.json())

app.get("/", (req, res) => {
  res.send(`<h1>Hello Sir,Server is running</h1>`);
});

app.get("/chicken", (req, res) => {
  res.send(`<h1>Hello Sir, I am serving chicken</h1>`);
  // res.redirect(`https://www.google.com`);
});

app.get("/idli", (req, res) => {
  const idli = {
    name: "idli",
    size: "medium",
    isSambar: "true"
  };
  res.status(200).json(idli);
});

app.get('/persons', async(req, res) => {
  try {
    const persons = await Person.find({});
    return res.status(200).json({
      success: true,
      message: 'Data fetched successfully',
      data: persons,
      totalPersons:persons.length
    })
  } catch {
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    })
  }
})

app.post('/person', async(req, res) => {
  try {
    const { name, age, work, mobile, email, address, salary } = req.body
    const existingPerson = await Person.findOne({ email })
    if (!existingPerson) {
      const response = await Person.create({ name, age, email, work, mobile, email, address, salary });
      return res.status(201).json({
        success: true,
        message: 'Data created successfully',
        data: response
      })
    }

    return res.status(400).json({
      success: false,
      message: 'person already exists ',
    })
  } catch (error) {
    console.log("Error in creating data........");
    console.log(error);

    return res.status(500).json({
      success: false,
      message: 'Internal Server Error',
      error: error.message
      
    })
  }
})

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
