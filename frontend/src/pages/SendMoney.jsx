import { Heading } from "../components/Heading";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export function SendMoney() {
  const [searchParams] = useSearchParams();
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const recipientId = searchParams.get("id");
  const recipientName = searchParams.get("name");

  // Authentication check
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/signin");
    }
  }, []);

  const handleTransfer = async () => {
    if (!amount || isNaN(amount) || parseFloat(amount) <= 0) {
      alert("Please enter a valid amount.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/account/transfer`,
        {
          to: recipientId,
          amount: parseFloat(amount),
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      alert(response.data.message);
      navigate("/dashboard");
    } catch (error) {
      console.error("Transfer error:", error);
      alert(
        error.response?.data?.message ||
          "Transfer failed. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen w-screen bg-gray-50 justify-center">
      <div className="flex flex-col justify-center">
        <div className="border-2 rounded-xl shadow-sm shadow-sky-300 w-sm bg-white border-gray-300 justify-items-center p-8">
          <Heading heading="Send Money" />

          <div className="flex w-full justify-start items-center text-xl h-22 pt-12 pb-2">
            <div className="rounded-full w-9 p-1 min-h-fit text-center bg-green-500">
              <p className="text-white">{recipientName?.charAt(0)}</p>
            </div>
            <div className="pl-2 font-medium">{recipientName}</div>
          </div>

          <Input
            label="Amount [in $]"
            placeholder="Enter amount"
            type="number"
            onChange={(e) => setAmount(e.target.value)}
          />

          <Button
            buttonText={loading ? "Transferring..." : "Initiate Transfer"}
            onClick={handleTransfer}
            disabled={loading}
            isTransfer={true}
          />
        </div>
      </div>
    </div>
  );
}
