import React from "react";
import { BoxItem } from "./style";

interface Item {
  name: string;
  age: number;
  hobby: string;
}

const CardComponent = ({ name, age, hobby }: Item) => {
  return (
    <BoxItem>
      <h1>{name}</h1>
      <h3>Idade {age} anos</h3>

      <div className="boxHobby">
        <h4>Hobby</h4>

        <p>{hobby}</p>
      </div>
    </BoxItem>
  );
};
export default CardComponent;
