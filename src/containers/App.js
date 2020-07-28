import React, { useState, useEffect } from "react";
import axios from "../mock/mockAxios";
import Scroll from "../components/Scroll";
import CardList from "../components/CardList";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    (async function fetchRecipes() {
      const { data } = await axios.get("/recipes");
      setRecipes(data);
    })();
  }, []);

  const filteredRecipes = () => {
    return recipes.filter(recipe => {
      return recipe.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
  };

  return (
    <div className="wrap f1 tc">
      <h1 className="f1 tc">Recipes</h1>

      <input className="" onChange={e => setSearchTerm(e.target.value)} value={searchTerm} />

      <div className="">
        <Scroll>
        <CardList recipes={filteredRecipes()} />
        </Scroll>
      </div>
    </div>
  );
}

export default App;
