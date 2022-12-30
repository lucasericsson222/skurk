import { Entity } from "./Entity"
import { Pixel } from "./Pixel"
import { Color } from "./Color"
export class Wall extends Entity {
    display(): Pixel[] { 
        // we can do some more complicated code here later
        // to create smooth walls if it detects other walls next to them
        return Entity.combineSymbolsGradient(["#", "#", "#", "#", "#"], Color.colorSpread(Color.Black, Color.Blue));
    }
}