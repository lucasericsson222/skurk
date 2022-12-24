// this file should remain at the top level of game, as it is the entry point
// other includes may be moved though
import { World } from "./World";
import { Player } from "./Player";


export interface updateUIData {
    worldData: string [];
}

export function Main(updateUI: (data: updateUIData) => void): (e: globalThis.KeyboardEvent) => void {
    // set up game
    let gameWorld = new World();
    let gamePlayer = new Player();
    gameWorld.addEntity(gamePlayer, 1, 1);



    updateUI({worldData: gameWorld.toStringArray()});
    return (e: globalThis.KeyboardEvent) => {}; // replace this as this is the main game loop. Nothing will update without player input
}