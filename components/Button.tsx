import { useEffect } from "react"

export default function Button(){
    useEffect(()=>{
        console.log("Sau khi Render Button");
        return () =>{
            console.log("Component will UnMount");
        }
    })
    return (
        <h1>Button Component</h1>
    )
}