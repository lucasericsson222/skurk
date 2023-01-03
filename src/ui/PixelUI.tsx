import styled, { keyframes } from "styled-components";
import { Color } from "../game/Color";

const colorShift = (Color1: Color, Color2: Color) => keyframes`
    from {
        color: ${Color1.toRGB()}
    }
    to {
        color: ${Color2.toRGB()}
    }
`

interface PixelStyleProps {
    color1: Color;
    color2: Color;
}
const PixelStyle = styled.span`
    animation: ${(props: PixelStyleProps) => colorShift(props.color1, props.color2)} 0.5s alternate infinite;
`
/*let hide = (index !== tick % pix.length);
                        return (
                            <span style={{opacity: hide?0:'100%', gridColumn: i % 18 + 1, gridRow: Math.floor( i / 18 + 1) }}>
                            {/*if(p.symbol === Pixel.Empty.symbol)?
                                /*then<>&nbsp;</>
                            /*elif:(p.color.length === 1)?
                            <span style={{color:(()=> {return p.color.toRGB();})()}}>{p.symbol}</span>                                    
                            :<PixelUI symbol={p.symbol} color={p.color} tick={tick}></PixelUI>}
                        </span>
                    );
                    */

interface PixelWrapperProps {
    hide: boolean;
    i: number;
}
                
const PixelWrapper = styled.span`
    opacity: ${(props:PixelWrapperProps) => props.hide?0:100}%;
    grid-column: ${(props:PixelWrapperProps) => props.i % 18 + 1 };
    grid-row: ${(props:PixelWrapperProps) => Math.floor(props.i / 18 + 1)};
`;


interface PixelUIProps {
    symbol: string;
    color: Color;
    tick: number;
}

function PixelUI ({symbol, color, tick}: PixelUIProps) {
    
    return (
        <PixelStyle color1={color} color2={color.next.next}>
            {symbol}
        </PixelStyle>
    );
}

export default PixelUI;