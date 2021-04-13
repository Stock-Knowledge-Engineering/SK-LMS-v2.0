import { useEffect, useState } from "react";
import { useHttp } from "../../hooks/http";
import NumberField from "../NumberField";
import Select from "../Select";
import TextField from "../TextField";

const PersonalInformationComponents = ({
  firstName,
  setFirstName,
  middleName,
  setMiddleName,
  lastName,
  setLastName,
  gender,
  setGender,
  mobileno,
  setMobileNo,
  school,
  setSchool,
  gradeLevel,
  setGradeLevel,
  setStep,
}) => {
  const [schoolsLoading, schools] = useHttp("/schools", []);
  const [gradelevelsLoading, gradeLevels] = useHttp(`/grade-levels?`,[]);

  const [disable, setDisable] = useState(true);

  useEffect(() => {
    if (
      firstName.match(/^[A-Za-z ]*/)[0] == firstName &&
      middleName.match(/^[A-Za-z ]*/)[0] == middleName &&
      lastName.match(/^[A-Za-z ]*/)[0] == lastName &&
      mobileno.match(/^[0-9]*/) == mobileno &&
      gender &&
      school &&
      gradeLevel
    ){
      console.log('false');
      setDisable(false);
    }
    else setDisable(true);
    console.log('true');
  }, [firstName, middleName, lastName, mobileno, gender, school, gradeLevel]);

  return (
    <>
      <TextField
        classNames="lg:w-full md:w-full sm:w-full xs:w-3/4 mt-2 rounded-xl border border-lightGray placeholder-lightGray"
        placeholder="First Name"
        value={firstName}
        setValue={setFirstName}
        alert={true}
      />
      <TextField
        classNames="lg:w-full md:w-full sm:w-full xs:w-3/4 mt-2 rounded-xl border border-lightGray placeholder-lightGray"
        placeholder="Middle Name"
        value={middleName}
        setValue={setMiddleName}
        alert={true}
      />
      <TextField
        classNames="lg:w-full md:w-full sm:w-full xs:w-3/4 mt-2 rounded-xl border border-lightGray placeholder-lightGray"
        placeholder="Last Name"
        y
        value={lastName}
        setValue={setLastName}
        alert={true}
      />
      <label className="lg:w-full md:w-3/4 sm:w-full xs:w-3/4 text-left text-lg mt-2 font-semibold text-subheading">
        Gender
      </label>
      <div
        className="lg:w-full md:w-3/4 sm:w-full xs:w-3/4 mt-2 text-subheading"
        onChange={(e) => setGender(e.target.value)}
      >
        <input type="radio" name="gender" value="male" /> Male &nbsp; &nbsp;
        <input type="radio" name="gender" value="female" /> Female
      </div>
      <NumberField
        classNames="lg:w-full md:w-full sm:w-full xs:w-3/4 mt-2 rounded-xl border border-lightGray placeholder-lightGray"
        value={mobileno}
        setValue={setMobileNo}
        placeholder="Mobile Number"
      />
      <Select
        classNames="w-full rounded-xl border border-lightGray mt-2 text-lightGray"
        setValue={setSchool}
        options={schools}
        selected={school}
        value="id"
        label={"name"}
        compare="id"
        placeholder="School"
      />
      <Select
        classNames="w-full rounded-xl border border-lightGray mt-2 text-lightGray"
        setValue={setGradeLevel}
        options={gradeLevels}
        selected={gradeLevel}
        value="id"
        label={"name"}
        compare="id"
        placeholder="Grade Level"
      />
      <button
        disabled={disable ? true : false}
        onClick={() => {
          setStep(2);
        }}
        className="bg-blue-500 text-white text-xl font-semibold w-full mt-10 py-3 rounded-full disabled:opacity-50"
      >
        Next
      </button>
    </>
  );
};

export default React.memo(PersonalInformationComponents);
