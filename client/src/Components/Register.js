//Register.js in client
import { useState } from "react"
export default function Register(){
    const [formData,setForm]=useState({
        name:"",
        email:"",
        password:""
    })
    const handleChange=(e)=>{
        const {name,value}=e.target
        setForm({...formData,[name]:value})
    }
    return(
        <form className="flex w-30 justify-center bg-blue">
            <h1 className="text-bold">Register Here</h1>
            <div className="form-group dark:bg-blue bg-blue">
                <label htmlFor="username" className="text-sm px-3">Name</label>
                <input className="border-1"
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"/>
                <label htmlFor="email" className="text-sm px-3">Email</label>
                <input className="border-1"
                id="email"
                name="email"
                type="text"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your name"/>
                <label htmlFor="password" className="text-sm px-3">Password</label>
                <input className="border-1"
                id="password"
                name="password"
                type="text"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"/>
                <button type="Submit" 
                 className="bg-blue-500 p-0 m-3 w-30 text-white ">Submit</button>
            </div>
        </form>
    )
}