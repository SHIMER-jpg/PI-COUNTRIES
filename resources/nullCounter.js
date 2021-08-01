/*
RESULTS OF VALIDATION
{
  name: 0,
  alpha3Code: 0,
  flag: 0,
  region: 2, --
  capital: 5, --
  subregion: 3, --
  area: 10,
  population: 2
}
*/

const fs = require("fs");
const path = require('path');

const basename = path.basename(__filename);

var file = fs.readFileSync(path.join(__dirname, 'endpoint_all.json'))

var countries= JSON.parse(file);

var nullCounter ={
    name:0,
    alpha3Code:0,
    flag:0,
    region:0,
    capital:0,
    subregion:0,
    area:0,
    population:0
}


for(let x = 0; x<countries.length ; x++){
    var actual = countries[x]
    for (key in nullCounter){
        if(!actual[key]){
            nullCounter[key]++
        }
    }
}

console.log(nullCounter)