
import Login from './Login';
import Registration from './Registration';
import ForgotPassword from './ForgotPassword';
import SchoolRegistration from './SchoolRegistration';
import Invite from './Invite';
import ResetPassword from './ResetPassword';
import ResetCode from './ResetCode';

export default function Start(props){
    return (
      <div className="p-6 w-4/5 mx-auto mt-24 bg-white rounded-xl shadow-md flex flex-col items-center space-x-4">
        <div className="">
          <img src="/sk-logo.png" alt="ChitChat Logo" />
        </div>
        <div className="m-auto w-full flex justify-evenly">
          <div className="w-1/2">
            <img src="/images/hero.png" />
          </div>
          {props.page == 'login' && <Login page={props.page} status={props.status} changeStatus={props.changeStatus}/>}
          {props.page == 'school' && <Login page={props.page} status={props.status} changeStatus={props.changeStatus}/>}
          {props.page == 'registration' && props.status == 'login' && <Registration changeStatus={props.changeStatus}/>}
          {props.page == 'forgot-password' && props.code == null && props.codeSent == null && <ForgotPassword code={props.code}/>}
          {props.page == 'forgot-password' && props.code && <ResetPassword code={props.code}/>}        
          {props.page == 'forgot-password' && props.codeSent == 'true' && <ResetCode />}
          {props.page == 'invite' && <Invite page={props.page} status={props.status} changeStatus={props.changeStatus}/>}
          {props.page == '/admin/registration' && <SchoolRegistration code={props.code} changeStatus={props.changeStatus}/>}
        </div>
      </div>
    )
}