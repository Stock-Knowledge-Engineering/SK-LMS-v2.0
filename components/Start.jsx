
import Login from './Login';
import Registration from './Registration';
import ForgotPassword from './ForgotPassword';
import SchoolRegistration from './SchoolRegistration';
import Invite from './Invite';
import ResetPassword from './ResetPassword';
import ResetCode from './ResetCode';
import LoginModal from './HomePage/LoginModal';
import VerifyAccount from './VerifyAccount';

export default function Start(props){
    return (
    <div
      style={{ background: "rgba(238, 238, 238, 0.5)" }}
      className="h-screen flex w-full z-50"
    >
      <div className="lg:w-11/12 md:w-11/12 sm:w-11/12 sm:w-full lg:h-screen md:h-screen reno:h-auto sm:h-auto xs:h-auto bg-white  md:flex-row sm:flex-col xs:flex-col inset-0 m-auto flex rounded-2xl  animate__animated animate__fadeInDown">
        <div
          className="rounded-l-2xl w-1/2 relative overflow-hidden"
        >
          <img
            className="absolute w-full h-full rounded-2xl"
            src="/images/secondary-hero.svg"
          />
        </div>
        <div className="md:w-1/2 sm:w-full relative">
          <div
            className="w-full h-full flex justify-center align-center"
          >
            <div className="flex items-center my-10">
              {props.page == 'login' && <Login page={props.page} status={props.status} changeStatus={props.changeStatus}/>}
              {props.page == 'sign-up' && props.status == 'login' && <Registration changeStatus={props.changeStatus}/>}
              {props.page == 'forgot-password' && props.code == null && props.codeSent == null && <ForgotPassword code={props.code}/>}
              {props.page == 'forgot-password' && props.codeSent == 'true' && <ResetCode />}
              {props.page == 'forgot-password' && props.code && <ResetPassword code={props.code}/>}
              {props.page == 'verify-account' && <VerifyAccount />}
              {props.page == '/admin/registration' && <SchoolRegistration />}
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}