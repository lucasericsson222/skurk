import "./WorldGrid.css";
import { Pixel } from "../game/Pixel";
interface WorldGridProps {
    data: Pixel[][];
}
/*
p#first{
            letter-spacing: 0.1rem;
            padding-left: 0.9rem;
            line-height:2.3rem;
            padding-top: 0.7rem;
            color: rgb(72, 72, 72);
        }
        p#second{
            letter-spacing: 0.125rem;
            padding-left: 0.675rem;
            line-height: 2.35rem;
            padding-top: 0.525rem;
            color: rgb(137, 137, 137);
        }
        p#third{
            letter-spacing:0.15rem;
            padding-left: 0.45rem;
            line-height: 2.4rem;
            padding-top: 0.35rem;
            color: rgb(148, 148, 148)
        }
        p#fourth{
            letter-spacing: 0.175rem;
            padding-left:0.225rem;
            line-height: 2.45rem;
            padding-top: 0.175rem;
            color: rgb(165, 164, 164);
        }
        p#fifth{
            letter-spacing: 0.2rem;
            line-height: 2.5rem;
            color:rgb(255, 255, 255);
        }
*/
function WorldGrid({data}: WorldGridProps) {
    let numberOfIndex = 5;
    let numLines = 7;
    let numCharacters = 18;
    let xTightness = 0.025;
    let halfLineExtraWidth = (numCharacters * 0.1)/2;
    let halfLineExtraHeight = (0.2 * numLines )/2; 
    function brightness(index: number) {
        return (index + 1) / (numberOfIndex + 1) * 255;
    }
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
                    x.map((pix) => (
                        (pix.symbol === Pixel.NewLine.symbol)?
                            <br/>
                            :<span style={{color: pix.color.toRGB()}}>{pix.symbol}</span>
                    ))
                }
            </p>)
        )}
        </div>
    );
}


export default WorldGrid;