import { Pixel } from "../../../../../Types/Pixel";
import { Monster } from "../Monster";
import { Color } from "../../../../../Types/Color";
import { Vector } from "../../../../../Types/Vector";
import { World } from "../../../../../World";

export class Knight extends Monster {
    display(): Pixel[] {
        return [new Pixel("K" ,Color.Red)];
    }
    action(gameWorld: World): void {
        // calculate random movement
        let dir = new Vector(Math.floor(Math.random() * 2), Math.floor(Math.random() * 2));
        dir.x *= 2;
        dir.y *= 2;
        dir = dir.add(new Vector(-1, -1));
        if(Math.floor(Math.random() * 2) == 1) {
            dir.x =0;
        } else {
            dir.y = 0;
        }
        // move
        gameWorld.moveEntityR(this, dir.x, dir.y);
    }
}