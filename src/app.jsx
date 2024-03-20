import { useState } from "react";
import "./global.css";
import AnimalShow from "./AnimalShow";
import bird from "./svg/bird.svg";
import cat from "./svg/cat.svg";
import cow from "./svg/cow.svg";  
import dog from "./svg/dog.svg";
import gator from "./svg/gator.svg";
import horse from "./svg/horse.svg";
const App = () => { 
   const animalName=[bird, cat, cow, dog, gator, horse]; 
   const [animal, setAnimal] = useState([]);
   const handleClick = () => {
     setAnimal([...animal, 
      animalName[Math.floor(Math.random() * animalName.length)], 
    ]);
   }; 
   return (
    <>
        <div className="d-flex">   
            <button onClick={handleClick}>Add Animal</button>
        </div>
        <div className="d-flex">
          {animal.map((item)=>(
            <AnimalShow animal={item} />
          ))}
        </div> 
    </>
  );
};  


export default App;