export function Button({ buttonText }) {
    return (
        <div className="w-full pb-2 pt-2">
            <button type="button" className={"w-full text-white bg-black hover:bg-gray-800 font-medium rounded-lg text-sm px-5 py-2 text-center"}>{buttonText}</button>
        </div>
    )
}