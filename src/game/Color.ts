export class Color {
    private r:number;
    private g:number;
    private b:number;

    private first: Color = this;
    private pNext:Color = Color.Empty;
    get next(): Color {
        if (this.pNext === Color.Empty) {
            return this.first;
        }
        return this.pNext;
    }

    private static empty = new Color(-1, -1, -1);
    static get Empty(): Color {
        return Color.empty;
    }

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
    static get Black() {
        return new Color(0, 0, 0);
    }
    static get Blue() {
        return new Color(100, 100, 255);
    }
    static get LightBlue() {
        return new Color(50, 119, 230);
    }
    toRGB(): string {
        return `rgb(${this.r}, ${this.g}, ${this.b})`;
    }
    // this could go under 0 so be careful
    subtract(other:Color): Color {
        return new Color(this.r - other.r, this.g - other.g, this.b - other.b);
    }
    // this is unsafe to use because number can go above 255
    add(other:Color): Color {
        return new Color(this.r + other.r, this.g + other.g, this.b + other.b);
    }
    mulitplyBy(scalar: number) {
        return new Color(this.r * scalar, this.g * scalar, this.b * scalar);
    }
    /**
    * @param {Color} top - Color to display at the top of the spread
    * @param {Color} bottom - Color to approach, default is black. This color will not be displayed
    * @param {Number} spread - number of colors to generate.
    */
    static colorSpread(top: Color, bottom: Color, spread:number = 5): Color[] {
        let output: Color[] = [];
        for(let i = 1; i <= spread; i++) {
            let percentage = i / spread;
            output.push(Color.colorInterpolate(top, bottom, percentage));
        }
        return output;
    }
    static colorInterpolate(color1: Color, color2: Color, fraction: number): Color {
        return (color2.subtract(color1)).mulitplyBy(fraction).add(color1);
    }
    getLast(): Color {
        let current: Color = this.first;
        while (current.pNext !== Color.Empty) {
            current = current.next;
        }
        return current;
    }
    addColorToCycle(other: Color): void {
        let last = this.getLast();
        last.pNext = other;
        other.first = this.first;
        
    }
    getAtIndex(index: number): Color {
        index = index % this.length;
        if(index > 0) {
            return this.next.getAtIndex(index - 1);
        }
        return this;
    }
    get length(): number {
        let counter = 1;
        for(let current: Color = this.first; current.pNext !== Color.Empty; current = current.pNext) {
            counter += 1;
        }
        return counter;
    }
}
