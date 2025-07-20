import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Heading } from "../components/Heading";
import { Input } from "../components/Input";
import { SubHeading } from "../components/SubHeading";
import { BottomWarning } from "../components/BottomWarning";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

//Validation schema
const signinSchema = yup.object({
  username: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
}).required();

export function Signin() {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(signinSchema),
    mode: "onSubmit",
    reValidateMode: "onChange"
  });

  console.log(errors); 

  const onSubmit = async (data) => {
    console.log('submit data:', data);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/user/signin`,
        data
      );
      localStorage.setItem('token', response.data.token);
      navigate('/dashboard');
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || 'Sign in failed');
    }
  };

  return (
    <div className="flex justify-center h-screen bg-gray-200">
      <div className="flex flex-col justify-center">
        <div className="border-2 rounded-xl shadow-sm w-sm bg-white p-8">
          <Heading heading="Sign In" />
          <SubHeading subHeading="Enter your credentials to access your account" />
          <form noValidate onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Email */}
            <Controller
              name="username"
              control={control}
              render={({ field }) => (
                <>
                  <Input
                    type="email"
                    label="Email"
                    placeholder="johndoe@example.com"
                    {...field}
                  />
                  {errors.username && (
                    <p className="text-red-600">{errors.username.message}</p>
                  )}
                </>
              )}
            />

            {/* Password */}
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <>
                  <Input
                    type="password"
                    label="Password"
                    {...field}
                  />
                  {errors.password && (
                    <p className="text-red-600">{errors.password.message}</p>
                  )}
                </>
              )}
            />

         
            <button type="submit" className="w-full bg-black text-white py-2 rounded">
              Sign In
            </button>

          </form>
          <BottomWarning
            label="Don't have an account?"
            buttonText="Sign Up"
            to="/signup"
          />
        </div>
      </div>
    </div>
  );
}
