import { useState } from "react"

export default function Home(){
    const [name,setName]=useState("");
    const [ShowName,SetShowName]=useState("");
    const handleChange=(e)=>{setName(e.target.value);}
    const handleButton=()=>{
        SetShowName(`Welcome,${name}`);
    }
    return(
        <div>
            <input type="text"
            placeholder="Enter Name"
            value={name}
            onChange={handleChange}
            />
            <button className="bg-blue bouder bouder-1 w-10"
            onClick={handleButton}>Submit</button>
            <p>Welcome{ShowName}</p>
        </div>
    )
}