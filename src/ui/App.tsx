import React, { useEffect, useState } from 'react';
import WorldGrid from './WorldGrid';
import { Main, updateUIData } from '../game/Main';
import './App.css';



function App() {
  let [worldData, setWorldData] = useState([""]);
  
  useEffect(() => {
    function updateUI(data: updateUIData) {
      setWorldData(data.worldData);
    }


    let handleInput = Main(updateUI);



    document.addEventListener("keydown", handleInput, false);
    return () => {
      document.removeEventListener("keydown", handleInput);
    };
  }, []);

  return (
    <WorldGrid data={worldData}></WorldGrid>
  );
}

export default App;
