

export class Color {
    private r:number;
    private g:number;
    private b:number;

    constructor(r:number, g:number, b:number) {
        this.r = r;
        this.g = g;
        this.b = b;
    }
    static get White() {
        return new Color(255,255,255);
    }
    static get Red() {
        return new Color(255, 0, 0);
    }
    toRGB(): string {
        return `rgb(${this.r}, ${this.g}, ${this.b})`;
    }
}