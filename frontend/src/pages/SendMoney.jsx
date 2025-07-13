import { Heading } from "../components/Heading"
import { Input } from "../components/Input"
import { Button } from "../components/Button"

export function SendMoney() {
    return (
        <div className="flex h-screen w-screen bg-gray-50 justify-center">
            <div className="flex flex-col justify-center">
                <div class="border-2 rounded-xl shadow-sm shadow-sky-300 w-sm bg-white border-gray-300 justify-items-center p-8">
                    <Heading heading="Send Money" />
                    <div className="flex w-full justify-start items-center text-xl h-22 pt-12 pb-2">
                        <div className="rounded-full w-9 p-1 min-h-fit text-center bg-green-500">
                            <p className="text-white">T</p>
                        </div>
                        <div className="pl-2 font-medium">Tejas Jogdand</div>
                    </div>
                    <Input lable='Amount [in $]' placeholder='Enter amount' type='number' />
                    <Button buttonText='Initiate Transfer' isTransfer={true} />
                </div>
            </div>
        </div>
    )
}