import { render, screen } from "@testing-library/react";
import { configure, mount } from "enzyme";
import { Provider } from "react-redux";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import App from "../../App";
import { CountryDetails } from "./CountryDetails";
import configureStore from "redux-mock-store";
import { MemoryRouter } from "react-router-dom";

configure({ adapter: new Adapter() });

describe("Country Details", () => {
  let wrapper;
  let Country = {
    id: "ARG",
    name: "Argentina",
    flag: "https://restcountries.eu/data/arg.svg",
    continent: "Americas",
    capital: "Buenos Aires",
    subregion: "South America",
    area: 2780400,
    population: 43590400,
  };
  let store;
  const middlewares = [];
  const mockStore = configureStore(middlewares);
  let match = { params: { id: "ARG" } };

  beforeEach(() => {
    store = mockStore([]);
  });

  it('Debería renderizarse en la ruta "/"', () => {
    var wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/country/ARG"]}>
          <CountryDetails
            countryDetails={Country}
            match={match}
            getCountryDetail={() => Country}
            setPage={() => {}}
          />
        </MemoryRouter>
      </Provider>
    );

    return expect(wrapper.find(".title")).to.have.lengthOf(1);
  });
});
