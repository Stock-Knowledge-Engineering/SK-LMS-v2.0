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
  const [verifyingCode, validCode] = useHttp(props.code ? `/account/forgot-password/verify/code?value=${props.code}` : '', [props.code]);
 
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

  useEffect(() => {
    console.log(validCode)
  },[validCode])

  const handleSubmit = (e) => {
    e.preventDefault();
    setToSubmit(true)
  }

  return (
    <>
      <form onSubmit={e => {handleSubmit(e)}} className="w-full flex items-center flex-col overflow-y-auto">
        <div className="lg:w-96 md:w-80 flex items-center">
          <img className="w-16 " src="/images/logo.png" />
          <p className="text-gray-500 text-3xl">
            Stock <span className="text-blue-500 font-bold">Knowledge</span>
          </p>
        </div>
        <label className="w-full mt-10 text-left font-bold text-4xl text-heading">
          Reset Password
        </label>        
        <PasswordInput value={password} setValue={setPassword} />
        <input
          type="password"
          name="confirmPassword"
          className="block w-3/4 mt-2 rounded-xl bg-gray-100 border-none"
          placeholder="Re-enter your password"
          value={confirmPassword}
          onChange={e => {setConfirmPassword(e.target.value)}}
        />
        {password != confirmPassword && <FieldAlert message="Password does not match!" /> }
        <input
          className={`bg-blue-500 text-white text-2xl font-bold w-3/4 mt-10 py-3 rounded-full ${disableSubmit ? 'bg-opacity-75' : 'cursor-pointer'}`}
          type="submit"
          value="Sign Up"
          disabled={disableSubmit}
        />
        <a className="text-gray-500 mt-6">
          Already have an account?{" "}
          <Link href="/lms/login">
            <span className="text-blue-400 font-bold cursor-pointer">Login.</span>
          </Link>
        </a>
      </form>
      {/* <div className="w-full">
        <h1 className="w-full text-5xl font-bold text-blue-900 text-left">
          Reset Password
        </h1>
        <br />
        <PasswordInput value={password} setValue={setPassword}/>
        <br />
        <input
          type="password"
          name="confirmPassword"
          className="block w-3/4 mt-2 rounded-xl bg-gray-100 border-none"
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
      </div> */}
    </>
  );
}
