import { Vector } from "../Types/Vector";
import { Color } from "../Types/Color";
import { Pixel } from "../Types/Pixel";
import { World } from "../World";

type Gradient = Color[];

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

    static combineSymbolsGradient( symbols: string[] , colors: Gradient ): Pixel[] {
        //console.log(symbols.length, colors.length);
        return symbols.map((val, index) => {return new Pixel(val, colors[index]);});
    }
}
export class Empty extends Entity {
    display(): Pixel[] {
        return [new Pixel(".",Color.Grey)];
    }
}
export abstract class ActiveEntity extends Entity {
    abstract action(gameWorld: World): void;
}