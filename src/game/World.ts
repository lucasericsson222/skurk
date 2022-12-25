import { Entity, ActiveEntity, Empty } from "./Entity";
import { Vector } from "./Vector";

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
    /*
    toStringArray(): string []
    body: loops through all the characters resulting from Entity.display
        and adds them to list containing a string for each level
        line breaks are represented with <br/>
    return: an array containing a string for each level to display
    */
    toStringArray():string [] { 
        function displayTile(tile: Entity[]): string[] {
            if (tile.length > 0) {
                return tile[0].display();
            }
            return new Empty().display();
        }
        let output: string[] = new Array(W);
        for(let k = 0; k < W; k++) {
            output[k] = "";
        }
       
        // call each entity's display function
        for(let i = 0; i < N; i++) { // row number
            for(let j = 0; j < M; j++) { // column number
                for(let k = 0; k < W; k++) { // level number
                    let currentTile = this.data[j][i];
                    let listValues = displayTile(currentTile);
                    
                    if(listValues.length > k ) {
                        output[k] += listValues[k];
                    } else {
                        output[k] += new Empty().display()[0];
                    }
                }
            }
            // newline after each row
            for(let k = 0; k < W; k++) {
                output[k] += "<br/>";
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