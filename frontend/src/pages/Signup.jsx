import { Heading } from "../components/Heading"
import { Input } from "../components/Input"
import { SubHeading } from "../components/SubHeading"
import { Button } from "../components/Button"
import { BottomWarning } from "../components/BottomWarning"
import { AlertPopup } from "../components/AlertPopup"

import { useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

import { validateEmail, validateName, validatePassword } from "../utils/validations"

export function Signup() {
    const [username, setUsername,] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const navigate = useNavigate();
    function singup() {
        const val2 = validateName(firstName, "First Name");
        if (val2) {
            return val2
        }
        const val3 = validateName(lastName, "Last Name");
        if (val3) {
            return val3
        }
        const val = validateEmail(username);
        if (val) {
            return val
        }
        const val4 = validatePassword(password);
        if (val4) {
            return val4
        }
    }

    async function handleSignUp() {
        const val = singup();
        if (!val) {
            setError("")
            try {

                const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/user/signup`, {
                    username: username,
                    firstName: firstName,
                    lastName: lastName,
                    password: password
                })
                localStorage.setItem("token", response.data.token)
                navigate(`/dashboard`)

            } catch (e) {
                return setError(e.response.data.message)
            }

        }
        setError(val)

    }

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

                    {error && <AlertPopup message={error} onClose={() => setError("")} />}

                    <Input
                        type={"text"}
                        label={"First Name"}
                        placeholder={"John"}
                        onChange={e => {
                            setFirstName(e.target.value)
                            // setError("") to be removed in next PR
                        }}
                    />
                    <Input
                        type={"text"}
                        label={"Last Name"}
                        placeholder={"Doe"}
                        onChange={e => {
                            setLastName(e.target.value)
                            // setError("") to be removed in next PR
                        }}
                    />
                    <Input
                        type={"email"}
                        label={"Email"}
                        placeholder={"johndoe@example.com"}
                        onChange={e => {
                            setUsername(e.target.value)
                            // setError("") to be removed in next PR
                        }}
                    />
                    <Input
                        type={"password"}
                        label={"Password"}
                        placeholder={""}
                        onChange={e => {
                            setPassword(e.target.value)
                            // setError("") to be removed in next PR
                        }}
                    />
                    <Button
                        buttonText={"Sign Up"}
                        onClick={handleSignUp}
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