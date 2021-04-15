import { useState } from "react";
import { useSelector } from "react-redux";
import AccountVerificationForm from "./AccountVerificationForm";
import ForgotPasswordForm from "./ForgotPasswordForm";
import LoginForm from "./LoginForm";

import SignupForm from "./SignupForm";
import TermsAndPolicyComponents from "./TermsAndPolicyComponents";

const FormWrapper = ({ defaultForm, code, showModal }) => {
  const user = useSelector((state) => state.UserReducer);

  const [form, setForm] = useState(defaultForm);

  return (
    <>
      <div
        style={{ background: "rgba(238, 238, 238, 0.5)" }}
        className="fixed h-screen flex w-full z-50"
      >
        <div className="w-11/12 bg-white h-4/5 inset-0 m-auto flex rounded-2xl animate__animated animate__fadeInDown">
          <div className="rounded-l-2xl w-1/2 relative overflow-hidden md:block sm:hidden xs:hidden">
            <img
              className="w-full h-full rounded-2xl"
              src="/images/secondary-hero.svg"
            />
          </div>
          <div className="lg:w-1/2 md:w-1/2 sm:w-full xs:w-full relative">
            {showModal && (
              <svg
                onClick={(e) => showModal(false)}
                className="absolute right-0 w-8 h-8 mr-4 mt-4 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            )}
            <div className="w-full h-full flex justify-center align-center">
              <div className="flex items-center">
                <div className="w-full flex items-center flex-col">
                  <div className="lg:w-96 md:w-80 flex items-center">
                    <img className="w-16 " src="/images/logo.png" />
                    <p className="text-gray-500 text-3xl">
                      Stock{" "}
                      <span className="text-blue-500 font-bold">Knowledge</span>
                    </p>
                  </div>
                  {!user.isLogin && form === "signup" && (
                    <SignupForm setForm={setForm} />
                  )}
                  {!user.isLogin && form === "login" && (
                    <LoginForm showModal={showModal} setForm={setForm} />
                  )}
                  {!user.isLogin && form === "forgot-password" && (
                    <ForgotPasswordForm
                      showModal={showModal}
                      code={code}
                      setForm={setForm}
                    />
                  )}

                  {user.isLogin && !user.data.verified && (
                    <AccountVerificationForm
                      userid={user.data.userid}
                      showModal={showModal}
                      code={code}
                      setForm={setForm}
                    />
                  )}
                  {form === 'term-and-policy' && <TermsAndPolicyComponents />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormWrapper;
