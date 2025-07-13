import { Heading } from "../components/Heading"
import { Input } from "../components/Input"
import { SubHeading } from "../components/SubHeading"
import { Button } from "../components/Button"
import { BottomWarning } from "../components/BottomWarning"
// import { signupAtom } from "../../store/atoms/signupAtom"

// import { useSetRecoilState } from "recoil"
import { useState } from "react"

import axios from 'axios'
import { useNavigate } from "react-router-dom"

export function Signin() {
    const [username, setUsername,] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate();

    return (
        <div className="flex justify-center h-screen bg-gray-200">
            <div className="flex flex-col justify-center">
                <div class="border-2 rounded-xl shadow-sm shadow-sky-300 w-sm bg-white border-gray-300 justify-items-center p-8">
                    <Heading
                        heading={"Sign In"}
                    />
                    <SubHeading
                        subHeading={"Enter your credential to access your account"}
                    />
                    <Input
                        type={"email"}
                        label={"Email"}
                        placeholder={"johndoe@example.com"}
                        onChange={e => { setUsername(e.target.value) }}
                    />
                    <Input
                        type={"password"}
                        label={"Password"}
                        placeholder={""}
                        onChange={e => { setPassword(e.target.value) }}
                    />
                    <Button
                        buttonText={"Sign In"}
                        onClick={
                            async () => {
                                const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/user/signin`,
                                    {
                                        username: username,
                                        password: password
                                    })
                                localStorage.setItem("token", response.data.token)
                                navigate("/dashboard")
                            }
                        }
                    />
                    <BottomWarning
                        label={"Don't have an account?"}
                        buttonText={"Sign Up"}
                        to={"/signup"}
                    />
                </div>
            </div>
        </div>
    )
}