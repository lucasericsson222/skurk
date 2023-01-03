import { Pixel } from "../../game/Types/Pixel";
import PixelUI from "./PixelUI";
import styled from "styled-components";
interface WorldGridProps {
    data: Pixel[][][];
    tick: number;
}
interface GridProps {
    i: number;
}

const Grid = styled.div`
    display:grid;
    position: absolute;
    gap: ${(props:GridProps) => props.i / 20}rem;
    font-size: 3rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;


function WorldGrid({data, tick}: WorldGridProps) {
    return (
        <>
        {data.map((x: Pixel[][], index:number) => 
            (<Grid i={index}>
                {x.map((pix, i) => 
                    pix.map((p, index) => {
                        let hide = (index !== tick % pix.length);
                        return (
                            <span style={{opacity: hide?0:'100%', gridColumn: i % 18 + 1, gridRow: Math.floor( i / 18 + 1) }}>
                            {/*if*/(p.symbol === Pixel.Empty.symbol)?
                                /*then*/<>&nbsp;</>
                            /*elif*/:(p.color.length === 1)?
                                <span style={{color:(()=> {return p.color.toRGB();})()}}>{p.symbol}</span>                                    
                                :<PixelUI symbol={p.symbol} color={p.color} tick={tick}></PixelUI>}
                            </span>
                        );
                }))}
            </Grid>
        ))}
        </>
    );
}


export default WorldGrid;