import { Color } from "./Color"



export class Pixel {
    symbol: string;
    color: Color;
    constructor(symbol:string, color: Color) {
        this.symbol = symbol;
        this.color = color
    }
    static get NewLine() {
        const newLine = new Pixel("<br/>", Color.White);
        return newLine;
    }
    static get Empty() {
        const empty = new Pixel("⠀", Color.White);//
        return empty;
    }
} 