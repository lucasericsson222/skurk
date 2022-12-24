import { Entity } from "./Entity"

export class Wall extends Entity {
    display(): string[] { 
        // we can do some more complicated code here later
        // to create smooth walls if it detects other walls next to them
        return ["#"]
    }
}