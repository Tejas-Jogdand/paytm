import axios from 'axios';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { AppBar } from '../components/AppBar';
import { Balance } from '../components/Balance';
import { Users } from '../components/Users';
export function Dashboard() {
  const [firstName, setfirstName] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    async function fetchUsers() {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          console.log('No token found');
          return;
        }

        const response = await axios.get(
          import.meta.env.VITE_BACKEND_URL + '/api/v1/user/me',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setfirstName(response.data.firstName);
      } catch (error) {
        console.log(error);
      }
    }
    fetchUsers();
  }, []);

  if (!token) {
    return <Navigate to='/signin' replace />;
  }

  return (
    <div className='bg-white'>
      <AppBar title='Payment App' user={firstName} />
      <div className='p-2 pt-4'>
        <Balance />
        <Users />
      </div>
    </div>
  );
}
