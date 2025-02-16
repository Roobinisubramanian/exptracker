import React from "react";

const obj = [
    {
        type: "Saving",
        color:"rgb(243, 243, 108)",
        percent:45
    },
    {
        type: "Investment",
        color:"rgb(54, 162, 235)",
        percent:20
    },
    {
        type: "Expenses",
        color: "rgb(255, 205, 86)",
        percent:10
    }
]

export default function Labels(){
    return(
    <>
       {obj.map((v,l) => <LabelComponent key={l} data={v}></LabelComponent>)}
    </>   
    )
}

function LabelComponent({data}){
    if(!data) return <></>;
    return(
        <div className="labels flex justify-between">
            <div className="flex gap-2">
                <div className="w-2 h-2 rounded py-3" style={{background:data.color ?? 'rgb(243, 243, 108)'}}></div>
                <h3 className="text-md">{data.type ?? ""}</h3>
            </div>
            <h3 className="font-bold">{data.percent ?? 0}</h3>
        </div>
    )
}