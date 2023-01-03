import { Entity } from "./Entity";
import { Pixel } from "./Pixel";
import { Color } from "./Color";

export class Water extends Entity {

    display(): Pixel[]{
        let myoutput = Color.Blue;
        myoutput.addColorToCycle(Color.LightBlue);
        myoutput.addColorToCycle(Color.Black);
        return [new Pixel("~" ,myoutput)];
    }
}