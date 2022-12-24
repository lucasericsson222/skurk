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
    function helper(e: globalThis.KeyboardEvent) {
      console.log(e);
      handleInput(e);
    }


    document.addEventListener("keydown", helper, false);
    return () => {
      document.removeEventListener("keydown", helper);
    };
  }, []);

  return (
    <WorldGrid data={worldData}></WorldGrid>
  );
}

export default App;