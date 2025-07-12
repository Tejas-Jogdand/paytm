import { Heading } from "../components/Heading"
import { Input } from "../components/Input"
import { SubHeading } from "../components/SubHeading"
import { Button } from "../components/Button"
import { BottomWarning } from "../components/BottomWarning"

export function Signup() {
    return (
        <div className="flex justify-center h-screen bg-gray-200">
        <div className="flex flex-col justify-center">
            <div class="border-2 rounded-xl shadow-sm shadow-sky-300 w-sm bg-white border-gray-300 justify-items-center p-8">
                <Heading heading={"Sign Up"} />
                <SubHeading subHeading={"Enter your information to create an account"} />
                <Input type={"text"} lable={"First Name"} placeholder={"John"} />
                <Input type={"text"} lable={"Last Name"} placeholder={"Doe"} />
                <Input type={"email"} lable={"Email"} placeholder={"johndoe@example.com"} />
                <Input type={"password"} lable={"Password"} placeholder={""} />
                <Button buttonText={"Sign Up"} />
                <BottomWarning label={"Already have an account?"} buttonText={"Login"} to={"/signin"}/>
            </div>
        </div>
        </div>
    )
}