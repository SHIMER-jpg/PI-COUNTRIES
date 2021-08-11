/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require("chai");
const session = require("supertest-session");
const app = require("../../src/app.js");
const { Country, conn } = require("../../src/db.js");

const agent = session(app);
const country = {
  name: "Argentina",
};

describe("Country routes", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );

  //PREGUNTAR A MATI, ESTE PEDAZO ME ROMPE LA POSIBILIDAD DE TESTEAR LA DB
  // beforeEach(
  //   () => Country.sync({ force: true }) //.then(() => Country.create(pokemon))
  // );

  describe("GET /countries", () => {
    it("should get 200", () => agent.get("/countries").expect(200));

    it("Should return a JSON with the data", () => {
      return agent.get("/countries").expect("Content-Type", /json/);
    });

    it("Should return 248 elements at first", () => {
      return agent
        .get("/countries")
        .then((res) => (rta = expect(res.body.length).to.equal(248)));
    });

    it("Should store all countries in the db", () => {
      return agent
        .get("/countries")
        .then(
          Country.findAll().then((response) =>
            expect(response.lenght).to.equal(248)
          )
        );
    });

    it("Should search by country name", () => {
      return agent
        .get("/countries?name=Argentina")
        .then((res) => expect(res.body[0].name).to.equal("Argentina"));
    });

    it("Should return a rror message when nothign is found", () => {
      return agent
        .get("/countries?name=NotGonnaFindMe")
        .expect(404)
        .then((res) => {
          expect(res.body).to.deep.equal({ error: "Country not found" });
        });
    });
  });
});
