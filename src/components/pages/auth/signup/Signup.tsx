import React, { useEffect, useState } from "react";
import { SignupForm } from "./SignupForm.tsx";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import signupApi from "../../../../utility/apiCalls/SignupApi.ts";
import type { dispatchType, RootState } from "../../../../../store.ts";
import { useNavigate } from "react-router-dom";
import type {
  ISignupInputDetailsTypes,
  ISignupRequestTypes,
} from "../../../../utility/types/signup";

const Signup: React.FC = () => {
  const navigate = useNavigate();
  const { isAuthenticated, role } = useSelector(
    (state: RootState) => state.authentication,
  );
  useEffect(() => {
    if (isAuthenticated) {
      if (role === "admin") {
        navigate("/admin");
      }
      navigate("/");
    }
  }, [isAuthenticated]);
  const dispatch = useDispatch<dispatchType>();
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
    const request: ISignupRequestTypes = {
      firstName: signupInputDetails.firstName,
      lastName: signupInputDetails.lastName,
      email: signupInputDetails.email,
      password: signupInputDetails.password,
      phoneNumber: signupInputDetails.phoneNumber,
      address: signupInputDetails.address,
    };
    dispatch(signupApi(request));
  };
  return (
    <SignupForm
      handleSignupInputFields={handleSignupInputFields}
      handleSubmit={handleSubmit}
    />
  );
};

export default Signup;
