import Link from "next/link";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import FieldAlert from "./FieldAlert";
import {useHttp} from '../hooks/http';
import PasswordInput from "./PasswordInput";
import { usePostHttp } from "../hooks/postHttp";

import { DoLogin } from "../redux/actions/UserAction";

export default function ResetPassword(props) {
  const dispatch = useDispatch();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState('');
  const [disableSubmit, setDisableSubmit] = useState(true);
  const [toSubmit, setToSubmit] = useState(false);

  const [isLoading, data] = usePostHttp(toSubmit ? {code: props.code, password: password} : null, '/account/reset-password');

  useEffect(()=>{
    if(password == confirmPassword && password != '')
      setDisableSubmit(false);
    else
      setDisableSubmit(true);
  },[password, confirmPassword])

  useEffect(()=>{
    
    if(data.success)
      dispatch(DoLogin(true, data.result));
    else
      setToSubmit(false)

  },[data])

  return (
    <>
      <div className="w-1/2">
        <h1 className="w-full text-5xl font-bold text-blue-900 text-left">
          Reset Password
        </h1>
        <br />
        <PasswordInput value={password} setValue={setPassword}/>
        <br />
        <input
          type="password"
          name="confirmPassword"
          className="block w-3/4 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          placeholder="Re-enter your password"
          value={confirmPassword}
          onChange={e => {setConfirmPassword(e.target.value)}}
        />
        {password != confirmPassword && <FieldAlert message="Password does not match!" /> }
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
