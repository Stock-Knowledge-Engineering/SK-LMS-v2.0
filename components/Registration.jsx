import Link from "next/link";
import { useDispatch } from "react-redux";

import { DoLogin } from "../redux/actions/UserAction";
import { useState, useEffect } from "react";
import { useHttp } from "../hooks/http";
import { usePostHttp } from "../hooks/postHttp";

import PasswordInput from "../components/PasswordInput";
import NumberField from "../components/NumberField";
import TextField from "./TextField";
import EmailField from "./EmailField";

const FieldAlert = (props) => {
  const { message } = props;
  return (
    <div
      className="w-3/4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
      role="alert"
    >
      <strong className="font-bold">Oops!</strong>
      <br />
      <span className="block sm:inline">{message}</span>
    </div>
  );
};

export default function TeacherRegistration(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [gender, setGender] = useState("");
  const [emailExist, setEmailExist] = useState("");

  const [validPassword, SetValidPassword] = useState("");
  const [disableConfirm, setDisableConfirm] = useState(true);

  const [createAccount, setCreateAccount] = useState(false);

  const [
    verifyingUsername,
    usernameExist,
  ] = useHttp(`/register/verify/username?value=${username}`, [username]);

  const [creatingAccount, userData] = usePostHttp(
    createAccount
      ? {
          username,
          email,
          password,
          firstName,
          middleName,
          lastName,
          mobileNumber,
          gender,
        }
      : null,
    "/register/student"
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (
      !usernameExist &&
      !emailExist &&
      password != '' &&
      password == confirmPassword &&
      firstName &&
      middleName &&
      lastName &&
      mobileNumber &&
      gender
    )
      setDisableConfirm(false);
    else setDisableConfirm(true);
  }, [
    username,
    password,
    confirmPassword,
    email,
    firstName,
    middleName,
    lastName,
    mobileNumber,
    gender,
  ]);

  useEffect(() => {
    if (userData && !creatingAccount) {
      setCreateAccount(false);
    }

    if (userData) dispatch(DoLogin(true, userData[0], false));
  }, [userData]);

  return (
    <>
      <form onSubmit={e => {setCreateAccount(true)}} className="w-full flex items-center flex-col overflow-y-auto">
        <div className="lg:w-96 md:w-80 flex items-center">
          <img className="w-16 " src="/images/logo.png" />
          <p className="text-gray-500 text-3xl">
            Stock <span className="text-blue-500 font-bold">Knowledge</span>
          </p>
        </div>
        <label className="w-full mt-10 text-left font-bold text-4xl text-heading">
          Sign Up
        </label>        
        <TextField placeholder="First Name" value={firstName} setValue={setFirstName} />
        <TextField placeholder="Middle Name" value={middleName} setValue={setMiddleName} />
        <TextField placeholder="Last Name" value={lastName} setValue={setLastName} />
        <label className="w-3/4 mt-2 text-left text-xl text-subheading">
          Gender:
        </label>
        <div
          className="w-3/4 text-subheading"
          onChange={(e) => setGender(e.target.value)}
        >
          <input type="radio" name="gender" value="male" /> Male &nbsp; &nbsp;
          <input type="radio" name="gender" value="female" /> Female
        </div>
        <EmailField placeholder="Email" value={email} setValue={setEmail} setEmailExist={setEmailExist}/>
        {emailExist && email != "" && (
              <FieldAlert message="Email address already exist!" />
            )}
        <NumberField placeholder="Mobile Number" value={mobileNumber} setValue={setMobileNumber} />
        <input
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          className="lg:w-3/4 md:w-full mt-2 border-none bg-gray-100 rounded-xl"
          name="username"
          type="text"
          placeholder="Username"
        />
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
          className={`bg-blue-500 text-white text-2xl font-bold w-3/4 mt-10 py-3 rounded-full ${disableConfirm ? 'bg-opacity-75' : 'cursor-pointer'}`}
          type="submit"
          value="Sign Up"
          disabled={disableConfirm}
        />
        <a className="text-gray-500 mt-6">
          Already have an account?{" "}
          <Link href="/lms/login">
            <span className="text-blue-400 font-bold cursor-pointer">Login.</span>
          </Link>
        </a>
      </form>
    </>
  );
}
