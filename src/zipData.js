const fs = require('fs');
const parse = require('csv-parse/lib/sync');

const data = fs.readFileSync('./data/HurricaneEvacuationCenters.csv');

const records = parse(data, { columns: true });

const byZip = {};


records.forEach((rec) => {
  if(byZip[rec.Zip] === undefined) {

    byZip[rec.Zip] = [];
    //console.log(rec.Zip)

  }
  byZip[rec.Zip].push(rec);

});


module.exports =  byZip ;
