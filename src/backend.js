const express = require('express')
const app = express()
const models = require('./models');
const port = 8080
const bodyParser = require('body-parser');
const cors = require('cors');

const zipdb = require('./zipData.js');
console.log(">>>" + zipdb.byZip);

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


app.post('/zipInput', (req, res) => {
  var zip = req.body.ZipInput;

  var data = zipdb[zip];
  console.log(data);
  res.send(data);

  console.log(data[0].the_geom + "<<<<<<<<<<<<<<<<")

  var myString = data[0].the_geom;
  var myRegexp = /\(([-\d\.]+)\s([-\d\.]+)\)/g;
  var match = myRegexp.exec(myString);
  console.log(match[1]);
  console.log(match[2]);


});


models.sequelize.sync({ force: false })
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is up and running on port: ${port}`)
    });
  })
