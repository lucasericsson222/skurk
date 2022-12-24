import { Vector } from "./Vector";

export abstract class Entity {
    private position: Vector= new Vector(0,0);
    setPosition(x: number, y: number) {
        this.position.x = x;
        this.position.y = y;
    }
    getPosition(): Vector {
        return this.position;
    }
    abstract display(): string[];
}
export class Empty extends Entity {
    display(): string[] {
        return ["."];
    }
}
export abstract class ActiveEntity extends Entity {
    abstract action(): void;
}