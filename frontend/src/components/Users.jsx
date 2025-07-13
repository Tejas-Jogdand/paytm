import { Input } from "./Input"
import { Button } from "./Button"

import { useEffect, useState } from "react"
import axios from 'axios'

import { useNavigate } from "react-router-dom"

export function Users() {
    // const [users,setUsers] = useState([{firstName:"Tejas",lastName:"Jogdand",id:1},{firstName:"Tejas",lastName:"Jogdand",id:1},{firstName:"Tejas",lastName:"Jogdand",id:1}])
    const [filter, setFilter] = useState("")
    const [users, setUsers] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/user/bulk?filter=${filter}`)
            .then(
                response => {
                    setUsers(response.data.users)
                }
            )
    }, [filter])

    // console.log(users)

    return (
        <div>
            <Input lable='Users' placeholder='Search users..' type='text' onChange={e=>{setFilter(e.target.value)}}/>
            {users.map(user => {
                return (<div className="flex justify-between items-center" key={user._id}>
                    <div className="flex px-1 justify-between">
                        <div className="rounded-full w-6 max-h-fit text-center bg-gray-200">
                            <p>{user.firstName[0]}</p>
                        </div>
                        <div className="pl-2 font-medium">{user.firstName} {user.lastName}</div>
                    </div>
                    <div>
                        <Button buttonText={"Send Money"} onClick={()=>{
                            navigate(`/sendmoney?id=${user._id}&name=${user.firstName+" "+user.lastName}`)
                        }} />
                    </div>
                </div>)
            })}

        </div>
    )
}