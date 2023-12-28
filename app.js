// server.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3002;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Handle form submission
app.post('/submit-form', (req, res) => {
  const { name, mobile, email, ageInput, state, city, country } = req.body;

  console.log(req.body);

  // Redirect to the second page with query parameters
  res.redirect(`/second-page?name=${encodeURIComponent(name)}&mobile=${encodeURIComponent(mobile)}&email=${encodeURIComponent(email)}&age=${encodeURIComponent(ageInput)}&state=${encodeURIComponent(state)}&city=${encodeURIComponent(city)}&country=${encodeURIComponent(country)}`);
});


app.get('/second-page', (req, res) => {
  const { name, mobile, email, age, state, city, country } = req.query;

  console.log(req.query);

  // when user click submit button render the second page with submitted data
  // res.send(`
  //   <!DOCTYPE html>
  //   <html lang="en">
  //   <head>
  //     <meta charset="UTF-8">
  //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
  //     <link rel="stylesheet" href="style.css">
  //     <title>Second Page</title>
  //   </head>
  //   <body>
  //     <div class="container">
  //       <h2>Submitted Data</h2>
  //       <p>Name: ${name}</p>
  //       <p>Father's Name: ${fathername}</p>
  //       <p>Mother's Name: ${mothername}</p>
  //       <p>Mobile Number: ${mobile}</p>
  //       <p>Email: ${email}</p>
  //       <p>Age: ${age}</p>
  //       <p>State: ${state}</p>
  //       <p>City: ${city}</p>
  //       <p>Country: ${country}</p>
  //     </div>
  //   </body>
  //   </html>
  // `);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});