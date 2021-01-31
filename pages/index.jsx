import Link from 'next/link'

import {useSelector} from 'react-redux'
import MainLayout from '../layouts/MainLayout';

import Start from './Start'

export default function Home() {
  const user = useSelector(state => state.UserReducer);

  console.log(user.isLogin)
  return (
    <>
    {
      !user.isLogin && <Start />
    }
    {
    user.isLogin && 
      <MainLayout>
        <p>test</p>
      </MainLayout>
    }
    </>
  )
}
