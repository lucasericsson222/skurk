import styled, { keyframes } from "styled-components";
import { Color } from "../game/Color";
interface PixelUIProps {
    symbol: string;
    color: Color;
    tick: number;
}
interface PixelStyleProps {
    color1: Color;
    color2: Color;
}

const colorShift = (Color1: Color, Color2: Color) => keyframes`
    from {
        color: ${Color1.toRGB()}
    }
    to {
        color: ${Color2.toRGB()}
    }
`


const PixelStyle = styled.span`
    animation: ${(props: PixelStyleProps) => colorShift(props.color1, props.color2)} 1s alternate infinite;
`



function PixelUI ({symbol, color, tick}: PixelUIProps) {

    return (
        <PixelStyle color1={color} color2={color.next}>
            {symbol}
        </PixelStyle>
    );
}

export default PixelUI;