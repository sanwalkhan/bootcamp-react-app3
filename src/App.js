import React from "react";
import Dinner from "./menue.js";


function App() {
  return (
    <div>
      <Dinner dishName = " Chicken Karhai" sweetDish ="kheer" drink = "colddrink" />  
      <hr />
      <Dinner dishName = " Mutton Karhai" sweetDish ="jalebi" drink = "tea" />
      <hr /> 
      <Dinner dishName = " Nehari Karhai" sweetDish ="halwa" drink = "Shake" /> 
    </div>
  )
}

export default App;
