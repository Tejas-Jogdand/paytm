import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Heading } from "../components/Heading";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Navigate, useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";

// Validation schema
const sendMoneySchema = yup.object({
  amount: yup
    .number()
    .typeError('Amount must be a number')
    .positive('Amount must be greater than zero')
    .required('Amount is required'),
}).required();

export function SendMoney() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const recipientId = searchParams.get('id');
  const recipientName = searchParams.get('name');

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(sendMoneySchema) });

  if (!token) return <Navigate to="/signin" replace />;
  if (!recipientId || !recipientName) return <Navigate to="/dashboard" replace />;

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/account/transfer`,
        { to: recipientId, amount: parseInt(data.amount, 10) },
        { headers: { Authorization: 'Bearer ' + token } }
      );
      alert(response.data.message);
      navigate('/dashboard');
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || 'Transfer failed');
    }
  };

  return (
    <div className="flex h-screen w-screen bg-gray-50 justify-center">
      <div className="flex flex-col justify-center">
        <div className="border-2 rounded-xl shadow-sm w-sm bg-white p-8">
          <Heading heading="Send Money" />
          <div className="flex items-center space-x-2 text-xl mt-3 mb-6">
            <div className="rounded-full bg-green-500 w-8 h-8 flex items-center justify-center text-white">
              {recipientName.charAt(0)}
            </div>
            <span className="font-medium">{recipientName}</span>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Input
                type="number"
                label="Amount [in $]"
                placeholder="Enter amount"
                {...register('amount')}
              />
              {errors.amount && <p className="text-red-600">{errors.amount.message}</p>}
            </div>
            <Button buttonText="Initiate Transfer" isTransfer type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
}