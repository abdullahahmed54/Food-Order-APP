import React from "react";
import mealsImage from "../../../Assets/meals.jpg";

const Header = (props) => {
  return (
    <React.Fragment>
      <header>
        <h1>ReactMeals</h1>
        <button>Cart</button>
      </header>
      <div>
        <img src={mealsImage} alt="A table full of food" />
      </div>
    </React.Fragment>
  );
};

export default Header;
