import { ActiveEntity } from "../../Entity";
import { Color } from "../../../Types/Color";
import { Pixel } from "../../../Types/Pixel";
export class Player extends ActiveEntity {
    action() {

    }
    display(): Pixel[]{
        return [new Pixel("@" ,Color.Red)];
    }
}