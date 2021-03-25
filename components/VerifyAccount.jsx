import Link from 'next/link';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHttp } from '../hooks/http';
import { usePostHttp } from '../hooks/postHttp';

import { DoAccountVerification } from "../redux/actions/UserAction";

const VerifyAccount = (props) => {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.UserReducer);
    const [code, setCode] = useState('');
    const [disableSubmit, setDisableSubmit] = useState(true);
    const [toSubmit, setToSubmit] = useState(false);

    const [validingCode, codeExist] = useHttp(code ? `/verify/verification-code?value=${code}` : null,[code]);
    const [validingAccount, accountVerified] = usePostHttp(toSubmit ? {code: code, userid: user.data && user.data.user_id} : null, '/validate/account');

    const handleSubmit = (e) => {
        e.preventDefault();
        setToSubmit(true);
    }

    useEffect(() =>{
        if(accountVerified.success){
          dispatch(DoAccountVerification(accountVerified.success))
        }
        else
          setToSubmit(false);
    },[accountVerified])

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
      className="w-full flex items-center flex-col overflow-y-auto"
    >
      <div className="lg:w-96 md:w-80 flex items-center">
        <img className="w-16 " src="/images/logo.png" />
        <p className="text-gray-500 text-3xl">
          Stock <span className="text-blue-500 font-bold">Knowledge</span>
        </p>
      </div>
      <label className="w-full mt-10 text-left font-bold text-4xl text-heading">
        Verify Account
      </label>
      <input
        type="text"
        name="code"
        className="block w-3/4 mt-2 rounded-xl bg-gray-100 border-none"
        placeholder="Enter your verification code"
        value={code}
        onChange={(e) => {
            setCode(e.target.value);
        }}
      />
      {/* {password != confirmPassword && (
        <FieldAlert message="Password does not match!" />
      )} */}
      <input
        className={`bg-blue-500 text-white text-2xl font-bold w-3/4 mt-10 py-3 rounded-full ${
          !codeExist ? "bg-opacity-75" : "cursor-pointer"
        }`}
        type="submit"
        value="Sign Up"
        disabled={codeExist ? false : true}
      />
      <a className="text-gray-500 mt-6">
        Already have an account?{" "}
        <Link href="/lms/login">
          <span className="text-blue-400 font-bold cursor-pointer">Login.</span>
        </Link>
      </a>
    </form>
  );
};

export default VerifyAccount;
