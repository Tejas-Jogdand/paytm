import { Heading } from '../components/Heading';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { Navigate, useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { validateAmount } from '../utils/validations';
import { AlertPopup } from '../components/AlertPopup';

export function SendMoney() {
  const [searchParams] = useSearchParams();
  const [amount, setAmount] = useState();
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();
  // console.log(searchParams)
  // console.log(searchParams.get('id'))

  const token = localStorage.getItem('token');
  if (!token) {
    return <Navigate to='/signin' replace />;
  }

  if (!searchParams.has('id') || !searchParams.has('name')) {
    return <Navigate to='/dashboard' replace />;
  }

  function singup() {
    const val = validateAmount(amount);
    if (val) {
      return val;
    }
  }

  async function handleSignUp() {
    const val = singup();
    if (!val) {
      setError('');
      try {
        await axios
          .post(
            `${import.meta.env.VITE_BACKEND_URL}/api/v1/account/transfer`,
            {
              to: searchParams.get('id'),
              amount: parseInt(amount, 10),
            },
            {
              headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token'),
              },
            }
          )
          .then(res => {
            setSuccess(res.data.message);
            setTimeout(() => {
              navigate('/dashboard');
            }, 2500);
          });
      } catch (e) {
        return setError(e.response.data.message);
      }
    }
    setError(val);
  }

  return (
    <div className='flex h-screen w-screen bg-gray-50 justify-center'>
      <div className='flex flex-col justify-center'>
        <div className='border-2 rounded-xl shadow-sm shadow-sky-300 w-sm bg-white border-gray-300 justify-items-center p-8'>
          <Heading heading='Send Money' />
          {error && <AlertPopup message={error} onClose={() => setError('')} />}
          {success && (
            <AlertPopup
              message={success}
              type='success'
              onClose={() => setSuccess('')}
            />
          )}
          <div className='flex w-full justify-start items-center text-xl h-22 pt-12 pb-2'>
            <div className='rounded-full w-9 p-1 min-h-fit text-center bg-green-500'>
              <p className='text-white'>{searchParams.get('name').charAt(0)}</p>
            </div>
            <div className='pl-2 font-medium'>{searchParams.get('name')}</div>
          </div>
          <Input
            lable='Amount [in $]'
            placeholder='Enter amount'
            type='number'
            onChange={e => {
              setAmount(e.target.value);
            }}
          />
          <Button
            buttonText='Initiate Transfer'
            isTransfer={true}
            onClick={handleSignUp}
          />
        </div>
      </div>
    </div>
  );
}
