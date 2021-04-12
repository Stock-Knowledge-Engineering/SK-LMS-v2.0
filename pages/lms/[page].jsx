import Link from 'next/link'
import { useEffect, useState } from 'react';

import {useSelector} from 'react-redux';
import MainLayout from '../../layouts/MainLayout';

import Start from '../../components/Start';

import {useUserManagementHook} from '../../hooks/userManagementHook';
import { useRouter } from 'next/dist/client/router';
import FormWrapper from '../../components/HomePage/FormWrapper';

import { SocketContext, socket } from "../../context/socket";

export default function Page(props) {

  useUserManagementHook();
  const [status, setStatus] = useState('login');
  const user = useSelector(state => state.UserReducer);
  const router = useRouter();

  useEffect(() => {
    if(user.data && user.data.title.toLowerCase() == 'teacher' || (user.data && user.data.title.toLowerCase() == 'student' && user.data.verified))
      router.push("/lms");
    if(user.data && user.data.title.toLowerCase() == 'school-admin')
      router.push("/school");
  },[user])

  return (
    <SocketContext.Provider value={socket}>
      <>
        {!user.isLogin && (
          <FormWrapper defaultForm="signup" code={router.query.code}/>
        )}
        {user.data && !user.data.verified && (
          <FormWrapper defaultForm="verification-code" code={router.query.code}/>
          )}
        {user.isLogin && user.data.verified && (
          <MainLayout>
            <h1>
              Current Online User: <b>{onlineUserCount}</b>
            </h1>
          </MainLayout>
        )}
      </>
    </SocketContext.Provider>
  )
}

export async function getStaticPaths(){
    return {
        paths:[
            {params: {page: 'login'}},
            {params: {page: 'verify-account'}},
            {params: {page: 'sign-up'}}, 
            {params: {page: 'forgot-password'}},
            {params: {page: 'admin'}}
        ],
        fallback: true
    }
}

export async function getStaticProps({params}){
    return {
        props: params
    }
}