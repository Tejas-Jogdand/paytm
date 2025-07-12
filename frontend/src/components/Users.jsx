import { Input } from "./Input"
import { Button } from "./Button"

export function Users({ users }) {
    return (
        <div>
            <Input lable='Users' placeholder='Search users..' type='text' />
            {users.map(user=>{
                return(<div className="flex justify-between items-center">
                <div className="flex px-1 justify-between">
                    <div className="rounded-full w-6 max-h-fit text-center bg-gray-200">
                        <p>{user.firstName[0]}</p>
                    </div>
                    <div className="pl-2 font-medium">{user.firstName} {user.lastName}</div>
                </div>
                <div>
                    <Button buttonText={"Send Money"} />
                </div>
            </div>)
            })}
            
        </div>
    )
}