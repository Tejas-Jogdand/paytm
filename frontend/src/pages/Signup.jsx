import { Heading } from "../components/Heading"
import { Input } from "../components/Input"
import { SubHeading } from "../components/SubHeading"
import { Button } from "../components/Button"
import { BottomWarning } from "../components/BottomWarning"

import { useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

export function Signup() {
    const [username, setUsername,] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate();

    return (
        <div className="flex justify-center h-screen bg-gray-200">
            <div className="flex flex-col justify-center">
                <div className="border-2 rounded-xl shadow-sm shadow-sky-300 w-sm bg-white border-gray-300 justify-items-center p-8">
                    <Heading
                        heading={"Sign Up"}
                    />
                    <SubHeading
                        subHeading={"Enter your information to create an account"}
                    />
                    <Input
                        type={"text"}
                        label={"First Name"}
                        placeholder={"John"}
                        onChange={e=>{setFirstName(e.target.value)}}
                    />
                    <Input
                        type={"text"}
                        label={"Last Name"}
                        placeholder={"Doe"}
                        onChange={e=>{setLastName(e.target.value)}}
                    />
                    <Input
                        type={"email"}
                        label={"Email"}
                        placeholder={"johndoe@example.com"}
                        onChange={e=>{setUsername(e.target.value)}}
                    />
                    <Input
                        type={"password"}
                        label={"Password"}
                        placeholder={""}
                        onChange={e=>{setPassword(e.target.value)}}
                    />
                    <Button
                        buttonText={"Sign Up"}
                        onClick={ async()=>{
                            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/user/signup`,{
                                username:username,
                                firstName:firstName,
                                lastName:lastName,
                                password:password
                            })
                            // console.log(response.data)
                            localStorage.setItem("token",response.data.token)
                            navigate(`/dashboard`)
                        }}
                    />
                    <BottomWarning
                        label={"Already have an account?"}
                        buttonText={"Login"}
                        to={"/signin"}
                    />
                </div>
            </div>
        </div>
    )
}