//test/api.js

async function fetchData(){
    // try{
    //     const response=await fetch("http://localhost:3001/user/users")
    //     if(!response){
    //         throw new Error("Failed to fetch")
    //     }
    //     const data=response.json();
    //     return data;
    // }catch(err){
    //     throw err
    // }
    return{getAllUsers:[{ "id": "6683b6ec2b8f9c2a534ccfc3",
        "name": "Raju",
        "email": "raju369@gmail.com",
        "password": "Raju@36"
      }]}
    }
module.exports=fetchData;