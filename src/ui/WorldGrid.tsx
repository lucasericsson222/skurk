import "./WorldGrid.css";
import { Pixel } from "../game/Pixel";
import { Color } from "../game/Color";
import PixelUI from "./PixelUI";
import { relative } from "path";
interface WorldGridProps {
    data: Pixel[][][];
    tick: number;
}

function WorldGrid({data, tick}: WorldGridProps) {
    //let numberOfIndex = 5;
    //let numLines = 7;
    //let numCharacters = 18;
    let xTightness = 0.025;
    //let halfLineExtraWidth = (numCharacters * 0.1)/2;
    //let halfLineExtraHeight = (0.2 * numLines )/2; 
    /*function brightness(index: number) {
        return (index + 1) / (numberOfIndex + 1) * 255;
    }*/
    
    return (
        <div className="world-grid"> 
        {data.map((x: Pixel[][], index:number) => 
            (<div 
                key={index} 
                id={"level" + index.toString()}
                style={{
                    display: "grid",
                    position: "absolute",
                    gap: `${index/ 20}rem`,
                    fontSize: `3rem`,
                    top: `50%`,
                    left: `50%`,
                    transform: `translate(-50%, -50%)`
                    //letterSpacing: `${0.1 + xTightness*index}rem`,
                    //paddingLeft: `${halfLineExtraWidth * (numberOfIndex - index) / numberOfIndex}rem`,
                    //lineHeight: `${2.3 + 0.05 * index}rem`,
                    //paddingTop: `${halfLineExtraHeight * (numberOfIndex - index) / numberOfIndex}rem`,
                    //color: `rgb(${brightness(index)},${brightness(index)},${brightness(index)})`
                }}
            >
                {
                    x.map((pix, i) => {
                        let j = 1;
                        return pix.map((p, index) => {
                            console.log(i)
                            let hide = (index !== tick % pix.length);
                            return <span style={{opacity: hide?0:'100%', gridColumn: i % 18 + 1, gridRow: Math.floor( i / 18 + 1) }}>
                            {(p.symbol === Pixel.Empty.symbol)?
                                /*then*/<>&nbsp;</>
                            /*elif*/:(p.color.length === 1)?
                                <span style={{color:(()=> {return p.color.toRGB();})()}}>{p.symbol}</span>
                                :<PixelUI symbol={p.symbol} color={p.color} tick={tick}></PixelUI>}
                            </span>;
                        })})
                }
            </div>)
        )}
        </div>
    );
}


export default WorldGrid;