import Link from 'next/link'
import { useEffect, useState } from 'react';

import {useSelector} from 'react-redux'
import MainLayout from '../layouts/MainLayout';

import Start from '../components/Start';

import {useUserManagementHook} from '../hooks/userManagementHook';
import { useRouter } from 'next/dist/client/router';

export default function Home(props) {
  useUserManagementHook();

  const [status, setStatus] = useState('login');
  const user = useSelector(state => state.UserReducer);
  const router = useRouter();

  useEffect(() => {
    if(!user.data)
      router.push("/login");

    if(user.isLogin){
      router.push("/")
    }
  },[user.isLogin])

  return (
    <>
    {
      !user.isLogin && <Start page={props.page} status={status} changeStatus={setStatus}/>
    }
    {
      user.isLogin && <MainLayout>
        <h1>Dashboard is in development!</h1>
      </MainLayout>
    }
    </>
  )
}
