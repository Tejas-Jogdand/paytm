export function Input({label, placeholder,type,onChange,value}){
    return(
        <div className="w-full pb-2">
            <label className={"font-medium"} htmlFor={label}>{label}</label>
            <br />
            <input id={label} onChange={onChange} className={"border border-gray-200 shadow-sm w-full p-1 m-0.5 placeholder-gray-400"} type={type} name={label} placeholder={placeholder} value={value}/>
        </div>
    )
}