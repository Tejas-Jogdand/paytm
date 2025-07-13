import {Link} from 'react-router-dom'

export function BottomWarning({label, buttonText, to}){
    return(
        <div className='flex justify-center'>
            <p>{label}</p>
            <Link className='px-1 underline' to={to}>{buttonText}</Link>
        </div>
    )
}