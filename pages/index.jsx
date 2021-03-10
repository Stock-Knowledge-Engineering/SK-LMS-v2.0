import Link from 'next/link'
import { useEffect, useState } from 'react';

import {useSelector} from 'react-redux'
import MainLayout from '../layouts/MainLayout';

import Start from '../components/Start';

import {useUserManagementHook} from '../hooks/userManagementHook';
import { useRouter } from 'next/dist/client/router';
import NavBar from '../components/NavBar';

export default function Home(props) {
  useUserManagementHook();

  const [status, setStatus] = useState('login');
  const user = useSelector(state => state.UserReducer);
  const router = useRouter();

  return (
    <>
      <div className="w-full h-96 border hero text-center flex flex-row justify-center items-center relative">
        <div className="text-white">
          <div className="flex justify-center items-center ">
            <img src="images/logo.png" />
            <h1 className="text-6xl font-bold">Stock Knowledge</h1>
          </div>
          <p className="text-xl">Gamified Learning + Learning Management System</p>
          <br />
          <div className="flex">
            <button className="h-24 w-1/2 bg-blue-200 border">iOS</button>
            <button className="h-24 w-1/2 bg-blue-200 border">Android</button>
            <div></div>
          </div>
        </div>
      </div>
      <NavBar />
      <div className="w-full p-6 h-1/4 border flex items-center">
        <div className="w-1/2">
          <h1 className="text-left text-7xl font-bold text-gray-600">Extended Reality</h1>
          <br />
          <h4 className="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non ullamcorper dolor, sit amet convallis orci. Pellentesque luctus, felis eu tincidunt volutpat, enim elit mattis dui, at molestie metus libero sed arcu. Nam vehicula accumsan tempus. </h4>
          <br />
          <div className="text-left">
            <a href="#" className="w-full text-blue-500 text-xl font-bold">Learn More</a>
          </div>
          <div className="flex">
            <a href="#" className=""></a>
          </div>
        </div>
        <img className="w-1/2" src="images/hero.png" />
      </div>
      <div className="w-full p-6 h-1/4 border">
        <h1 className="text-center w-full text-7xl font-bold text-gray-600">Virtual Reality</h1>
        <br />
          <h4 className="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non ullamcorper dolor, sit amet convallis orci. Pellentesque luctus, felis eu tincidunt volutpat, enim elit mattis dui, at molestie metus libero sed arcu. Nam vehicula accumsan tempus. </h4>
        <br />
      </div>
      <div className="w-full p-6 h-1/4 border">
        <h1 className="text-center w-full text-7xl font-bold text-gray-600">Virtual Reality</h1>
        <br />
          <h4 className="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non ullamcorper dolor, sit amet convallis orci. Pellentesque luctus, felis eu tincidunt volutpat, enim elit mattis dui, at molestie metus libero sed arcu. Nam vehicula accumsan tempus. </h4>
        <br />
      </div>
      <div className="w-full p-6 h-1/4 border">
        <h1 className="text-center w-full text-7xl font-bold text-gray-600">Virtual Reality</h1>
        <br />
          <h4 className="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non ullamcorper dolor, sit amet convallis orci. Pellentesque luctus, felis eu tincidunt volutpat, enim elit mattis dui, at molestie metus libero sed arcu. Nam vehicula accumsan tempus. </h4>
        <br />
      </div>
    </>
  )
}
