import { Color } from "./Color"



export class Pixel {
    index: number = 0;
    frames: Frame[] = [];

    get symbol(): string{
       return this.frames[this.index].symbol;
    }
    get color(): Color {
        return this.frames[this.index].color;
    }
    constructor(symbol:string, color: Color) {
        this.frames.push(new Frame(symbol, color));
    }
    static get NewLine() {
        const newLine = new Pixel("<br/>", Color.White);
        return newLine;
    }
    static get Empty() {
        const empty = new Pixel("&nbsp;", Color.White);
        return empty;
    }
    addFrame(symbol:string, color:Color) {
        this.frames.push(new Frame(symbol, color));
    }
    nextFrame() {
        this.index += 1 % this.frames.length;
    }
    pickFrame(index:number) {
        this.index = index % this.frames.length;
    }
}

class Frame {
    symbol: string;
    color: Color;
    constructor(symbol:string, color: Color) {
        this.symbol = symbol;
        this.color = color
    }
}