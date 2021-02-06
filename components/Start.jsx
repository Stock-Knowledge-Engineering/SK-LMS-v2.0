import Link from 'next/link';
import { useState } from 'react';
import Login from './Login';
import SchoolRegisteration from './SchoolRegistration';
import Registration from './Registration';
import {useUserManagementHook} from '../hooks/userManagementHook';

export default function Start(props){
  // useUserManagementHook();

    return (
        <div className="p-6 w-4/5 mx-auto mt-24 bg-white rounded-xl shadow-md flex flex-col items-center space-x-4">
        <div className="">
          <img src="/sk-logo.png" alt="ChitChat Logo" />
        </div>
        <div className="m-auto w-full flex justify-evenly">
          <div className="w-1/2">
            <img src="/images/hero.png" />
          </div>
          {props.status.includes('login') && <Login status={props.status} changeStatus={props.changeStatus}/>}
          {props.status == 'registration' && <Registration changeStatus={props.changeStatus}/>}
          {props.status == 'school-registration' && <SchoolRegisteration changeStatus={props.changeStatus}/>}
        </div>
      </div>
    )
}