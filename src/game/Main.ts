// this file should remain at the top level of game, as it is the entry point
// other includes may be moved though
import { World } from "./World";
import { Player } from "./Entity/ActiveEntity/ActiveEntities/Player";
import { Vector } from "./Types/Vector";
import { Pixel } from "./Types/Pixel";
import { Wall } from "./Entity/Entities/Wall";
import { Water } from "./Entity/Entities/Water";
export interface updateUIData {
    worldData: Pixel[][][];
}

export function Main(updateUI: (data: updateUIData) => void): (e: globalThis.KeyboardEvent) => void {
    // by the way, this function ends up being called twice because useEffect is weird
    // it just means that the first call is completely disregarded automatically (because the rest of the program forgets it existed)
    // and it ends up working for the second call; so, don't freak out if there is two prints. 
    // the return statment should only be called once though.
    // set up game
    let gameWorld = new World();
    let gamePlayer = new Player();
    gameWorld.addEntity(gamePlayer, 1, 1);
    gameWorld.addEntity(new Wall(), 2,2);
    gameWorld.addEntity(new Wall(), 2,3);
    gameWorld.addEntity(new Wall(), 2,4);
    gameWorld.addEntity(new Wall(), 2,5);
    gameWorld.addEntity(new Wall(), 2,6);
    gameWorld.addEntity(new Wall(), 3,6);
    for(let i = 4; i < 8; i++) {
        for(let j = 0; j < 4; j++ ) {
            gameWorld.addEntity(new Water(), i, j);
        }
    }
    updateUI({worldData: gameWorld.toStringArray()});
    return (e: globalThis.KeyboardEvent) => {
        let dir = inputToVector(e);
        gameWorld.moveEntityR(gamePlayer, dir.x, dir.y);
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