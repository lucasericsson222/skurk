import { Entity, ActiveEntity, Empty } from "./Entity";
import { Vector } from "./Vector";
import { Pixel } from "./Pixel";
const N = 7;
const M = 18;
const W = 5;

export class World {
    private data: Entity[][][];
    private activeData: ActiveEntity[] = [];
    static get N() {
        return N;
    }
    static get M() {
        return M;
    }
    constructor() {
        this.data = [];
        
        // initialize all data in world to empty entity that prints a space
        for(let i = 0; i < M; i++) {
            let inner_array: Entity [][] = [];
            for(let j = 0; j < N; j++) {
                inner_array.push([]);
            }
            this.data.push(inner_array);
        }
    }
    toStringArray():Pixel[][] { // this should be an array of length 5 (for each layer) which an array of string color pairs in each
        function displayTile(tile: Entity[]): Pixel[] {
            
            if (tile.length > 0) {
                let output = tile[0].display();
                for(let pixelId in output) {
                    for(let i = 1; i< tile.length; i++ ) {
                        let pixelToAdd = Pixel.Empty;
                        if (tile[i].display().length > Number(pixelId)) {
                            pixelToAdd = tile[i].display()[pixelId];
                        }
                        output[pixelId].addFrame(pixelToAdd.symbol, pixelToAdd.color);
                    }
                }
                return output;
            }
            return new Empty().display();
        }
        let output: Pixel[][] = new Array(W);
        for(let k = 0; k < W; k++) {
            output[k] = [];
        }
        for(let i = 0; i < N; i++) { // row number
            for(let j = 0; j < M; j++) { // column number
                let tile = this.data[j][i];
                let pixelArray = displayTile(tile);
                for(let k = 0; k < W; k++) {
                    if (k < pixelArray.length) {
                        output[k].push(pixelArray[k]);
                    } else {
                        output[k].push(Pixel.Empty)
                    }
                }
            }
            for(let k = 0; k < W; k++) {
                output[k].push(Pixel.NewLine);
            }
        }
        
        return output;
    }
    addEntity(obj: Entity, x:number, y:number): void {
        if(obj instanceof ActiveEntity) {
            this.activeData.push(obj);
        }
        this.data[x][y].push(obj);
        obj.setPosition(x,y);
    }
    removeEntity(obj: Entity|ActiveEntity): void {
        let oPos = obj.getPosition();
        if(obj instanceof ActiveEntity) {
            this.activeData = this.activeData.filter((thing) => {return thing !== obj;});
        }
        this.data[oPos.x][oPos.y] = this.data[oPos.x][oPos.y].filter((thing)=> {return thing !== obj;});
    }
    moveEntity(obj: Entity, x:number, y:number): void{
        // note no error checking for whether the entity could be added at the location
        this.removeEntity(obj);
        this.addEntity(obj, x, y);
    }
    moveEntityR(obj: Entity, x_rel:number, y_rel: number): void {
        let newPos: Vector = obj.getPosition().add(new Vector(x_rel, y_rel));
        this.moveEntity(obj, newPos.x, newPos.y);
    }
}