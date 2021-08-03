const { Router } = require('express');
const fetch = require("node-fetch") 
const {loadDataBase,loadActivities} = require("./functions")
const { Activity, Country } = require('../db.js');

//Comment this once we are ready to start using the real api
const fs = require("fs")


// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
var firstLoadBoolean=true;

const router = Router();

async function firstLoad(){
    firstLoadBoolean=false;
    const files = fs.readFileSync("/Users/santiagodiaz/Desktop/PROGRA/HENRY/PI-Countries/resources/endpoint_all.json")
    const result = await loadDataBase(JSON.parse(files))
    await loadActivities()
    return result
    // fetch("https://restcountries.eu/rest/v2/all")
    //     .then(res => res.json())
    //     .then(json => loadDataBase(json))
}

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/", async (req,res)=>{
    firstLoadBoolean? await firstLoad():""; 
    res.redirect("/countries")
})

router.get("/countries/:id",async (req,res)=>{
    firstLoadBoolean? await firstLoad():""; 
    const {id} = req.params
    var countryDetails = await Country.findByPk(id.toUpperCase(),{include: Activity});
    // countryDetails.activities = await countryDetails.getActivities()
    // console.log(countryDetails.activities)
    res.json(countryDetails)
})

router.get("/countries", async (req,res)=>{
    firstLoadBoolean? await firstLoad():""; 
    const {name} = req.query;
    const countries = await Country.findAll({attributes:["id","name","continent","flag"]})
    if(name){
        var filtered = countries.filter(country => country.name.toLowerCase().includes(name.toLowerCase()))
        if(filtered.length==0){
            res.status(404).send("Not found")
        }
        else
            res.json(filtered)
    }else
        res.json(countries)
})

router.post("/activity",async (req,res)=>{
    firstLoadBoolean? await firstLoad():""; 
    const {name,difficulty,duration,seasonArray,description,countries} = req.body;
    const [SUMMER,AUTUMN,SPRING,WINTER] = seasonArray;
    try{
        var activity = await Activity.create({
            name:name,
            difficulty:difficulty,
            duration:duration,
            isSummer: SUMMER? true:false,
            isAutumn: AUTUMN? true:false,
            isWinter: WINTER? true:false,
            isSpring: SPRING? true:false,
            description:description,
        })

        countries.forEach(async country=>{
            var current = await Country.findByPk(country)
            current.addActivities(activity)
        })

        res.json(activity)
    }catch(error){
        console.log(error)
        res.status(500).send("Internal Error")
    }
})

module.exports = router;
