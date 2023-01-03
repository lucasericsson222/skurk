import { useEffect, useState } from 'react';
import WorldGrid from './WorldGrid';
import { Main, updateUIData } from '../game/Main';
import { Pixel } from '../game/Pixel';
import './App.css';



function App() {
  let [worldData, setWorldData] = useState<Pixel[][][]>([]);
  let [tick, setTick] = useState<number>(0);

  

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

  useEffect(() => {
    function incrementTick() {
      setTick(tick + 1);
    }
    const timer = setInterval(incrementTick, 500);
    return () => {
      clearInterval(timer);
    };
  }, [tick]);
  return (
    <WorldGrid data={worldData} tick={tick}></WorldGrid>
  );
}

export default App;
