export function Input({lable, placeholder,type}){
    return(
        <div className="w-full pb-2">
            <label className={"font-medium"} htmlFor={lable}>{lable}</label>
            <br />
            <input className={"border border-gray-200 shadow-sm w-full p-1 m-0.5 placeholder-gray-400"} type={type} name={lable} placeholder={placeholder}/>
        </div>
    )
}