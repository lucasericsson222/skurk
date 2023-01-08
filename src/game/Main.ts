// this file should remain at the top level of game, as it is the entry point
// other includes may be moved though
import { World, WORLDSIZE } from "./World";
import { Player } from "./Entity/ActiveEntity/ActiveEntities/Player";
import { Vector } from "./Types/Vector";
import { Pixel } from "./Types/Pixel";
import { Wall } from "./Entity/Entities/Wall";
import { Knight } from "./Entity/ActiveEntity/ActiveEntities/Monster/Monsters/Knight";

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
    gameWorld.addEntity(gamePlayer, 1,1);
    gameWorld.addEntityLine(Wall, new Vector(0,0), new Vector(0, WORLDSIZE.M - 1));
    gameWorld.addEntityLine(Wall, new Vector(1,0), new Vector(WORLDSIZE.N - 1,0));
    gameWorld.addEntityLine(Wall, new Vector(1,WORLDSIZE.M - 1), new Vector(WORLDSIZE.N - 1, WORLDSIZE.M -1));
    gameWorld.addEntityLine(Wall, new Vector(WORLDSIZE.N - 1, 1), new Vector(WORLDSIZE.N - 1, WORLDSIZE.M - 2));
    gameWorld.addEntity(new Knight(), 5, 3);

    updateUI({worldData: gameWorld.toStringArray(gamePlayer)});
    return (e: globalThis.KeyboardEvent) => {
        let dir = inputToVector(e);
        gameWorld.moveEntityR(gamePlayer, dir.x, dir.y);
        gameWorld.RunActions();
        updateUI({worldData: gameWorld.toStringArray(gamePlayer)});

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