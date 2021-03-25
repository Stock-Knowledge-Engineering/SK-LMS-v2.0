
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
      className="fixed h-screen flex w-full z-50"
    >
      <div className="w-11/12 h-auto bg-white h-4/5 inset-0 m-auto flex rounded-2xl  animate__animated animate__fadeInDown">
        <div
          style={{ background: `linear-gradient(white, rgb(0, 128, 246))` }}
          className="rounded-l-2xl w-1/2 bg-blue-400 relative overflow-hidden"
        >
          <img
            className="absolute w-full h-full rounded-2xl"
            src="/images/bg-home-modal.svg"
          />
        </div>
        <div className="w-1/2 relative">
          <div
            className="w-full h-full flex justify-center align-center"
          >
            <div className="flex items-center">
              {props.page == 'login' && <Login page={props.page} status={props.status} changeStatus={props.changeStatus}/>}
              {props.page == 'sign-up' && props.status == 'login' && <Registration changeStatus={props.changeStatus}/>}
              {props.page == 'forgot-password' && props.code == null && props.codeSent == null && <ForgotPassword code={props.code}/>}
              {props.page == 'forgot-password' && props.codeSent == 'true' && <ResetCode />}
              {props.page == 'forgot-password' && props.code && <ResetPassword code={props.code}/>}
              {props.page == 'verify-account' && <VerifyAccount />}
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}