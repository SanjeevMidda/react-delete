import { useState } from "react";
import "./index.css";

function App() {
  const [fruits, setFruits] = useState([
    "apple",
    "pears",
    "strawberries",
    "carrots",
  ]);

  // let deleteFruit = (e) => {
  //   e.target.parentElement.remove();
  // };

  let deleteFruit = (fruitPassedIn) => {
    setFruits((oldFruit) => {
      return oldFruit.filter((fruit) => fruit !== fruitPassedIn);
    });
    console.log(fruits);
  };

  return (
    <div className="App">
      {fruits.map((fruit, index) => {
        return (
          <div className="fruitContainer" key={index}>
            <h3>{fruit}</h3>
            <div className="delete" onClick={() => deleteFruit(fruit)}>
              D
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
