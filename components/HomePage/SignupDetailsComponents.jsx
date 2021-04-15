import { useEffect, useState } from "react";
import UsernameField from "../UsernameField";
import EmailField from "../EmailField";
import TextField from "../TextField";
import ConfirmPasswordInput from "../ConfirmPasswordInput";
import PasswordInput from "../PasswordInput";
import { usePostHttp } from "../../hooks/postHttp";
import { DoLogin } from "../../redux/actions/UserAction";
import { useDispatch } from "react-redux";

import Link from "next/link";

const SignupDetailsComponents = ({
  email,
  setEmail,
  username,
  setUsername,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  firstName,
  middleName,
  lastName,
  mobileno,
  gender,
  school,
  other,
  gradeLevel,
  favoriteSubject,
  careerGoal,
  setForm,
}) => {
  const dispatch = useDispatch();

  const [validEmail, setValidEmail] = useState(false);
  const [createAccount, setCreateAccount] = useState(false);
  const [userAgree, setUserAgree] = useState(false);
  const [disable, setDisable] = useState(true);

  useEffect(() => {
    if (
      (username,
      password != "" &&
        password == confirmPassword &&
        email &&
        firstName &&
        middleName &&
        lastName &&
        mobileno &&
        gender &&
        school &&
        gradeLevel &&
        favoriteSubject &&
        careerGoal &&
        userAgree)
    )
      setDisable(false);
    else setDisable(true);
  });

  const [creatingAccount, userData] = usePostHttp(
    createAccount
      ? {
          username,
          email,
          password,
          firstName,
          middleName,
          lastName,
          mobileno,
          gender,
          school,
          other,
          gradeLevel,
          favoriteSubject,
          careerGoal,
        }
      : null,
    "/register/student"
  );

  useEffect(() => {
    if (userData.success) {
      dispatch(DoLogin(true, userData.result[0]));
      setForm("account-verification");
    }
  }, [userData]);

  return (
    <>
      <EmailField
        classNames="lg:w-full md:w-full sm:w-full xs:w-3/4 mt-2 rounded-xl border border-lightGray placeholder-lightGray"
        value={email}
        setValue={setEmail}
        placeholder="Email Address"
        to={true}
        endpoint={"/register/verify/email?value="}
        alert={true}
        errorMessage="Email already been taken!"
        setValidEmail={setValidEmail}
      />
      <UsernameField
        classNames="lg:w-full md:w-full sm:w-full xs:w-3/4 mt-2 rounded-xl border border-lightGray placeholder-lightGray"
        value={username}
        setValue={setUsername}
        placeholder="Username"
      />
      <PasswordInput
        wrapperClassName="lg:w-full md:w-full sm:w-full xs:w-3/4 mt-2 flex rounded-xl"
        textFieldClassName="m-auto border-lightGray rounded-xl placeholder-lightGray"
        alert={true}
        alertClassName="w-full mt-2 px-4 py-3 rounded"
        alertValidStyle="border border-green-400 text-green-700"
        alertInvalidStyle="border border-red-400 text-red-700"
        classNames="lg:w-full md:w-full sm:w-full xs:w-3/4 mt-2 rounded-xl border border-lightGray placeholder-lightGray"
        value={password}
        setValue={setPassword}
        placeholder="Password"
      />
      <ConfirmPasswordInput
        wrapperClassName="lg:w-full md:w-full sm:w-full xs:w-3/4 mt-2 flex rounded-xl"
        textFieldClassName="m-auto border-lightGray rounded-xl placeholder-lightGray"
        classNames="lg:w-full md:w-full sm:w-full xs:w-3/4 mt-2 rounded-xl border border-lightGray placeholder-lightGray"
        value={confirmPassword}
        setValue={setConfirmPassword}
        password={password}
        placeholder="Re-enter your password"
      />
      <div className="lg:w-full md:w-full sm:w-full xs:w-3/4 mt-2 flex items-center space-x-2">
        <input
          onChange={(e) => setUserAgree(e.target.checked)}
          type="checkbox"
          name="useragree"
        />
        <label for="useragree" className="text-lightGray hover:text-subheading">
          I agree to the&nbsp;
          <Link href="/terms-and-policy?terms=true">
            <a className="text-skBlueInactive hover:text-skBlue">
              Terms of Service
            </a>
          </Link>
          &nbsp;and&nbsp;
          <Link href="/terms-and-policy?policy=true">
            <a className="text-skBlueInactive hover:text-skBlue">
              Privacy Policy
            </a>
          </Link>
        </label>
      </div>
      <button
        disabled={disable ? true : false}
        onClick={() => {
          setCreateAccount(true);
        }}
        className="bg-blue-500 text-white text-xl font-semibold w-full mt-10 py-3 rounded-full disabled:opacity-50"
      >
        Submit
      </button>
    </>
  );
};

export default SignupDetailsComponents;
