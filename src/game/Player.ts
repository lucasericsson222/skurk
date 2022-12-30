import { ActiveEntity } from "./Entity";
import { Color } from "./Color";
import { Pixel } from "./Pixel";
export class Player extends ActiveEntity {
    action() {

    }
    display(): Pixel[]{
        return [new Pixel("@" ,Color.Red)];
    }
}