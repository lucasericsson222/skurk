import { Entity } from "../Entity"
import { Pixel } from "../../Types/Pixel"

export class OutsideBound extends Entity {
    display(): Pixel[] { 
        // we can do some more complicated code here later
        // to create smooth walls if it detects other walls next to them
        return [];
    }
}