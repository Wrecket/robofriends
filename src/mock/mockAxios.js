import axios from "axios";
import MockAdapter from "axios-mock-adapter";

// Data
import recipesData from "../data/recipes.json";

const mock = new MockAdapter(axios);

mock.onGet("/recipes").reply(200, recipesData);

export default axios;
