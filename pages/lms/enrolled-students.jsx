import { useState } from 'react';

import {useSelector} from 'react-redux';
import MainLayout from '../../layouts/MainLayout';

import Start from '../../components/Start';

import {useUserManagementHook} from '../../hooks/userManagementHook';
import { useRouter } from 'next/dist/client/router';
import EnrolledStudentEditModal from '../../components/EnrolledStudentEditModal';
import EnrolledStudentAddModal from '../../components/EnrolledStudentAddModal';
import EnrolledStudentTable from '../../components/EnrolledStudentTable';

export default function Home() {
  useUserManagementHook();

  const [status, setStatus] = useState('login');
  const [isAddModalOpen, showAddModal] = useState(false);
  const [isEditModalOpen, showEditModal] = useState(false);
  const [studentSchedule, setStudentSchedule] = useState(null);

  const user = useSelector(state => state.UserReducer);
  const router = useRouter();

  function editData (studentSchedule){
    setStudentSchedule(studentSchedule);
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
            <EnrolledStudentTable editData={editData} isAddModalOpen = {isAddModalOpen} isEditModalOpen = {isEditModalOpen} />
            {isAddModalOpen && <EnrolledStudentAddModal teacherid={user.data.id} schoolid={user.data.school} showAddModal={showAddModal}/>}
            {isEditModalOpen && <EnrolledStudentEditModal teacherid={user.data.id} schoolid={user.data.school} studentSchedule={studentSchedule} showEditModal={showEditModal}/>}
          </div>
      </MainLayout>
    }
    </>
  )
}
