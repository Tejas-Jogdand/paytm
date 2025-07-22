import axios from 'axios';
import { useEffect, useState } from 'react';

export function Balance() {
  const [balance, setBalance] = useState();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/account/balance`, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      })
      .then(response => {
        setBalance(response.data.balance);
        // console.log(response.data.balance)
      });
  }, []);

  return (
    <div>
      <h4 className='font-medium'>Your Balance ${balance}</h4>
    </div>
  );
}
