import { Heading } from "../components/Heading";
import { Input } from "../components/Input";
import { SubHeading } from "../components/SubHeading";
import { Button } from "../components/Button";
import { BottomWarning } from "../components/BottomWarning";

import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // Redirect to dashboard if already logged in
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard");
    }
  }, []);

  const handleSignin = async () => {
    if (!username || !password) {
      alert("Both email and password are required.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/user/signin`,
        {
          username: username.trim(),
          password: password,
        }
      );

      localStorage.setItem("token", response.data.token);
      navigate("/dashboard");
    } catch (err) {
      console.error("Signin error:", err);
      alert("Signin failed: " + (err.response?.data?.message || "Please try again."));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center h-screen bg-gray-200">
      <div className="flex flex-col justify-center">
        <div className="border-2 rounded-xl shadow-sm shadow-sky-300 w-sm bg-white border-gray-300 justify-items-center p-8">
          <Heading heading={"Sign In"} />
          <SubHeading subHeading={"Enter your credentials to access your account"} />
          
          <Input
            type="email"
            label="Email"
            placeholder="johndoe@example.com"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="password"
            label="Password"
            placeholder="••••••••"
            onChange={(e) => setPassword(e.target.value)}
          />
          
          <Button
            buttonText={loading ? "Signing In..." : "Sign In"}
            onClick={handleSignin}
            disabled={loading}
          />

          <BottomWarning
            label={"Don't have an account?"}
            buttonText={"Sign Up"}
            to={"/signup"}
          />
        </div>
      </div>
    </div>
  );
}
