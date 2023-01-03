import "./WorldGrid.css";
import { Pixel } from "../game/Pixel";
import { Color } from "../game/Color";
import PixelUI from "./PixelUI";
interface WorldGridProps {
    data: Pixel[][];
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
        {data.map((x: Pixel[], index:number) => 
            (<p 
                key={index} 
                id={"level" + index.toString()}
                style={{
                    letterSpacing: `${0.1 + xTightness*index}rem`,
                    //paddingLeft: `${halfLineExtraWidth * (numberOfIndex - index) / numberOfIndex}rem`,
                    lineHeight: `${2.3 + 0.05 * index}rem`,
                    //paddingTop: `${halfLineExtraHeight * (numberOfIndex - index) / numberOfIndex}rem`,
                    //color: `rgb(${brightness(index)},${brightness(index)},${brightness(index)})`
                }}
            >
                {
                    x.map((pix)=> {pix.pickFrame(tick);return pix;}).map((pix) => (
                        /*if*/(pix.symbol === Pixel.NewLine.symbol)?
                            /*then*/<br/>
                        /*elif*/:(pix.symbol === Pixel.Empty.symbol)?
                            /*then*/<>&nbsp;</>
                        /*elif*/:(pix.color.length === 1)?
                            <span style={{color:(()=> {return pix.color.toRGB();})()}}>{pix.symbol}</span>
                            :<PixelUI symbol={pix.symbol} color={pix.color} tick={tick}></PixelUI>
                    ))
                }
            </p>)
        )}
        </div>
    );
}


export default WorldGrid;