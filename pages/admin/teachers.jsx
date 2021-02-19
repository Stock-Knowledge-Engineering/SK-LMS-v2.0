import Link from "next/link";
import { useEffect, useState } from "react";
import Start from "../../components/Start";
import { useSelector } from "react-redux";

import SchoolAdminLayout from "../../layouts/SchoolAdminLayout";
import { useUserManagementHook } from "../../hooks/userManagementHook";
import SubjectAddModal from "../../components/SubjectAddModal";
import SubjectEditModal from "../../components/SubjectEditModal";
import TeacherTable from '../../components/TeacherTable';
import TeacherEditModal from "../../components/TeachersEditModal";
import TeacherAddModal from "../../components/TeacherAddModal";

export default function Index() {
  const [status, setStatus] = useState("admin-login");
  const [isAddModalOpen, showAddModal] = useState(false);
  const [isEditModalOpen, showEditModal] = useState(false);
  const [teacher, setTeacher] = useState(null);

  const user = useSelector((state) => state.UserReducer);

  useUserManagementHook();

  function editData (teacher){
    setTeacher(teacher);
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
            <TeacherTable editData={editData} isAddModalOpen = {isAddModalOpen} isEditModalOpen = {isEditModalOpen} />
            {isAddModalOpen && <TeacherAddModal schoolid={user.data.school} showAddModal={showAddModal}/>}
            {isEditModalOpen && <TeacherEditModal teacher={teacher} showEditModal={showEditModal}/>}
          </div>
        </SchoolAdminLayout>
      )}
    </>
  );
}
