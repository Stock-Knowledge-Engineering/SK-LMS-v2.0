import Link from 'next/link'
import { useEffect, useState } from 'react';

import {useSelector} from 'react-redux'
import MainLayout from '../layouts/MainLayout';

import Start from '../components/Start';

import {useUserManagementHook} from '../hooks/userManagementHook';
import { useRouter } from 'next/dist/client/router';

export default function Page(props) {

  useUserManagementHook();
  const [status, setStatus] = useState('login');
  const user = useSelector(state => state.UserReducer);
  const router = useRouter();

  useEffect(() => {
    if(user.data && user.data.title.toLowerCase() == 'teacher' || user.data && user.data.title.toLowerCase() == 'student')
      router.push("/");
    if(user.data && user.data.title.toLowerCase() == 'school-admin')
      router.push("/school");
  },[user])

  return (
    <>
    {
      !user.isLogin && <Start codeSent={router.query.sent} code={router.query.code} page={props.page} status={status} changeStatus={setStatus}/>
    }
    {
      user.isLogin && <MainLayout>
        <h1>Dashboard is in development!</h1>
      </MainLayout>
    }
    </>
  )
}

export async function getStaticPaths(){
    return {
        paths:[
            {params: {page: 'login'}},
            {params: {page: 'registration'}}, 
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