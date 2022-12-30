import { Vector } from "./Vector";
import { Color } from "./Color";
import { Pixel } from "./Pixel";
export abstract class Entity {
    private position: Vector= new Vector(0,0);
    setPosition(x: number, y: number) {
        this.position.x = x;
        this.position.y = y;
    }
    getPosition(): Vector {
        return this.position;
    }
    abstract display(): Pixel[];
}
export class Empty extends Entity {
    display(): Pixel[] {
        return [new Pixel(".",Color.White)];
    }
}
export abstract class ActiveEntity extends Entity {
    abstract action(): void;
}