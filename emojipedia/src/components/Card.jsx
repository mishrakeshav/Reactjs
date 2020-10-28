import React from "react";
import Title from "./Title";
import Description from "./Description";

function Card(props) {
  return (
    <div className="term">
      <Title name={props.name} emoji={props.emoji} />
      <Description meaning={props.meaning} />
    </div>
  );
}

export default Card;
