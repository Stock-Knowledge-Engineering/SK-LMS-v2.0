import Link from 'next/link'
import { useEffect, useState } from 'react';

import {useSelector} from 'react-redux'
import MainLayout from '../../layouts/MainLayout';

import Start from '../../components/Start';

import {useUserManagementHook} from '../../hooks/userManagementHook';
import { useRouter } from 'next/dist/client/router';

export default function Code(props) {

  useUserManagementHook();
  const [status, setStatus] = useState('school-registration');
  const user = useSelector(state => state.UserReducer);
  const router = useRouter();

  return (
    <>
    {
      !user.isLogin && <Start code={router.query.code} page="/admin/registration" status={status} changeStatus={setStatus}/>
    }
    {
      user.isLogin && <MainLayout>
        <h1>Dashboard is in development!</h1>
      </MainLayout>
    }
    </>
  )
}