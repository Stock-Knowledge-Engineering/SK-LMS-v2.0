import Link from "next/link";
import { useDispatch } from "react-redux";

import { DoLogin } from "../redux/actions/UserAction";
import {useState, useEffect} from 'react';
import { useHttp } from "../hooks/http";
import { useCreateSchool } from "../hooks/createSchool";

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

export default function SchoolRegistration(props) {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [gender, setGender] = useState('');

  const [schoolName, setSchoolName] = useState('');
  const [educationalLevel, setEducationalLevel] = useState('');
  const [schoolType, setSchoolType] = useState('');
  const [areaType, setAreaType] = useState('');
  const [emailDomain, setEmailDomain] = useState('');

  const [validPassword, SetValidPassword] = useState('');
  const [disableConfirm, setDisableConfirm] = useState(true);

  const [createAccount, setCreateAccount] = useState(false);

  const [verifyingUsername, usernameExist] = useHttp(`http://localhost:3001/register/verify/username?value=${username}`, [username]);
  const [verifyingEmail, emailExist] = useHttp(`http://localhost:3001/school-admin/verify/email?value=${email}`, [email]);
  const [creatingAccount, userData] = useCreateSchool(createAccount ? {username, email, password, firstName, middleName, lastName, mobileNumber, gender, schoolName, educationalLevel, schoolType, areaType, emailDomain} : null)

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
        <input
          type="password"
          name="password"
          className="block w-3/4 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          placeholder="Password"
          value={password}
          onChange={e => { setPassword(e.target.value) }}
        />
        {!validPassword && <div
          className="w-3/4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong className="font-bold">Password Strenght: {/(\w|\d|\W){8,}/.test(password) ? 'Strong' : 'Weak'}</strong>
          { !/(a-z&A-Z|\d|\W){8,}/.test(password) && <ul className="list-disc text-sm p-2">
            {
              !/([A-ZÑ])+/.test(password) && <li>Password must contain atleast 1 upper case letters (A - Z)</li>
            }
            {
              !/([a-zñ])+/.test(password) && <li>Password must contain atleast 1 lower case letters (a - z)</li>
            }
                        {
              !/\d/.test(password) && <li>Password must contain atleast 1 number (0 - 9)</li>
            }
            {!/\W/.test(password) && <li>Password must contain atleast 1 non-alphanumeric symbol (e.g. '@$%@(|'))</li>}
            {!/(\W|\d|\w){8,}/.test(password) && <li>Password must be 8 characters long</li>}
            
          </ul>}
          </div>}
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
        <input
          type="text"
          name="firstName"
          className="block w-3/4 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          placeholder="First name"
          value={firstName}
          onChange={e => {setFirstName(e.target.value)}}
        />
        <br />
        <input
          type="text"
          name="middleName"
          className="block w-3/4 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          placeholder="Middle name"
          value={middleName}
          onChange={e => {setMiddleName(e.target.value)}}
        />
        <br />
        <input
          type="text"
          name="lastName"
          className="block w-3/4 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          placeholder="Last name"
          value={lastName}
          onChange={e => {setLastName(e.target.value)}}
        />
        <br />
        <input
          type="text"
          name="mobileNo"
          className="block w-3/4 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          placeholder="Mobile Number"
          value={mobileNumber}
          onChange={e => {setMobileNumber(e.target.value)}}

        />
        <br />
        <h6 className="text-xl font-bold text-gray-700">Gender:</h6>
        <div onChange={e => setGender(e.target.value)}>
        <input type="radio" name="gender" value="male" /> Male &nbsp; &nbsp;
        <input type="radio" name="gender" value="female" /> Female
        </div>
        <br />
        <h4 className="text-2xl font-bold text-gray-900">School Information</h4>
        <br />
        <input 
          className="block w-3/4 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          type="text" 
          name="schoolName" 
          placeholder="School name"
          value={schoolName}
          onChange={e => {setSchoolName(e.target.value)}}
        />
        <br />
        <select className="w-3/4 border border-gray-200 p-2 focus:outline-none focus:border-gray-500" onChange={e => setEducationalLevel(e.target.value)}>
                <option value="select">----Select Educational Level----</option>
                <option value="elementary">Elementary</option>
                <option value="highschool">Highschool</option>
        </select>
        <br />
        <br />
        <select className="w-3/4 border border-gray-200 p-2 focus:outline-none focus:border-gray-500" onChange={e => setSchoolType(e.target.value)}>
                <option value="select">----Select School Type----</option>
                <option value="general public">General Public</option>
                <option value="science public">Science Public</option>
                <option value="private">Private</option>
        </select>
        <br />
        <br />
        <select className="w-3/4 border border-gray-200 p-2 focus:outline-none focus:border-gray-500" onChange={e => setAreaType(e.target.value)}>
                <option value="select">----Select Area----</option>
                <option value="rural">Rural</option>
                <option value="urban">Urban</option>
        </select>
        <br />
        <br />
        <input 
          className="block w-3/4 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          type="text" 
          name="schoolEmailDomain" 
          placeholder="School Email Domain (e.g. @school.com)"
          value={emailDomain}
          onChange={e => setEmailDomain(e.target.value)}
        />
        <br />
        <div className="flex space-x-4">
          <button
            onClick={(e) => setCreateAccount(true)}
            className={`${disableConfirm ? "opacity-50 cursor-not-allowed": "hover:bg-green-700" } bg-green-600 text-white text-xl font-semibold py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-green-200`}
            disabled={disableConfirm}
          >
            Confirm
          </button>
          <button
            onClick={(e) => props.changeStatus("admin-login")}
            className="bg-blue-500 text-white text-xl font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-blue-300"
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
}
