import Link from "next/link";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { DoLogin } from "../redux/actions/UserAction";

import { useLoginHook } from "../hooks/loginHook";
import FieldAlert from "./FieldAlert";

export default function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [toLogin, setToLogin] = useState(false);
  const [registraion, setRegistration] = useState("");
  const [endpoint, setEndpoint] = useState("");

  const [loading, userData] = useLoginHook(
    toLogin ? { username, password } : null,
    endpoint
  );

  const [invalidCredential, setInvalidCredential] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    switch (props.status) {
      case "admin-login":
        setRegistration("school-registration");
        setEndpoint("/admin/login");
        break;
      case "school-login":
        setRegistration("teacher-registration");
        setEndpoint("/school-admin/login");
        break;
      default:
        setRegistration("registration");
        setEndpoint("/login");
        break;
    }
    if (props.page == "school") {
      // setRegistration('school-registration');
      setEndpoint("/school/login");
    }
  }, []);

  useEffect(() => {
    if (userData.success) {
      dispatch(DoLogin(true, userData.result[0], remember));
    }
    if (typeof userData != "boolean" && !userData.success) {
      setInvalidCredential(true);
      setToLogin(false);
    }
    // console.log(userData);
  }, [userData]);

  return (
    <>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full flex items-center flex-col overflow-y-auto"
      >
        <div className="lg:w-96 md:w-80 flex items-center">
          <img className="w-16 " src="/images/logo.png" />
          <p className="text-gray-500 text-3xl">
            Stock <span className="text-blue-500 font-bold">Knowledge</span>
          </p>
        </div>
        <label className="lg:w-full md:w-full self-start xs:px-4 mt-10 text-left font-bold text-4xl text-gray-700">
          Login
        </label>
        {invalidCredential && (
          <FieldAlert message="Invalid Username or Password" />
        )}
        <input
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          className="w-11/12 mt-4 border-none bg-gray-100 rounded-xl"
          name="username"
          type="text"
          placeholder="Username"
        />
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className="w-11/12 mt-2 px-2 border-none bg-gray-100 rounded-xl"
          name="password"
          type="password"
          placeholder="Password"
        />
        <div className="w-11/12 mt-2 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {/* <input value={remember} onChange={e => setRemember(e.target.checked)} type="checkbox" name="rememberpassowrd" />
            <label className="text-gray-500" htmlFor="rememberpassword">
              Remember me?
            </label> */}
          </div>
          <Link href="/lms/forgot-password">
            <a className="font-bold text-skBlue">Forgot Password?</a>
          </Link>
        </div>
        <input
          className="bg-skBlue text-white text-2xl font-bold w-11/12 mt-10 py-3 rounded-full "
          type="submit"
          value="Login"
          onClick={(e) => setToLogin(true)}
        />
        <a className="text-gray-500 mt-6">
          Don't have an account?{" "}
          <Link href="/lms/sign-up">
            <span className="text-skBlue font-bold cursor-pointer">
              Sign Up.
            </span>
          </Link>
        </a>
      </form>
    </>
  );
}
