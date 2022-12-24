import "./WorldGrid.css";
interface WorldGridProps {
    data: string [];
}

function WorldGrid({data}: WorldGridProps) {
    return (
        <div className="world-grid">
            {data.map(
                (x:string, index:number) => 
                    <p key={index} id={"level" + index.toString()}>
                        {x.split("<br/>").map((x:string, index:number) => 
                            <>
                                {x}<br/>
                            </>
                        )}
                    </p>
            )}
        </div>
    );
}


export default WorldGrid;