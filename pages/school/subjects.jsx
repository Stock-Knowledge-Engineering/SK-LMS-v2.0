import { useState } from "react";
import Start from "../../components/Start";
import { useSelector } from "react-redux";

import SchoolAdminLayout from "../../layouts/SchoolAdminLayout";
import { useUserManagementHook } from "../../hooks/userManagementHook";
import SubjectAddModal from "../../components/SubjectAddModal";
import SubjectEditModal from "../../components/SubjectEditModal";
import SubjectTable from "../../components/SubjectTable";

export default function Index() {
  const [status, setStatus] = useState("admin-login");
  const [isAddModalOpen, showAddModal] = useState(false);
  const [isEditModalOpen, showEditModal] = useState(false);
  const [subject, setSubject] = useState(null);

  const user = useSelector((state) => state.UserReducer);

  useUserManagementHook();

  function editData (subject){
    setSubject(subject);
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
              <button className="m-auto h-12 w-12 bg-green-300 rounded-full text-center text-white text-3xl" onClick={ e => showAddModal(true)}>
                &#43;
              </button>
            </div>
            <SubjectTable editData={editData} isAddModalOpen = {isAddModalOpen} isEditModalOpen = {isEditModalOpen}/>
            {isAddModalOpen && <SubjectAddModal showAddModal={showAddModal}/>}
            {isEditModalOpen && <SubjectEditModal subject={subject} showEditModal={showEditModal}/>}
          </div>
        </SchoolAdminLayout>
      )}
    </>
  );
}
