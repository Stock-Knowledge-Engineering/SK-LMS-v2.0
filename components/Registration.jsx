import Link from "next/link";
import { useDispatch } from "react-redux";

import { DoLogin } from "../redux/actions/UserAction";
import {useState, useEffect} from 'react';
import { useHttp } from "../hooks/http";
import { usePostHttp } from "../hooks/postHttp";

import PasswordInput from '../components/PasswordInput';
import NumberField from '../components/NumberField';
import TextField from "./TextField";

const FieldAlert = (props) => {
    const {message} = props;
    return (
    <div
      className="w-3/4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
      role="alert"
    >
      <strong className="font-bold">Oops!</strong>
      <br />
      <span className="block sm:inline">{message}</span>
    </div>)
}

export default function TeacherRegistration(props) {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [gender, setGender] = useState('');

  const [validPassword, SetValidPassword] = useState('');
  const [disableConfirm, setDisableConfirm] = useState(true);

  const [createAccount, setCreateAccount] = useState(false);

  const [verifyingUsername, usernameExist] = useHttp(`/register/verify/username?value=${username}`, [username]);
  const [verifyingEmail, emailExist] = useHttp(`/register/verify/email?value=${email}`, [email]);
  const [creatingAccount, userData] = usePostHttp(createAccount ? {username, email, password, firstName, middleName, lastName, mobileNumber, gender} : null,'/register/student')

  const dispatch = useDispatch();

  useEffect(()=>{
    if(!usernameExist && !emailExist && password == confirmPassword && firstName && middleName && lastName && mobileNumber && gender)
      setDisableConfirm(false);
    else
      setDisableConfirm(true);
  },[username, password,confirmPassword, email, firstName, middleName, lastName, mobileNumber, gender])

  useEffect(() => {
    if (userData && !creatingAccount) {
      setCreateAccount(false);
    }

    if (userData) dispatch(DoLogin(true, userData[0]));
  },[userData])

  return (
    <>
      <div className="w-1/2">
        <h1 className="w-full text-5xl font-bold text-blue-900 text-left">
          Register
        </h1>
        <br />
        <h3 className="text-gray-600">Tell us about yourself</h3>
        <br />
        <input
          type="text"
          className="block w-3/4 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          placeholder="Email"
          value={email}
          onChange={e => { setEmail(e.target.value) }}
        />
        {/* {
          !/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email) && <FieldAlert message="Invalid email!" />
        } */}
        {
          emailExist && email != '' && <FieldAlert message="Email has already been taken!" />
        }
        <br />
        <input
          type="text"
          className="block w-3/4 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          placeholder="Username"
          value={username}
          onChange={e => { setUsername(e.target.value) }}
        />
        {
          usernameExist &&  <FieldAlert message="Username is already taken!" />
        }

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
        <TextField placeholder="First Name" value={firstName} setValue={setFirstName} />
        <br />
        <TextField placeholder="Middle Name" value={middleName} setValue={setMiddleName} />
        <br />
        <TextField placeholder="Last Name" value={lastName} setValue={setLastName} />
        <br />
        <NumberField placeholder="Mobile Number" value={mobileNumber} setValue={setMobileNumber} />
        <br />
        <h6 className="text-xl font-bold text-gray-700">Gender:</h6>
        <div onChange={e => setGender(e.target.value)}>
        <input type="radio" name="gender" value="male" /> Male &nbsp; &nbsp;
        <input type="radio" name="gender" value="female" /> Female
        </div>
        <br />
        <br />
        <div className="flex space-x-4">
          <button
            onClick={(e) => setCreateAccount(true)}
            className={`${disableConfirm ? "opacity-50 cursor-not-allowed": "hover:bg-green-700" } bg-green-600 text-white text-xl font-semibold py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-green-200`}
            disabled={disableConfirm}
          >
            Confirm
          </button>
            <Link href="/login">
            <button
            className="bg-blue-500 text-white text-xl font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-blue-300"
          >
            Login
          </button>
            </Link>
        </div>
      </div>
    </>
  );
}
