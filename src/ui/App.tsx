import React, { useEffect, useState } from 'react';
import WorldGrid from './WorldGrid';
import { Main, updateUIData } from '../game/Main';
import { Pixel } from '../game/Pixel';
import './App.css';



function App() {
  let [worldData, setWorldData] = useState<Pixel[][]>([]);
  
  useEffect(() => {
    function updateUI(data: updateUIData) {
      setWorldData(data.worldData);
    }


    let handleInput = Main(updateUI);

    function helper(e: globalThis.KeyboardEvent) {
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
