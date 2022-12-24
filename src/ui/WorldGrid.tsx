
interface WorldGridProps {
    data: string [];
}

function WorldGrid({data}: WorldGridProps) {
    return (
        <>
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
        </>
    );
}


export default WorldGrid;