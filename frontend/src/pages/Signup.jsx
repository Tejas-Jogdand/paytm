import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Heading } from "../components/Heading";
import { Input } from "../components/Input";
import { SubHeading } from "../components/SubHeading";
import { Button } from "../components/Button";
import { BottomWarning } from "../components/BottomWarning";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Validation schema
const signupSchema = yup.object({
  firstName: yup.string().required('First name is required'),
  lastName:  yup.string().required('Last name is required'),
  username:  yup.string().email('Invalid email').required('Email is required'),
  password:  yup.string()
                .min(6, 'Password must be at least 6 characters')
                .required('Password is required'),
}).required();

export function Signup() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(signupSchema),
    mode: "all",           
    shouldFocusError: true, 
  });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/user/signup`,
        data
      );
      localStorage.setItem('token', response.data.token);
      navigate('/dashboard');
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <div className="flex justify-center h-screen bg-gray-200">
      <div className="flex flex-col justify-center">
        <div className="border-2 rounded-xl shadow-sm w-sm bg-white p-8">
          <Heading heading="Sign Up" />
          <SubHeading subHeading="Enter your information to create an account" />
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Input
                type="text"
                label="First Name"
                placeholder="John"
                {...register('firstName')}
              />
              {errors.firstName && (
                <p className="text-red-600">{errors.firstName.message}</p>
              )}
            </div>
            <div>
              <Input
                type="text"
                label="Last Name"
                placeholder="Doe"
                {...register('lastName')}
              />
              {errors.lastName && (
                <p className="text-red-600">{errors.lastName.message}</p>
              )}
            </div>
            <div>
              <Input
                type="email"
                label="Email"
                placeholder="johndoe@example.com"
                {...register('username')}
              />
              {errors.username && (
                <p className="text-red-600">{errors.username.message}</p>
              )}
            </div>
            <div>
              <Input
                type="password"
                label="Password"
                {...register('password')}
              />
              {errors.password && (
                <p className="text-red-600">{errors.password.message}</p>
              )}
            </div>
            <Button buttonText="Sign Up" type="submit" />
          </form>
          <BottomWarning
            label="Already have an account?"
            buttonText="Login"
            to="/signin"
          />
        </div>
      </div>
    </div>
  );
}
