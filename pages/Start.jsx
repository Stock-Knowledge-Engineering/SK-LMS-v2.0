import Link from 'next/link';
import { useState } from 'react';
import Login from '../components/Login';
import Register from '../components/Register';

export default function Start(){

    const [status, setStatus] = useState('login');

    return (
        <div className="p-6 w-4/5 mx-auto mt-24 bg-white rounded-xl shadow-md flex flex-col items-center space-x-4">
        <div className="">
          <img src="/sk-logo.png" alt="ChitChat Logo" />
        </div>
        <div className="m-auto w-full flex justify-evenly">
          <div className="w-1/2">
            <img src="/images/hero.png" />
          </div>
          {status == 'login' && <Login changeStatus={setStatus}/>}
          {status == 'Register' && <Register changeStatus={setStatus}/>}
        </div>
      </div>
    )
}