const express = require('express')
const app = express()
const models = require('./models');
const port = 8080
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({origin: true, credentials: true}))


app.post('/createContact', function (req, res) {

  models.ContactInfo.create({
    PhoneNumber: req.body.PhoneNumber,
    Carrier: req.body.Carrier
  })
  .then((post) => {
    console.log(post);
    res.send("Contact Created");
     //res.redirect('/');
  })
  .catch((err) => {
    console.log('ERROR while creating a contact');
    res.redirect('/error');
  })

})


models.sequelize.sync({ force: false })
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is up and running on port: ${port}`)
    });
  })
