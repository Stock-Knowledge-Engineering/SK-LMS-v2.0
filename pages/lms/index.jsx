import Link from 'next/link'
import { useEffect, useState } from 'react';

import {useSelector} from 'react-redux'
import MainLayout from '../../layouts/MainLayout';

import Start from '../../components/Start';

import {useUserManagementHook} from '../../hooks/userManagementHook';
import { useRouter } from 'next/dist/client/router';

export default function Index(props) {

  useUserManagementHook();
  const [status, setStatus] = useState('login');
  const user = useSelector(state => state.UserReducer);
  const router = useRouter();

  useEffect(() => {
    if(user.data && user.data.title.toLowerCase() == 'teacher' || user.data && user.data.title.toLowerCase() == 'student')
      router.push("/lms");
    if(user.data && user.data.title.toLowerCase() == 'school-admin')
      router.push("/school");
  },[user])

  return (
    <>
    {
      !user.isLogin && <Start code={router.query.code} page="login" status={status} changeStatus={setStatus}/>
    }
    {
      user.data && !user.data.verified && <Start userid={user.data.userid} page={`verify-account`} />
    }
    {
      user.isLogin && user.data.verified && <MainLayout>
        <h1>Dashboard is in development!</h1>
      </MainLayout>
    }
    </>
  )
}