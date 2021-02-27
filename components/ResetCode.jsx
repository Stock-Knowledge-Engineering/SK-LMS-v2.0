import Link from "next/link";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import FieldAlert from "./FieldAlert";
import {useHttp} from '../hooks/http';
import {usePostHttp} from '../hooks/postHttp';
import { Router, useRouter } from "next/dist/client/router";

export default function ResetCode(props) {
  const dispatch = useDispatch();

  const router = useRouter();

  const [code, setCode] = useState("");
  const [disableSubmit, setDisableSubmit] = useState(true);
  const [toSubmit, setToSubmit] = useState(false);

  const [verifyingCode, validCode] = useHttp(code ? `/account/forgot-password/verify/code?value=${code}` : '', [code]);
  // const [isLoading, data] = usePostHttp(toSubmit ? {code: code} : null, '/forgot-password/verify/code');


  useEffect(()=> {
    if(validCode && validCode.success)
      setDisableSubmit(false);
    else
      setDisableSubmit(true);
  },[validCode])

  //priority

  return (
    <>
      <div className="w-1/2">
        <h1 className="w-full text-5xl font-bold text-blue-900 text-left">
          Reset Code
        </h1>
        <br />
       {validCode && !validCode.success && <>
        <FieldAlert message="Code doesn't exist!" />
        <br />
        </>} 
        <input
          className="block w-3/4 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          type="text"
          placeholder="Please enter reset code."
          value={code}
          onChange={e => setCode(e.target.value)}
        />
        <br />
        <button
          onClick={(e) => router.push(`/forgot-password?code=${code}`)}
          className={`${disableSubmit ? "opacity-50 cursor-not-allowed": "hover:bg-green-700" } bg-green-600 text-white text-xl font-semibold py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-green-200`}
          disabled={disableSubmit}
        >
          Submit
        </button>
      </div>
    </>
  );
}
