/*import React, { useState } from "react"
import { Mycontext } from "../Mycontext";
import { useContext } from "react";
import '../index.css'
import { FormContext } from "./Register";

export default function Login(){
  const [localDB]= useContext(FormContext);
  const [login,setLogin]= useState("");
  const [form,setForm]= useState({
    username:"",
    password:""
  })
  function handleChange(e){
    const {name,value}= e.target
    setForm({...form,[name]:value})
  }
    function HasLogin(){
      const user = localDB.find(user =>
      user.Username ==form.username && user.Password ==form.password);
      if(user){
        setLogin('Login Successful');
      }else{
        setLogin('Login Failed');
      }
    }
    return(
        
        <form className="flex-inline
        max-w-md mx-auto bg-white shadow-md rounded
        px-8 pt-6 pb-8 mb-4 m-10">
                <div className="mb-4">
                  <h1>{login}</h1>
                  <label className="block text-gray-700 text-sm font-bold
        mb-2" htmlFor="username">
                    Username
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-
        full py-2 px-3 text-gray-700 leading-tight focus:outline-none
        focus:border-blue-500"
                    name="username"
                    type="text"
                    placeholder="Enter your username"
                    onChange={handleChange}
        /> </div>
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold
        mb-2" htmlFor="password">
                    Password
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-
        full py-2 px-3 text-gray-700 leading-tight focus:outline-none
        focus:border-blue-500"
                     name="password"
                    type="password"
                    placeholder="Enter your password"
                    onChange={handleChange}
        /> </div>
                <div className="flex items-center justify-between">
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white
        font-bold py-2 px-4 rounded focus:outline-none focus:shadow-
        outline"
                    type="button"
                    onClick={HasLogin}
                  >
        Sign In
                  </button>
                </div>
                
        </form>
    );
}*/
import ReactDOM from 'react-dom';
import React, { useState } from "react"; 
import axios from "axios"; // Import Axios 
export default function Login() {
  const [formData, setForm] = useState({ 
          email: "", 
          password: "" 
      }); 
  const handleChange = (e) => { 
  const { id, value } = e.target; 
  setForm((prevFormData) => ({ 
            ...prevFormData, 
[id]: value 
        })); 
    }; 
const handleSubmit = async (e) => { 
e.preventDefault(); // Prevent default form submission 
try { 
const response = await axios.post("http://localhost:3001/users/login", formData); 
console.log("Login successful!", response.data); 
alert(response.data); 
        } 
catch (error) { 
console.error("Error logging in:", error); 
        } 
    }; 
return ( 
<form className="max-w-sm mx-auto py-5" 
onSubmit={handleSubmit}> 
<div className="mb-5"> 
<label htmlFor="email" className="block mb-2 text
sm font-medium text-gray-900 dark:text-white">Your email</label> 
<input  
type="email"  
id="email"  
className="bg-gray-50 border border-gray-300 
text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border
blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
dark:focus:border-blue-500"  
placeholder="name@flowbite.com"  
required  
value={formData.email}  
onChange={handleChange}  
/> 
</div> 
<div className="mb-5"> 
<label htmlFor="password" className="block mb-2 
text-sm font-medium text-gray-900 dark:text-white">Your password</
 label> 
<input  
type="password"  
id="password"  
className="bg-gray-50 border border-gray-300 
text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border
blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
dark:focus:border-blue-500"  
value={formData.password}  
onChange={handleChange}  
required  
/> 
</div> 
<button  
type="submit"  
className="text-white bg-blue-700 hover:bg
blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font
medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center 
dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" 
> 
                Login 
</button> 
</form> 
    ); 
  } 