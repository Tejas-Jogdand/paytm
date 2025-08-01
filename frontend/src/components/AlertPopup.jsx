export function AlertPopup({ message, type = 'error', onClose }) {
  const bgColor =
    type === 'error'
      ? 'bg-red-100 border-red-400 text-red-700'
      : type === 'success'
        ? 'bg-green-100 border-green-400 text-green-700'
        : 'bg-yellow-100 border-yellow-400 text-yellow-700';

  return (
    <div
      className={`border ${bgColor} px-4 py-3 rounded relative mb-4`}
      role='alert'
    >
      <span className='flex px-2 pr-3 text-center'>{message}</span>
      {onClose && (
        <span className='absolute top-1 right-0' onClick={onClose}>
          <svg
            className='fill-current h-4.5 w-6  hover:fill-red-500'
            role='button'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
          >
            <title>Close</title>
            <path d='M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z' />
          </svg>
        </span>
      )}
    </div>
  );
}
