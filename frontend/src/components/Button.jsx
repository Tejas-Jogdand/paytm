export function Button({ buttonText, isTransfer, onClick }) {
  const buttonClass = isTransfer
    ? 'w-full text-white bg-green-600 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2 text-center'
    : 'w-full text-white bg-black hover:bg-gray-800 font-medium rounded-lg text-sm px-5 py-2 text-center';
  return (
    <div className='w-full pb-2 pt-2'>
      <button onClick={onClick} type='button' className={buttonClass}>
        {buttonText}
      </button>
    </div>
  );
}
