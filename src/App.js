import React from "react";
import Dinner from "./menue.js";


function App() {
  return (
    <div>
      <Dinner dishName = " Chicken Karhai" sweetDish ="kheer" />  
      <hr />
      <Dinner dishName = " Mutton Karhai" sweetDish ="jalebi" />
      <hr /> 
      <Dinner dishName = " Nehari Karhai" sweetDish ="halwa" /> 
    </div>
  )
}

export default App;
