import { AppBar } from "../components/AppBar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"

export function Dashboard(){
    return(
        <div className="bg-white">
            <AppBar title="Payment App" user="Tejas"/>
            <div className="p-2 pt-4">
            <Balance/>
            <Users/>
            </div>
        </div>
    )
}