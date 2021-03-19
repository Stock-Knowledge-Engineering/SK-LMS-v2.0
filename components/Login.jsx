import Link from 'next/link'
import { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";

import { DoLogin } from "../redux/actions/UserAction";

import {useLoginHook} from '../hooks/loginHook';
import FieldAlert from './FieldAlert';

export default function Login(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [toLogin, setToLogin] = useState(false);
    const [registraion, setRegistration] = useState('');
    const [endpoint, setEndpoint] = useState('');

    const [loading, userData] = useLoginHook(
      toLogin ? { username, password } : null, endpoint
    );

    const [invalidCredential, setInvalidCredential] = useState(false);

    const dispatch = useDispatch();

    useEffect(()=>{
      switch(props.status){
        case 'admin-login':
          setRegistration('school-registration');
          setEndpoint('/admin/login')
          break;
        case 'school-login':
          setRegistration('teacher-registration');
          setEndpoint('/school-admin/login');
          break;
        default:
          setRegistration('registration');
          setEndpoint('/login');
          break;      
        }
      if(props.page == 'school'){
        // setRegistration('school-registration');
        setEndpoint('/school/login')
      }
    },[])
    
    useEffect(() => {
      if (userData.success) {
        dispatch(DoLogin(true, userData.result[0]));
      }
      if (typeof userData != "boolean" && !userData.success) {
        setInvalidCredential(true);
        setToLogin(false);
      }
      // console.log(userData);
    }, [userData]);  

    return (
      <>
          <div className="w-1/2">
            <h1 className="w-full text-5xl font-bold text-blue-900 text-left">Login</h1>
            <br />
            {invalidCredential && <FieldAlert message="Invalid username or password"/>}
            <input 
              type="text" 
              className="block w-3/4 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Username" 
              value={username}
              onChange={e => {setUsername(e.target.value)}}
              />
            <br />
            <input 
              type="password" 
              className="block w-3/4 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="password" 
              value={password}
              onChange={e => {setPassword(e.target.value)}}
              />
            <br />
            <Link href="/forgot-password">
              <a className="text-blue-900">Forgot password?</a>
            </Link>
            <br />
            <br />
            <div className="flex space-x-4">
            <button onClick={(e) => setToLogin(true)} className="bg-blue-600 text-white text-xl font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-200">Login</button>
            {
              props.page == 'login' && props.status == 'login' && <Link href={props.page == 'admin' ? '/admin/registration':'/registration'}>
              <button className="bg-yellow-400 text-white text-xl font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 focus:ring-offset-yellow-200">Register</button>
            </Link>
            }
            {
              props.status == 'school-registration' && <Link href="/admin/registration">
              <button className="bg-yellow-400 text-white text-xl font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 focus:ring-offset-yellow-200">Register</button>
            </Link>
            }
            {/* <Link href={props.page == 'admin' ? '/admin/registration':'/registration'}>
              <button className="bg-yellow-400 text-white text-xl font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 focus:ring-offset-yellow-200">Register</button>
            </Link> */}
            </div>
          </div>
      </>
    )
  }