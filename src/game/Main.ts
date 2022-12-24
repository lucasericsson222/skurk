// this file should remain at the top level of game, as it is the entry point
// other includes may be moved though
import { World } from "./World";
import { Player } from "./Player";
import { Vector } from "./Vector";

export interface updateUIData {
    worldData: string [];
}

export function Main(updateUI: (data: updateUIData) => void): (e: globalThis.KeyboardEvent) => void {
    // set up game
    let gameWorld = new World();
    let gamePlayer = new Player();
    gameWorld.addEntity(gamePlayer, 1, 1);



    updateUI({worldData: gameWorld.toStringArray()});
    return (e: globalThis.KeyboardEvent) => {
        let dir = inputToVector(e);
        gameWorld.moveEntityR(gamePlayer, dir.x, dir.y);
        console.log(gameWorld.toStringArray());
        updateUI({worldData: gameWorld.toStringArray()});
    }; 
}

function inputToVector(e:globalThis.KeyboardEvent): Vector {
    let out = new Vector(0,0);
    if(e.key === "a") {
        out.x -= 1;
    }
    if(e.key === "d") {
        out.x += 1;
    }
    if(e.key === "w") {
        out.y -= 1;
    }
    if(e.key === "s") {
        out.y += 1;
    }
    return out;
}