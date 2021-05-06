import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { usePostHttp } from "../../hooks/postHttp";
import FieldAlert from "../FieldAlert";
import PasswordInput from "../PasswordInput";
import TextField from "../TextField";

import { DoLogin } from "../../redux/actions/UserAction";

const LoginForm = ({ showModal, setForm }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.UserReducer);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [toLogin, setToLogin] = useState(false);
  const [invalidCredential, setInvalidCredential] = useState(false);

  const [loading, userData] = usePostHttp(
    toLogin ? { username, password } : null,
    toLogin ? "/login" : null
  );

  useEffect(() => {
    if (userData.success) {
      dispatch(DoLogin(true, userData.result[0]));
      // userData.result[0].verified == 1 ? showModal(false) : setForm('account-verification');
    }

    if (typeof userData != "boolean" && !userData.success) {
      setInvalidCredential(true);
      setToLogin(false);
    }
  }, [userData]);

  useEffect(() => {
     if(user.islogin && user.data && user.data.verified )
      showModal(false);
    
  }, [user.data]);
  return (
    <>
      <label className="w-full mt-10 text-left font-bold text-4xl text-gray-700">
        Login
      </label>
      <TextField
        classNames="w-full mt-10 rounded-xl border border-lightGray placeholder-lightGray"
        placeholder="Username"
        value={username}
        setValue={setUsername}
        alert={false}
      />
      <PasswordInput
        wrapperClassName="w-full mt-2 flex rounded-xl"
        textFieldClassName="m-auto border-lightGray rounded-xl placeholder-lightGray"
        classNames="lg:w-full md:w-full sm:w-full xs:w-3/4 xxs:w-3/4 mt-2 rounded-xl border border-lightGray placeholder-lightGray"
        iconTop={'top-2'}
        value={password}
        setValue={setPassword}
        placeholder="Password"
      />
      {invalidCredential && (
        <FieldAlert
          classNames="w-full mt-2 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          message="Invalid username or password!"
        />
      )}
      <a
        onClick={() => {
          setForm("forgot-password");
        }}
        className="mt-4 self-end font-bold text-skBlue cursor-pointer"
      >
        Forgot Password?
      </a>
      <button
        onClick={() => {
          setToLogin(true);
        }}
        className="bg-blue-500 text-white text-xl font-semibold w-full mt-10 py-3 rounded-full disabled:opacity-50"
      >
        Login
      </button>
      <a
        onClick={() => {
          setForm("signup");
        }}
        className="text-gray-500 mt-6 cursor-pointer"
      >
        Don't have an account?{" "}
        <span className="text-blue-400 font-bold">Sign Up.</span>
      </a>
    </>
  );
};

export default React.memo(LoginForm);
