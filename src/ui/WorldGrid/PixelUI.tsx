import styled, { keyframes } from "styled-components";
import { Color } from "../../game/Types/Color";

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
`;

interface PixelUIProps {
    symbol: string;
    color: Color;
    tick: number;
}

function PixelUI ({symbol, color}: PixelUIProps) {
    
    return (
        <PixelStyle color1={color} color2={color.next.next}>
            {symbol}
        </PixelStyle>
    );
}

export default PixelUI;