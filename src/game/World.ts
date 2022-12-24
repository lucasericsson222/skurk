import { Entity, ActiveEntity, Empty } from "./Entity";


const N = 7;
const M = 18;
const W = 5;

export class World {
    private data: Entity[][];
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
        for(let i = 0; i < N; i++) {
            let inner_array: Entity [] = [];
            for(let j = 0; j < M; j++) {
                inner_array.push(new Empty());
            }
            this.data.push(inner_array);
        }
    }
    moveConstructor(other: World): World {
        let newworld = new World();
        newworld.data = other.data;
        newworld.activeData = other.activeData;
        return newworld;
    }
    /*
    toStringArray(): string []
    body: loops through all the characters resulting from Entity.display
        and adds them to list containing a string for each level
        line breaks are represented with <br/>
    return: an array containing a string for each level to display
    */
    toStringArray():string [] { 
        // output is an array containing each levels html
        let output: string[] = new Array(W);
        for(let k = 0; k < W; k++) {
            output[k] = "";
        }
       
        // call each entity's display function
        for(let i = 0; i < N; i++) { // row number
            for(let j = 0; j < M; j++) { // column number
                for(let k = 0; k < W; k++) { // level number
                    let listValues = this.data[i][j].display();
                                  
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
    addEntity(obj: Entity, x:number, y:number): World {
        if(!(this.data[x][y] instanceof Empty)) {
            throw new Error("There is already a Entity there.");
        }
        if(obj instanceof ActiveEntity) {
            this.activeData.push(obj);
        }
        this.data[x][y] = obj;
        obj.setPosition(x,y);
        return this.moveConstructor(this);
    }

}