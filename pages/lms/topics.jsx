import Link from 'next/link'
import { useEffect, useState } from 'react';

import {useSelector} from 'react-redux'
import MainLayout from '../../layouts/MainLayout';

import Start from '../../components/Start';

import {useUserManagementHook} from '../../hooks/userManagementHook';
import { useRouter } from 'next/dist/client/router';
import EnrolledStudentTable from '../../components/EnrolledStudentTable';
import TopicsTable from '../../components/TopicsTable';
import TopicsAddModal from '../../components/TopicsAddModal';
import TopicsEditModal from '../../components/TopicsEditModal';

export default function Home() {
  useUserManagementHook();

  const [status, setStatus] = useState('login');
  const [isAddModalOpen, showAddModal] = useState(false);
  const [isEditModalOpen, showEditModal] = useState(false);
  const [topic, setTopic] = useState(null);

  const user = useSelector(state => state.UserReducer);
  const router = useRouter();

  function editData (topic){
    setTopic(topic);
      showEditModal(true);
  }

  return (
    <>
    {
      !user.isLogin && <Start status={status} changeStatus={setStatus}/>
    }
    {
      user.isLogin && user.data.title.toLowerCase() == 'teacher' && 
      <MainLayout>
        <br />
          <div className="flex flex-col relative ">
            <div className="text-right">
              <button className="relative m-auto h-10 w-10 bg-green-300 rounded-full text-white text-3xl" onClick={ e => showAddModal(true)}>
                <p className="absolute bottom-1 text-center w-full">
                &#43;
                </p>
              </button>
            </div>
            <TopicsTable editData={editData} isAddModalOpen = {isAddModalOpen} isEditModalOpen = {isEditModalOpen} />
            {isAddModalOpen && <TopicsAddModal userid={user.data.userid} schoolid={user.data.school} showAddModal={showAddModal}/>}
            {isEditModalOpen && <TopicsEditModal userid={user.data.userid} schoolid={user.data.school} topic={topic} showEditModal={showEditModal}/>}
          </div>
      </MainLayout>
    }
    {
      user.isLogin && user.data.title.toLowerCase() == 'school-admin' && 
      <MainLayout>
         <br />
          <div onClick={e => router.push('https://stockknowledge.org/app/?mode=1&topic=37')} className="w-full h-40 border rounded-md shadow-lg relative cursor-pointer" style={{background:"url('images/bg001.png')"}}>
            <div className="absolute bottom-0 left-0 w-full h-1/2 ml-6 text-white">
              <h1 className="text-3xl font-bold">Structure of Flower</h1>
              <h4 className="text-xl">Biology</h4>
            </div>
          </div>
          <br />
          <div onClick={e => router.push('https://stockknowledge.org/app/?mode=1&topic=42')} className="w-full h-40 border rounded-md shadow-lg relative cursor-pointer" style={{background:"url('images/bg001.png')"}}>
            <div className="absolute bottom-0 left-0 w-full h-1/2 ml-6 text-white">
              <h1 className="text-3xl font-bold">Integumentary System</h1>
              <h4 className="text-xl">Biology</h4>
            </div>
          </div>
          <br />
          <div onClick={e => router.push('https://stockknowledge.org/app/?mode=1&topic=41')} className="w-full h-40 border rounded-md shadow-lg relative cursor-pointer" style={{background:"url('images/bg001.png')"}}>
            <div className="absolute bottom-0 left-0 w-full h-1/2 ml-6 text-white">
              <h1 className="text-3xl font-bold">Cathode Ray Tube</h1>
              <h4 className="text-xl">Chemistry</h4>
            </div>
          </div>
          <br />
          <div onClick={e => router.push('https://stockknowledge.org/app/?mode=1&topic=40')} className="w-full h-40 border rounded-md shadow-lg relative cursor-pointer" style={{background:"url('images/bg001.png')"}}>
            <div className="absolute bottom-0 left-0 w-full h-1/2 ml-6 text-white">
              <h1 className="text-3xl font-bold">Anatomical Planes</h1>
              <h4 className="text-xl">Biology</h4>
            </div>
          </div>
          <br />
          <div onClick={e => router.push('https://stockknowledge.org/app/?mode=1&topic=39')} className="w-full h-40 border rounded-md shadow-lg relative cursor-pointer" style={{background:"url('images/bg001.png')"}}>
            <div className="absolute bottom-0 left-0 w-full h-1/2 ml-6 text-white">
              <h1 className="text-3xl font-bold">Renal System</h1>
              <h4 className="text-xl">Biology</h4>
            </div>
          </div>
          <br />
          <div onClick={e => router.push('https://stockknowledge.org/app/?mode=1&topic=36')} className="w-full h-40 border rounded-md shadow-lg relative cursor-pointer" style={{background:"url('images/bg001.png')"}}>
            <div className="absolute bottom-0 left-0 w-full h-1/2 ml-6 text-white">
              <h1 className="text-3xl font-bold">DNA</h1>
              <h4 className="text-xl">Biology</h4>
            </div>
          </div>
          <br />
          <div onClick={e => router.push('https://stockknowledge.org/app/?mode=1&topic=35')} className="w-full h-40 border rounded-md shadow-lg relative cursor-pointer" style={{background:"url('images/bg001.png')"}}>
            <div className="absolute bottom-0 left-0 w-full h-1/2 ml-6 text-white">
              <h1 className="text-3xl font-bold">Parts of a Microscope</h1>
              <h4 className="text-xl">Chemistry</h4>
            </div>
          </div>
          <br />
          <div onClick={e => router.push('https://stockknowledge.org/app/?mode=1&topic=34')} className="w-full h-40 border rounded-md shadow-lg relative cursor-pointer" style={{background:"url('images/bg001.png')"}}>
            <div className="absolute bottom-0 left-0 w-full h-1/2 ml-6 text-white">
              <h1 className="text-3xl font-bold">Milikan's Experiment</h1>
              <h4 className="text-xl">Chemistry</h4>
            </div>
          </div>
          <br />
          <div onClick={e => router.push('https://stockknowledge.org/app/?mode=1&topic=32')} className="w-full h-40 border rounded-md shadow-lg relative cursor-pointer" style={{background:"url('images/bg001.png')"}}>
            <div className="absolute bottom-0 left-0 w-full h-1/2 ml-6 text-white">
              <h1 className="text-3xl font-bold">Different types of Igneous Rocks</h1>
              <h4 className="text-xl">Earth Sciences</h4>
            </div>
          </div>
          <br />
          <div onClick={e => router.push('https://stockknowledge.org/app/?mode=1&topic=31')} className="w-full h-40 border rounded-md shadow-lg relative cursor-pointer" style={{background:"url('images/bg001.png')"}}>
            <div className="absolute bottom-0 left-0 w-full h-1/2 ml-6 text-white">
              <h1 className="text-3xl font-bold">Dart (Accuracy & Precision)</h1>
              <h4 className="text-xl">Physics</h4>
            </div>
          </div>
          <br />
          <div onClick={e => router.push('https://stockknowledge.org/app/?mode=1&topic=30')} className="w-full h-40 border rounded-md shadow-lg relative cursor-pointer" style={{background:"url('images/bg001.png')"}}>
            <div className="absolute bottom-0 left-0 w-full h-1/2 ml-6 text-white">
              <h1 className="text-3xl font-bold">Board</h1>
              <h4 className="text-xl">Physics</h4>
            </div>
          </div>
          <br />
          <div onClick={e => router.push('https://stockknowledge.org/app/?mode=1&topic=29')} className="w-full h-40 border rounded-md shadow-lg relative cursor-pointer" style={{background:"url('images/bg001.png')"}}>
            <div className="absolute bottom-0 left-0 w-full h-1/2 ml-6 text-white">
              <h1 className="text-3xl font-bold">Downhill Car</h1>
              <h4 className="text-xl">Physics</h4>
            </div>
          </div>
          <br />
          <div onClick={e => router.push('https://stockknowledge.org/app/?mode=1&topic=28')} className="w-full h-40 border rounded-md shadow-lg relative cursor-pointer" style={{background:"url('images/bg001.png')"}}>
            <div className="absolute bottom-0 left-0 w-full h-1/2 ml-6 text-white">
              <h1 className="text-3xl font-bold">Laboratory</h1>
              <h4 className="text-xl">Chemistry</h4>
            </div>
          </div>
          <br />
          <div onClick={e => router.push('https://stockknowledge.org/app/?mode=1&topic=27')} className="w-full h-40 border rounded-md shadow-lg relative cursor-pointer" style={{background:"url('images/bg001.png')"}}>
            <div className="absolute bottom-0 left-0 w-full h-1/2 ml-6 text-white">
              <h1 className="text-3xl font-bold">Conic Sections</h1>
              <h4 className="text-xl">Physics</h4>
            </div>
          </div>
          <br />
          <div onClick={e => router.push('https://stockknowledge.org/app/?mode=1&topic=26')} className="w-full h-40 border rounded-md shadow-lg relative cursor-pointer" style={{background:"url('images/bg001.png')"}}>
            <div className="absolute bottom-0 left-0 w-full h-1/2 ml-6 text-white">
              <h1 className="text-3xl font-bold">Forest</h1>
              <h4 className="text-xl">Earth Science</h4>
            </div>
          </div>
          <br />
          <div onClick={e => router.push('https://stockknowledge.org/app/?mode=1&topic=25')} className="w-full h-40 border rounded-md shadow-lg relative cursor-pointer" style={{background:"url('images/bg001.png')"}}>
            <div className="absolute bottom-0 left-0 w-full h-1/2 ml-6 text-white">
              <h1 className="text-3xl font-bold">Beach</h1>
              <h4 className="text-xl">Earth Science</h4>
            </div>
          </div>
          <br />
          <div onClick={e => router.push('https://stockknowledge.org/app/?mode=1&topic=24')} className="w-full h-40 border rounded-md shadow-lg relative cursor-pointer" style={{background:"url('images/bg001.png')"}}>
            <div className="absolute bottom-0 left-0 w-full h-1/2 ml-6 text-white">
              <h1 className="text-3xl font-bold">Soccer Field</h1>
              <h4 className="text-xl">Physics</h4>
            </div>
          </div>
          <br />
          <div onClick={e => router.push('https://stockknowledge.org/app/?mode=1&topic=23')} className="w-full h-40 border rounded-md shadow-lg relative cursor-pointer" style={{background:"url('images/bg001.png')"}}>
            <div className="absolute bottom-0 left-0 w-full h-1/2 ml-6 text-white">
              <h1 className="text-3xl font-bold">Volcano</h1>
              <h4 className="text-xl">Earth Science</h4>
            </div>
          </div>
          <br />
          <div onClick={e => router.push('https://stockknowledge.org/app/?mode=1&topic=22')} className="w-full h-40 border rounded-md shadow-lg relative cursor-pointer" style={{background:"url('images/bg001.png')"}}>
            <div className="absolute bottom-0 left-0 w-full h-1/2 ml-6 text-white">
              <h1 className="text-3xl font-bold">Layers of the Atmosphere</h1>
              <h4 className="text-xl">Earth Science</h4>
            </div>
          </div>
          <br />
          <div onClick={e => router.push('https://stockknowledge.org/app/?mode=1&topic=21')} className="w-full h-40 border rounded-md shadow-lg relative cursor-pointer" style={{background:"url('images/bg001.png')"}}>
            <div className="absolute bottom-0 left-0 w-full h-1/2 ml-6 text-white">
              <h1 className="text-3xl font-bold">Different Layers of the Earth</h1>
              <h4 className="text-xl">Earth Science</h4>
            </div>
          </div>
          <br />
          <div onClick={e => router.push('https://stockknowledge.org/app/?mode=1&topic=20')} className="w-full h-40 border rounded-md shadow-lg relative cursor-pointer" style={{background:"url('images/bg001.png')"}}>
            <div className="absolute bottom-0 left-0 w-full h-1/2 ml-6 text-white">
              <h1 className="text-3xl font-bold">Skeleton Muscular Anatomy</h1>
              <h4 className="text-xl">Biology</h4>
            </div>
          </div>
          <br />
          <div onClick={e => router.push('https://stockknowledge.org/app/?mode=1&topic=19')} className="w-full h-40 border rounded-md shadow-lg relative cursor-pointer" style={{background:"url('images/bg001.png')"}}>
            <div className="absolute bottom-0 left-0 w-full h-1/2 ml-6 text-white">
              <h1 className="text-3xl font-bold">Skeletal Anatomy</h1>
              <h4 className="text-xl">Biology</h4>
            </div>
          </div>
          <br />
          <div onClick={e => router.push('https://stockknowledge.org/app/?mode=1&topic=18')} className="w-full h-40 border rounded-md shadow-lg relative cursor-pointer" style={{background:"url('images/bg001.png')"}}>
            <div className="absolute bottom-0 left-0 w-full h-1/2 ml-6 text-white">
              <h1 className="text-3xl font-bold">Muscular Anatomy</h1>
              <h4 className="text-xl">Biology</h4>
            </div>
          </div>
          <br />
          <div onClick={e => router.push('https://stockknowledge.org/app/?mode=1&topic=17')} className="w-full h-40 border rounded-md shadow-lg relative cursor-pointer" style={{background:"url('images/bg001.png')"}}>
            <div className="absolute bottom-0 left-0 w-full h-1/2 ml-6 text-white">
              <h1 className="text-3xl font-bold">Animal Cell</h1>
              <h4 className="text-xl">Biology</h4>
            </div>
          </div>
          <br />
          <div onClick={e => router.push('https://stockknowledge.org/app/?mode=1&topic=16')} className="w-full h-40 border rounded-md shadow-lg relative cursor-pointer" style={{background:"url('images/bg001.png')"}}>
            <div className="absolute bottom-0 left-0 w-full h-1/2 ml-6 text-white">
              <h1 className="text-3xl font-bold">Plant Cell</h1>
              <h4 className="text-xl">Biology</h4>
            </div>
          </div>
      </MainLayout>
    }
    </>
  )
}
