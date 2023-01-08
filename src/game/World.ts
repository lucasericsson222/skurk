import { Entity, ActiveEntity, Empty } from "./Entity/Entity";
import { Vector } from "./Types/Vector";
import { Pixel } from "./Types/Pixel";
import { OutsideBound } from "./Entity/Entities/OutsideBounds";
import { ClassType } from "react";

const SCREENWIDTH = {
    N: 7,
    M: 18,
    W: 5
}
const N = 7;
const M = 18;
const W = 5;


export const WORLDSIZE = {
    N: 7,
    M: 10
}

export class World {
    private data: Entity[][][];
    private activeData: ActiveEntity[] = [];
    constructor() {
        this.data = [];
        
        // initialize all data in world to empty entity that prints a space
        for(let i = 0; i < WORLDSIZE.M; i++) {
            let inner_array: Entity [][] = [];
            for(let j = 0; j < WORLDSIZE.N; j++) {
                inner_array.push([]);
            }
            this.data.push(inner_array);
        }
    }
    RunActions() {
        for(let obj of this.activeData) {
            obj.action(this);
        }
    }
    inBounds(x: number, y: number): boolean {
        return !(x < 0 || y < 0 || y >= WORLDSIZE.N || x >= WORLDSIZE.M); 
    }
    toStringArray(target: Entity):Pixel[][][] { // this should be an array of length 5 (for each layer) which an array of string color pairs in each
        function displayTile(tile: Entity[]): Pixel[][] {
            
            if (tile.length > 0) { // if there is something in the tile
                
                let output = tile[0].display().map((val) => [val]); // by default display the first thing
                while(output.length < SCREENWIDTH.W) {
                    output.push([Pixel.Empty]);
                }
                for(let pixelId = 0; pixelId < SCREENWIDTH.W; pixelId++ ) { // for each layer 
                    for(let i = 1; i < tile.length; i++ ) { // loop through all the rest of the entities on tile
                        let pixelToAdd = Pixel.Empty;
                        if (tile[i].display().length > pixelId) {
                            pixelToAdd = tile[i].display()[pixelId];
                        }
                        output[pixelId].push(pixelToAdd);
                    }
                }
                
                return output;
            }
            return [new Empty().display()];
        }
        let output: Pixel[][][] = new Array(W);
        for(let k = 0; k < W; k++) {
            output[k] = [];
        }
        let a: [number, number][] = [];
        for(let i = Math.floor(target.getPosition().y - SCREENWIDTH.N/2); i < Math.floor(target.getPosition().y + SCREENWIDTH.N/2); i++) { // row number
            for(let j = Math.floor(target.getPosition().x - SCREENWIDTH.M/2); j < Math.floor(target.getPosition().x + SCREENWIDTH.M/2); j++) { // column number
                a.push([j,i]);
                let tile = [new OutsideBound()];
                if (this.inBounds(j, i)) {
                    tile = this.data[j][i];
                }
                let pixelArray = displayTile(tile);
                for(let k = 0; k < SCREENWIDTH.W; k++) {
                    if (k < pixelArray.length) {
                        output[k].push(pixelArray[k]);
                    } else {
                        output[k].push([Pixel.Empty]);
                    }
                }
            }
        }
        
        return output;
    }
    addEntity(obj: Entity, x:number, y:number): boolean {
        if (!this.inBounds(x,y)) {
            return false;
        }
        if(obj instanceof ActiveEntity) {
            this.activeData.push(obj);
        }
        this.data[x][y].push(obj);
        obj.setPosition(x,y);
        return true;
    }
    addEntityLine(className: any, pos1: Vector, pos2: Vector) {
        for(let i = pos1.x; i <= pos2.x; i++) {
            for(let j = pos1.y; j <= pos2.y; j++ ) {
                console.log("hi");
                this.addEntity(new className(), j, i);
            }
        }
    }
    removeEntity(obj: Entity|ActiveEntity): boolean {
        let oPos = obj.getPosition();
        if(obj instanceof ActiveEntity) {
            this.activeData = this.activeData.filter((thing) => {return thing !== obj;});
        }
        this.data[oPos.x][oPos.y] = this.data[oPos.x][oPos.y].filter((thing)=> {return thing !== obj;});
        return true;
    }
    moveEntity(obj: Entity, x:number, y:number): boolean{
        // note no error checking for whether the entity could be added at the location
        if (!this.inBounds(x, y)) {
            return false;
        }
        this.removeEntity(obj);
        this.addEntity(obj, x, y);
        return true;
    }
    moveEntityR(obj: Entity, x_rel:number, y_rel: number): boolean {
        let newPos: Vector = obj.getPosition().add(new Vector(x_rel, y_rel));
        return this.moveEntity(obj, newPos.x, newPos.y);
    }
}