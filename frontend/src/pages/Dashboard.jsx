import { AppBar } from "../components/AppBar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"

export function Dashboard(){
    return(
        <div className="bg-white">
            <AppBar title="Payment App" user="Tejas"/>
            <div className="p-2 pt-4">
            <Balance balance={98903.55}/>
            <Users users={[{firstName:"Tejas",lastName:"Jogdand",id:1},{firstName:"Tejas",lastName:"Jogdand",id:1},{firstName:"Tejas",lastName:"Jogdand",id:1}]}/>
            </div>
        </div>
    )
}