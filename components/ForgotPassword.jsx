import Link from "next/link";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import FieldAlert from "./FieldAlert";
import EmailField from "./EmailField";
import { useHttp } from "../hooks/http";
import { usePostHttp } from "../hooks/postHttp";

export default function ForgotPassword(props) {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [toSubmit, setToSubmit] = useState(false);
  const [emailExist, setEmailExist] = useState("");
  const [isLoading, data] = usePostHttp(
    toSubmit ? { email: email } : null,
    "/account/forgot-password"
  );

  return (
    <>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full flex items-center flex-col overflow-y-auto"
      >
        <div className="lg:w-96 md:w-80 flex items-center">
          <img className="w-16 " src="/images/logo.png" />
          <p className="text-gray-500 text-3xl">
            Stock <span className="text-skBlue font-bold">Knowledge</span>
          </p>
        </div>
        <label className="lg:w-full md:px-4 reno:w-full sm:w-full xs:px-4 mt-10 mb-2 text-left font-bold text-4xl text-heading">
          Forgot Password
        </label>
        {isLoading && (
          <label className="w-full mt-10 mb-2 text-left text-subheading">
            {" "}
            Loading....
          </label>
        )}
        {!data.success && !isLoading && (
          <>
            <EmailField
              placeholder="Email"
              value={email}
              setValue={setEmail}
              setEmailExist={setEmailExist}
            />
            {!emailExist && email != "" && (
              <FieldAlert message="Email address does not exist!" />
            )}
            <input
              className={`bg-skBlue text-white text-2xl font-bold w-3/4 mt-10 py-3 rounded-full ${
                emailExist ? "cursor-pointer" : "bg-opacity-50"
              }`}
              type="submit"
              value="Submit"
              onClick={(e) => setToSubmit(true)}
              disabled={emailExist ? false : true}
            />
          </>
        )}
        {
          data.success && (
            <>
              <label className="lg:w-full md:px-4 reno:w-full sm:w-full xs:px-4 mt-10 mb-2 text-left text-subheading">
                We sent a link to your email for resetting your account password.
              </label>
            </>
          )
        }
        <a className="text-subheading mt-6">
          Already have an account?{" "}
          <Link href="/lms/login">
            <span className="text-skBlue font-bold cursor-pointer">Login.</span>
          </Link>
        </a>
      </form>
    </>
  );
}
