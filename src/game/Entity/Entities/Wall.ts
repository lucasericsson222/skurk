import { Entity } from "../Entity"
import { Pixel } from "../../Types/Pixel"
import { Color } from "../../Types/Color"
export class Wall extends Entity {
    tags = ["collidable"];
    display(): Pixel[] { 
        // we can do some more complicated code here later
        // to create smooth walls if it detects other walls next to them
        return Entity.combineSymbolsGradient(["#", "#", "#", "#", "#"], Color.colorSpread(Color.Black, Color.Blue));
    }
}