import { Pixel } from "../../game/Types/Pixel";
import PixelUI from "./PixelUI";
import styled from "styled-components";

//#region PixelLocation

interface PixelLocationProps {
    pix: Pixel;
    tick: number;
    hide: boolean;
    index: number;
    className?: string;
}

const PixelLocation = styled(PixelLocationLogic)<PixelLocationProps>`
    opacity: ${props => props.hide?0:100}%;
    grid-column: ${props => props.index % 18 + 1} ;
    grid-row: ${props => Math.floor(props.index / 18 + 1)};
`;

function PixelLocationLogic({className, pix, tick, hide}:PixelLocationProps) {
    // this components job is to display only one of the pixel group pix at a time
    // and to map the pixel to display into either empty space or a colorful character.
    if (pix.symbol === Pixel.Empty.symbol) {
        return <span className={className}><>&nbsp;</></span>
    }
    return <span className={className}><PixelUI symbol={pix.symbol} color={pix.color} tick={tick}></PixelUI></span>;
}

//#endregion

//#region Grid

interface GridProps {
    level: number;
    gridData: Pixel[][];
    className?: string;
    tick: number;
}

const Grid = styled(GridLogic)`
    display: grid;
    position: absolute;
    gap: ${(props:GridProps) => props.level / 20}rem;
    font-size: 3rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

function GridLogic({className, gridData, tick}: GridProps) {
    // this components is to be centered and positioned absolutely
    // and it's only job is to map all the pixel groups into a pixel location in the grid
    return (
        <div className={className}>
            {gridData.map((pix, i) => pix.map((p, index) => {
                let hide = (index !== tick % pix.length);
                return <PixelLocation pix={p} tick={tick} hide={hide} index={i}></PixelLocation>;
            }))}
        </div>
    );
}

//#endregion

//#region WorldGrid

interface WorldGridProps {
    data: Pixel[][][];
    tick: number;
}

function WorldGrid({data, tick}: WorldGridProps) {
    // this component is only responsible for creating 5 grids
    return (
        <>
        {data.map((x: Pixel[][], index:number) => <Grid level={index} gridData={x} tick={tick}/>)}
        </>
    );
}

//#endregion WorldGrid

export default WorldGrid;