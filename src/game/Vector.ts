export class Vector {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    add(other: Vector) {
        return new Vector(this.x + other.x, this.y + other.y);
    }
    dot(other: Vector) {
        return this.x * other.x + this.y * other.y;
    }
}