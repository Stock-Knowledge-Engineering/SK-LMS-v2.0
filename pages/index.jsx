import Link from 'next/link'

import {useSelector} from 'react-redux'
import MainLayout from '../layouts/MainLayout';
import Login from './login';

export default function Home() {
  const user = useSelector(state => state.UserReducer);

  console.log(user.isLogin)
  return (
    <>
    {
      !user.isLogin && <Login />
    }
    {user.isLogin && <MainLayout>
        <p>test</p>
      </MainLayout>}
    </>
  )
}
