import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

import PersonalInformationComponents from "./PersonalInfomationComponents";
import InterestComponents from "./InterestComponents";
import SignupDetailsComponents from './SignupDetailsComponents';

const SignupForm = ({setForm}) => {
  const leftAngleBracket = (
    <FontAwesomeIcon
      onClick={() => {
        setStep(step - 1);
      }}
      className="text-skBlue"
      icon={faAngleLeft}
      size="3x"
    />
  );

  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [school, setSchool] = useState("");
  const [other, setOther] = useState('');
  const [mobileno, setMobileNo] = useState('');
  const [gender, setGender] = useState('');
  const [gradeLevel, setGradeLevel] = useState("");
  const [favoriteSubject, setFavoriteSubject] = useState("");
  const [careerGoal, setCareerGoal] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");

  const [step, setStep] = useState(1);

  return (
    <>
      <label className="w-full mt-10 text-left font-bold text-4xl text-gray-700">
        Signup
      </label>
      <div className="flex items-center mt-10 w-full space-x-4">
        {step > 1 && leftAngleBracket}
        <label className="lg:w-full md:w-3/4 sm:w-full xs:w-3/4 text-left text-lg  font-semibold text-subheading">
          {step == 1 && "Personal Infomation"}
          {step == 2 && "Interests"}
          {step == 3 && "Sign Up Details"}
        </label>
      </div>
      <div className="w-full flex space-x-2 my-4">
        <div
          className={`${
            step > 0 ? "bg-skBlue" : "bg-skBlueInactive"
          } h-1 w-full rounded-xl`}
        ></div>
        <div
          className={`${
            step > 1 ? "bg-skBlue" : "bg-skBlueInactive"
          } h-1 w-full rounded-xl`}
        ></div>
        <div
          className={`${
            step > 2 ? "bg-skBlue" : "bg-skBlueInactive"
          } h-1 w-full rounded-xl`}
        ></div>
      </div>
      {step === 1 && (
        <PersonalInformationComponents
          firstName={firstName}
          middleName={middleName}
          lastName={lastName}
          school={school}
          other={other}
          gradeLevel={gradeLevel}
          mobileno={mobileno}
          gender={gender}
          setFirstName={setFirstName}
          setMiddleName={setMiddleName}
          setLastName={setLastName}
          setSchool={setSchool}
          setOther={setOther}
          setGradeLevel={setGradeLevel}
          setMobileNo={setMobileNo}
          setGender={setGender}
          setStep={setStep}
        />
      )}
      {step === 2 && (
        <InterestComponents
          favoriteSubject={favoriteSubject}
          careerGoal={careerGoal}
          setFavoriteSubject={setFavoriteSubject}
          setCareerGoal={setCareerGoal}
          setStep={setStep}
        />
      )}
      {step === 3 && (
        <SignupDetailsComponents
          email={email}
          username={username}
          password={password}
          setEmail={setEmail}
          setUsername={setUsername}
          setPassword={setPassword}
          confirmPassword={confirmPassword}
          setConfirmPassword={setConfirmPassword}
          firstName={firstName}
          middleName={middleName}
          lastName={lastName}
          school={school}
          other={other}
          mobileno={mobileno}
          gender={gender}
          gradeLevel={gradeLevel}
          favoriteSubject={favoriteSubject}
          careerGoal={careerGoal}
          setForm={setForm}
        />
      )}
      <a
        onClick={() => {
          setForm("login");
        }}
        className="text-gray-500 mt-6 cursor-pointer"
      >
        Already have an account?{" "}
        <span className="text-blue-400 font-bold">Login.</span>
      </a>
    </>
  );
};

export default React.memo(SignupForm);
