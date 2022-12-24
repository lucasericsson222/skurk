export abstract class Entity {
    private position: number [] = [0,0];
    setPosition(x: number, y: number) {
        this.position = [x,y];
    }
    getPosition(): number[] {
        return this.position;
    }
    abstract display(): string[];
}
export class Empty extends Entity {
    display(): string[] {
        return ["X"]; //&nbsp;
    }
}
export abstract class ActiveEntity extends Entity {
    abstract action(): void;
}