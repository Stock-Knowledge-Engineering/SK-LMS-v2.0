import Link from "next/link";
import { useEffect, useState } from "react";
import Start from "../../components/Start";
import { useSelector } from "react-redux";

import SchoolAdminLayout from "../../layouts/SchoolAdminLayout";
import { useUserManagementHook } from "../../hooks/userManagementHook";
import ClassScheduleAddModal from "../../components/ClassScheduleAddModal";
import ClassScheduleTable from "../../components/ClassScheduleTable";
import ClassScheduleEditModal from "../../components/ClassScheduleEditModal";

export default function Index() {
  const [status, setStatus] = useState("admin-login");
  const [isAddModalOpen, showAddModal] = useState(false);
  const [isEditModalOpen, showEditModal] = useState(false);
  const [classSchedule, setClassSchedule] = useState(null);

  const user = useSelector((state) => state.UserReducer);

  useUserManagementHook();

  function editData (classSchedule){
    setClassSchedule(classSchedule);
      showEditModal(true);
  }

  return (
    <>
      {!user.isLogin ? (
        <Start status={status} changeStatus={setStatus} />
      ) : (
        <SchoolAdminLayout>
          <br />
          <div className="flex flex-col relative ">
            <div className="text-right">
              <button className="relative m-auto h-10 w-10 bg-green-300 rounded-full text-white text-3xl" onClick={ e => showAddModal(true)}>
                <p className="absolute bottom-1 text-center w-full">
                &#43;
                </p>
              </button>
            </div>
            <ClassScheduleTable editData={editData} isAddModalOpen = {isAddModalOpen} isEditModalOpen = {isEditModalOpen} />
            {isAddModalOpen && <ClassScheduleAddModal schoolid={user.data.school} showAddModal={showAddModal}/>}
            {isEditModalOpen && <ClassScheduleEditModal schoolid={user.data.school} classSchedule={classSchedule} showEditModal={showEditModal}/>}
          </div>
        </SchoolAdminLayout>
      )}
    </>
  );
}
