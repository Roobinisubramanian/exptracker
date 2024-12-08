import React from "react";
import 'boxicons';


const obj = [
    {
        name: "Saving",
        color:"rgb(243, 243, 108)"
    },
    {
        name: "Investment",
        color:"rgb(54, 162, 235)"
    },
    {
        name: "Expenses",
        color: "rgb(255, 205, 86)"
    }
]

export default function List(){
    return(
        <div className="flex flex-col py-6 gap-3">
            <h1 className="py-4 font-bold text-xl">History</h1>
            {obj.map((v,l) => 
            <Transaction key={l} category={v}></Transaction>)}
        </div>
    )
}

function Transaction ({category}){
    if (!category) return null
    return (
        <div className=" item flex justify-center bg-gray-50 py-2 rounded-r" style={{borderRight:`8px solid ${category.color ?? "#e5e5e5" }`}}>
            <div className="px-3"><box-icon color={category.color ?? "#e5e5e5"} size="15px" name="trash"></box-icon></div>
            <span className="block w-full">{category.name ?? ''}</span>
        </div>
    )
}