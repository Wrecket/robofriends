import React from "react";
import "./card.css";


const Card = ({recipe}) => {
  return (
    <div className="card-bg tc dib br3 pa3 ma2 grow bw2 shadow-5" style={{background: `url("${recipe.img}")` }}>
      <p className="test">{recipe.name}</p>
      <p className="desc">
        Recipe type: {recipe.type}
      </p>
      <p className="desc">
        Author: {recipe.author}
      </p>
      <img class="desc" src={recipe.img} alt="recipe pic"></img>
      <a href={recipe.link}><p className="desc">Recipe Link</p></a>
      <hr />
    </div>
  );
};

export default Card;
