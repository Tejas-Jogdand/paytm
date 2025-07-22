import { Heading } from '../components/Heading';
import { Input } from '../components/Input';
import { SubHeading } from '../components/SubHeading';
import { Button } from '../components/Button';
import { BottomWarning } from '../components/BottomWarning';
import { AlertPopup } from '../components/AlertPopup';

import { useState } from 'react';

import axios from 'axios';
import { validateEmail, validatePassword } from '../utils/validations';
import { useNavigate } from 'react-router-dom';

export function Signin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  function singup() {
    const val = validateEmail(username);
    if (val) {
      return val;
    }
    const val1 = validatePassword(password);
    if (val1) {
      return val1;
    }
  }

  async function handleSignUp() {
    const val = singup();
    if (!val) {
      setError('');
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/api/v1/user/signin`,
          {
            username: username,
            password: password,
          }
        );
        localStorage.setItem('token', response.data.token);
        navigate('/dashboard');
      } catch (e) {
        return setError(e.response.data.message);
      }
    }
    setError(val);
  }

  return (
    <div className='flex justify-center h-screen bg-gray-200'>
      <div className='flex flex-col justify-center'>
        <div className='border-2 rounded-xl shadow-sm shadow-sky-300 w-sm bg-white border-gray-300 justify-items-center p-8'>
          <Heading heading={'Sign In'} />
          <SubHeading
            subHeading={'Enter your credential to access your account'}
          />

          {error && <AlertPopup message={error} onClose={() => setError('')} />}

          <Input
            type={'email'}
            label={'Email'}
            placeholder={'johndoe@example.com'}
            onChange={e => {
              setUsername(e.target.value);
            }}
          />
          <Input
            type={'password'}
            label={'Password'}
            placeholder={''}
            onChange={e => {
              setPassword(e.target.value);
            }}
          />
          <Button buttonText={'Sign In'} onClick={handleSignUp} />
          <BottomWarning
            label={"Don't have an account?"}
            buttonText={'Sign Up'}
            to={'/signup'}
          />
        </div>
      </div>
    </div>
  );
}
