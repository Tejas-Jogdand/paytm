import { AppBar } from "../components/AppBar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"
import { useState,useEffect } from "react"
import axios from "axios"
export function Dashboard(){

    const [firstName,setfirstName] = useState([]);

    useEffect(()=>{
        async function fetchUsers(){
            try {
                const token = localStorage.getItem("token");
                if (!token) {
                    console.log("No token found");
                    return;
                }

                let response = await axios.get(import.meta.env.VITE_BACKEND_URL + "/api/v1/user/me",{
                    headers: {
                      Authorization: `Bearer ${token}`,
                    }
                });
                setfirstName(response.data.firstName);
                
              }
              catch (error) {
                console.log(error)
              }
        }
        fetchUsers();
    },[])

    return(
        <div className="bg-white">
            <AppBar title="Payment App" user={firstName}/>
            <div className="p-2 pt-4">
            <Balance/>
            <Users/>
            </div>
        </div>
    )
}