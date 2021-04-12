import { useDispatch } from "react-redux";
import Link from "next/link";
import { DoLogin } from "../redux/actions/UserAction";
import { useState, useEffect } from "react";
import { useHttp } from "../hooks/http";
import { usePostHttp } from "../hooks/postHttp";
import PasswordInput from "./PasswordInput";
import { useRouter } from "next/dist/client/router";
import TextField from "./TextField";
import NumberField from "./NumberField";
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

export default function SchoolRegistration(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [gender, setGender] = useState("");
  const [emailDomain, setEmailDomain] = useState("");
  const [emailExist, setEmailExist] = useState("");

  const [schoolName, setSchoolName] = useState("");

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
      password != "" &&
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
      <form
        onSubmit={(e) => {
          setCreateAccount(true);
        }}
        className="w-full h-screen flex items-center flex-col overflow-y-scroll"
      >
        <div className="lg:w-96 md:w-80 flex items-center">
          <img className="w-16 " src="/images/logo.png" />
          <p className="text-gray-500 text-3xl">
            Stock <span className="text-blue-500 font-bold">Knowledge</span>
          </p>
        </div>
        <label className="lg:w-full md:w-11/12 mt-10 text-left font-bold text-4xl text-heading">
          Sign Up
        </label>
        <TextField
          placeholder="First Name"
          value={firstName}
          setValue={setFirstName}
        />
        <TextField
          placeholder="Middle Name"
          value={middleName}
          setValue={setMiddleName}
        />
        <TextField
          placeholder="Last Name"
          value={lastName}
          setValue={setLastName}
        />
        <label className="lg:w-3/4 md:w-3/4 sm:w-full xs:w-3/4 mt-2 text-left text-xl text-subheading">
          Gender:
        </label>
        <div
          className="lg:w-3/4 md:w-3/4 sm:w-full xs:w-3/4 text-subheading"
          onChange={(e) => setGender(e.target.value)}
        >
          <input type="radio" name="gender" value="male" /> Male &nbsp; &nbsp;
          <input type="radio" name="gender" value="female" /> Female
        </div>
        <EmailField
          placeholder="Email"
          value={email}
          setValue={setEmail}
          setEmailExist={setEmailExist}
        />
        {emailExist && email != "" && (
          <FieldAlert message="Email address already exist!" />
        )}
        <NumberField
          placeholder="Mobile Number"
          value={mobileNumber}
          setValue={setMobileNumber}
        />
        <input
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          className="lg:w-3/4 md:w-3/4 sm:w-full xs:w-3/4 mt-2 border-none bg-gray-100 rounded-xl"
          name="username"
          type="text"
          placeholder="Username"
        />
        <PasswordInput value={password} setValue={setPassword} />
        <input
          type="password"
          name="confirmPassword"
          className="block lg:w-3/4 md:w-3/4 sm:w-full mt-2 rounded-xl bg-gray-100 border-none"
          placeholder="Re-enter your password"
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
        />
        {password != confirmPassword && (
          <FieldAlert message="Password does not match!" />
        )}
        <label className="lg:w-3/4 md:w-3/4 sm:w-full xs:w-3/4 mt-2 text-left text-xl text-subheading">
          School Information
        </label>
        <TextField
          placeholder="School Name"
          value={schoolName}
          setValue={setSchoolName}
        />
        <select
          className="lg:w-3/4 md:w-3/4 sm:w-full xs:w-3/4 mt-2 text-left text-xl text-subheading"
          onChange={(e) => setEducationalLevel(e.target.value)}
        >
          <option value="select">----Select Educational Level----</option>
          <option value="elementary">Elementary</option>
          <option value="highschool">Highschool</option>
        </select>
        <select className="lg:w-3/4 md:w-3/4 sm:w-full xs:w-3/4 mt-2 text-left text-xl text-subheading" onChange={e => setSchoolType(e.target.value)}>
                <option value="select">----Select School Type----</option>
                <option value="general public">General Public</option>
                <option value="science public">Science Public</option>
                <option value="private">Private</option>
        </select>
        <select className="w-3/4 border border-gray-200 p-2 focus:outline-none focus:border-gray-500" onChange={e => setAreaType(e.target.value)}>
                <option value="select">----Select Area----</option>
                <option value="rural">Rural</option>
                <option value="urban">Urban</option>
        </select>
        <input 
          className="block w-3/4 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          type="text" 
          name="schoolEmailDomain" 
          placeholder="School Email Domain (e.g. @school.com)"
          value={emailDomain}
          onChange={e => setEmailDomain(e.target.value)}
        />
        <input
          className={`bg-blue-500 text-white text-2xl font-bold w-3/4 mt-10 py-3 rounded-full ${
            disableConfirm ? "bg-opacity-75" : "cursor-pointer"
          }`}
          type="submit"
          value="Sign Up"
          disabled={disableConfirm}
        />
        <a className="text-gray-500 mt-6">
          Already have an account?{" "}
          <Link href="/lms/login">
            <span className="text-blue-400 font-bold cursor-pointer">
              Login.
            </span>
          </Link>
        </a>
      </form>
      {/* <div className="w-1/2">
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
        <h4 className="text-2xl font-bold text-gray-900">School Information</h4>
        <br />
        <TextField placeholder="School Name" value={schoolName} setValue={setSchoolName} />
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
            onClick={(e) => router.push('/login')}
            className="bg-blue-500 text-white text-xl font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-blue-300"
          >
            Login
          </button>
        </div>
      </div> */}
    </>
  );
}
