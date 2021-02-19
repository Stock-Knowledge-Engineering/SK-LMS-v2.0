import Link from 'next/link'
import { useEffect, useState } from 'react';

import {useSelector} from 'react-redux'
import MainLayout from '../layouts/MainLayout';

import Start from '../components/Start';

import {useUserManagementHook} from '../hooks/userManagementHook';
import { useRouter } from 'next/dist/client/router';

export default function Home() {
  useUserManagementHook();

  const [status, setStatus] = useState('login');
  const user = useSelector(state => state.UserReducer);
  const router = useRouter();

  useEffect(() => {
    if(user.isLogin && user.data.title.toLowerCase() == 'school-admin')
      router.push("/admin");
  },[user.isLogin])

  return (
    <>
    {
      !user.isLogin && <Start status={status} changeStatus={setStatus}/>
    }
    {
      user.isLogin && user.data.title.toLowerCase() != 'school-admin' && <MainLayout>
        <h1>Dashboard is in development!</h1>
      </MainLayout>
    }
    </>
  )
}
