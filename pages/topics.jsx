import Link from 'next/link'
import { useEffect, useState } from 'react';

import {useSelector} from 'react-redux'
import MainLayout from '../layouts/MainLayout';

import Start from '../components/Start';

import {useUserManagementHook} from '../hooks/userManagementHook';
import { useRouter } from 'next/dist/client/router';
import EnrolledStudentTable from '../components/EnrolledStudentTable';
import TopicsTable from '../components/TopicsTable';
import TopicsAddModal from '../components/TopicsAddmodal';
import TopicsEditModal from '../components/TopicsEditModal';

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
    </>
  )
}
