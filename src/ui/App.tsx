import { useEffect, useState } from 'react';
import WorldGrid from './WorldGrid/WorldGrid';
import { Main, updateUIData } from '../game/Main'; // maybe move this import to a different place
import { Pixel } from '../game/Types/Pixel'; // same with this one (since it is reaching upwards with ..)
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        background-color: black;
        color: white;
        font-family: monospace;
        width: 100%;
        height: 100%;
        padding: 0;
    }
`

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
        <>
            <GlobalStyle/>
            <WorldGrid data={worldData} tick={tick}></WorldGrid>
        </>
    );
}

export default App;
