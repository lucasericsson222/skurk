import { Entity } from "../Entity";
import { Pixel } from "../../Types/Pixel";
import { Color } from "../../Types/Color";

export class Water extends Entity {

    display(): Pixel[]{
        let myoutput = Color.Blue;
        myoutput.addColorToCycle(Color.LightBlue);
        myoutput.addColorToCycle(Color.Black);
        return [new Pixel("~" ,myoutput)];
    }
}