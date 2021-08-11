const { Activity, Country } = require("../db.js");
const dummyActivities = [
  {
    name: "Go out Dancing",
    difficulty: "60",
    duration: "185",
    seasonArray: ["SPRING", "AUTUMN", "SUMMER"],
    description: "A nice walk in the mountain",
    countries: ["USA"],
  },
  {
    name: "Skying",
    difficulty: "80",
    duration: "400",
    seasonArray: ["WINTER"],
    description: "Skying in the Snow",
    countries: ["USA", "ARG"],
  },
  {
    name: "Scuba Diving",
    difficulty: "90",
    duration: "80",
    seasonArray: ["SUMMER", "SPRING"],
    description: "Skying in the Snow",
    countries: ["USA", "ARG"],
  },
  {
    name: "BullFight",
    difficulty: "100",
    duration: "60",
    seasonArray: ["SPRING", "SUMMER"],
    description: "Running from a bull",
    countries: ["ESP"],
  },
  {
    name: "Walking Around",
    difficulty: "10",
    duration: "120",
    seasonArray: ["WINTER", "SPRING", "AUTUMN", "SUMMER"],
    description: "A nice walk in the mountain",
    countries: ["USA", "AFG", "ESP", "ARG"],
  },
];

module.exports = {
  loadDataBase: (json) => {
    var promises = [];
    json.forEach((country) => {
      var {
        alpha3Code,
        name,
        flag,
        region,
        subregion,
        area,
        population,
        capital,
      } = country;
      var newCountry = Country.create({
        id: alpha3Code,
        name: name,
        flag: flag,
        capital: capital,
        continent: region,
        subregion: subregion,
        area: area,
        population: population,
      }).catch((error) => error);
      promises.push(newCountry);
    });
    return Promise.all(promises);
  },
  loadActivities: () => {
    var activityPromises = [];
    var countryPromises = [];
    dummyActivities.forEach(async (activity) => {
      const {
        name,
        difficulty,
        duration,
        seasonArray,
        description,
        countries,
      } = activity;
      const [SUMMER, AUTUMN, SPRING, WINTER] = seasonArray;
      var newActivity = await Activity.create({
        name: name,
        difficulty: difficulty,
        duration: duration,
        isSummer: SUMMER ? true : false,
        isAutumn: AUTUMN ? true : false,
        isWinter: WINTER ? true : false,
        isSpring: SPRING ? true : false,
        description: description,
      });
      activityPromises.push(newActivity);
      countries.forEach(async (country) => {
        var current = await Country.findByPk(country);
        current.addActivities(newActivity);
      });
    });

    return Promise.all(activityPromises);
  },
};
