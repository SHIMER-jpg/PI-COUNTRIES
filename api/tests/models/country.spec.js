const { Country, conn } = require("../../src/db.js");
const { expect } = require("chai");

describe("Country model", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  describe("Validators", () => {
    beforeEach(() => Country.sync({ force: true }));

    describe("name", () => {
      it("Should work ONLY when the object is complete", (done) => {
        Country.create({
          id: "ARG",
          name: "Argentina",
          flag: "https://restcountries.eu/data/arg.svg",
          continent: "Americas",
          capital: "Buenos Aires",
          subregion: "South America",
          area: 2780400,
          population: 43590400,
        })
          .then(() => done())
          .catch((error) => done(new Error(error)));
      });

      it("should throw an error if name is null", (done) => {
        Country.create({})
          .then(() => done(new Error("It requires a valid name")))
          .catch(() => done());
      });

      it("should throw an error if id is null", (done) => {
        Country.create({
          name: "Argentina",
          flag: "https://restcountries.eu/data/arg.svg",
          continent: "Americas",
          capital: "Buenos Aires",
          subregion: "South America",
          area: 2780400,
          population: 43590400,
        })
          .then((error) => done(new Error(error)))
          .catch(() => done());
      });

      it("should throw an error if flag is null", (done) => {
        Country.create({
          id: "ARG",
          name: "Argentina",

          continent: "Americas",
          capital: "Buenos Aires",
          subregion: "South America",
          area: 2780400,
          population: 43590400,
        })
          .then((error) => done(new Error(error)))
          .catch(() => done());
      });

      it("should throw an error if capital is null", (done) => {
        Country.create({
          id: "ARG",
          name: "Argentina",
          flag: "https://restcountries.eu/data/arg.svg",
          continent: "Americas",
          subregion: "South America",
          area: 2780400,
          population: 43590400,
        })
          .then((error) => done(new Error(error)))
          .catch(() => done());
      });

      it("should throw an error if continent is null", (done) => {
        Country.create({
          id: "ARG",
          name: "Argentina",
          flag: "https://restcountries.eu/data/arg.svg",
          capital: "Buenos Aires",
          subregion: "South America",
          area: 2780400,
          population: 43590400,
        })
          .then((error) => done(new Error(error)))
          .catch(() => done());
      });

      it("should throw an error if an id is already in the db", (done) => {
        Country.create({
          id: "ARG",
          name: "Argentina",
          flag: "https://restcountries.eu/data/arg.svg",
          continent: "Americas",
          capital: "Buenos Aires",
          subregion: "South America",
          area: 2780400,
          population: 43590400,
        });

        Country.create({
          id: "ARG",
          name: "Argentina",
          flag: "https://restcountries.eu/data/arg.svg",
          continent: "Americas",
          capital: "Buenos Aires",
          subregion: "South America",
          area: 2780400,
          population: 43590400,
        })
          .then((error) => done(new Error(error)))
          .catch(() => done());
      });
    });
  });
});
