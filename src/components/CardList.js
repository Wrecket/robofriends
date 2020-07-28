import React from "react";
import Card from "./Card";

const CardList = ({ recipes }) => {
  console.log(recipes);
  return (
    <div>
      {recipes.map(recipe => {
        return <Card recipe={recipe} key={recipe.id} />;
      })}
    </div>
  );
};

export default CardList;
