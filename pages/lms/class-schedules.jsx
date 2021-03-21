import { useEffect, useState } from 'react';

import {useSelector} from 'react-redux';
import MainLayout from '../../layouts/MainLayout';

import Start from '../../components/Start';

import {useUserManagementHook} from '../../hooks/userManagementHook';
import { useRouter } from 'next/dist/client/router';
import ClassScheduleTable from '../../components/ClassScheduleTable';
import StudentClassSchedule from '../../components/StudentClassSchedule';

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
      user.isLogin && user.data.title.toLowerCase() != 'school-admin' && 
      <MainLayout>
        <br />
          <div className="flex flex-col relative ">
            {
              user.data.title.toLowerCase() == 'school-admin' &&
              <div className="text-right">
                <button className="relative m-auto h-10 w-10 bg-green-300 rounded-full text-white text-3xl" onClick={ e => showAddModal(true)}>
                  <p className="absolute bottom-1 text-center w-full">
                    &#43;
                  </p>
                </button>
              </div>
            }

            {
              user.data.title.toLowerCase() == 'teacher' && <ClassScheduleTable editData={editData} isAddModalOpen = {isAddModalOpen} isEditModalOpen = {isEditModalOpen} />
            }
            {
              user.data.title.toLowerCase() == 'student' && <StudentClassSchedule editData={editData} isAddModalOpen = {isAddModalOpen} isEditModalOpen = {isEditModalOpen} />
            }
          </div>
      </MainLayout>
    }
    </>
  )
}
