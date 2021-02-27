import Link from "next/link";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import FieldAlert from "./FieldAlert";
import {useHttp} from '../hooks/http';
import {usePostHttp} from '../hooks/postHttp';

export default function ForgotPassword(props) {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [disableSubmit, setDisableSubmit] = useState(true);
  const [toSubmit, setToSubmit] = useState(false);

  const [verifyingEmail, validEmail] = useHttp(email ? `/register/verify/email?value=${email}` : '', [email]);
  const [isLoading, data] = usePostHttp(toSubmit ? {email: email} : null, '/account/forgot-password');


  useEffect(()=> {
    if(validEmail && validEmail.success)
      setDisableSubmit(false);
    else
      setDisableSubmit(true);
  },[validEmail])

  //priority

  return (
    <>
      <div className="w-1/2">
        <h1 className="w-full text-5xl font-bold text-blue-900 text-left">
          Forgot Password
        </h1>
        <br />
       {validEmail && !validEmail.success && <>
        <FieldAlert message="Email doesn't exist!" />
        <br />
        </>} 
        <input
          className="block w-3/4 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          type="text"
          placeholder="Please enter your email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <br />
        <button
          onClick={(e) => setToSubmit(true)}
          className={`${disableSubmit ? "opacity-50 cursor-not-allowed": "hover:bg-green-700" } bg-green-600 text-white text-xl font-semibold py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-green-200`}
          disabled={disableSubmit}
        >
          Submit
        </button>
      </div>
    </>
  );
}
