import React, { useState } from "react";
import { SignupForm } from "./SignupForm.tsx";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
export interface ISignupInputDetailsTypes {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phoneNumber: string;
  address: string;
}
const Signup: React.FC = () => {
  const navigate = useNavigate();
  const [signupInputDetails, setSignupInputDetails] =
    useState<ISignupInputDetailsTypes>({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      phoneNumber: "",
      address: "",
    });
  const handleSignupInputFields = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { name, value } = event.target;
    setSignupInputDetails({
      ...signupInputDetails,
      [name]: value,
    });
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      !signupInputDetails.email ||
      !signupInputDetails.password ||
      !signupInputDetails.address ||
      !signupInputDetails.phoneNumber ||
      !signupInputDetails.firstName ||
      !signupInputDetails.lastName
    ) {
      toast.error("Please fill all the fields");
      return;
    }
    const isPasswordsAreCorrect =
      signupInputDetails.password === signupInputDetails.confirmPassword;
    if (!isPasswordsAreCorrect) {
      toast.error("Passwords are not matching");
      return;
    }
    const request = {
      firstName: signupInputDetails.firstName,
      lastName: signupInputDetails.lastName,
      email: signupInputDetails.email,
      password: signupInputDetails.password,
      phoneNumber: signupInputDetails.phoneNumber,
      address: signupInputDetails.address,
    };
    try {
      const response = await axios.post("/api/signup", request);
      if (response.data.status === 200) {
        navigate("/");
        toast.success("Signup successful");
        return;
      }
      toast.error(response.data.message);
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  return (
    <SignupForm
      handleSignupInputFields={handleSignupInputFields}
      handleSubmit={handleSubmit}
    />
  );
};

export default Signup;
