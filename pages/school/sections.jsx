import { useState } from "react";
import Start from "../../components/Start";
import { useSelector } from "react-redux";

import SchoolAdminLayout from "../../layouts/SchoolAdminLayout";
import { useUserManagementHook } from "../../hooks/userManagementHook";
import SectionTable from '../../components/SectionTable';
import SectionEditModal from "../../components/SectionEditModal";
import SectionAddModal from "../../components/SectionAddModal";

export default function Index() {
  const [status, setStatus] = useState("admin-login");
  const [isAddModalOpen, showAddModal] = useState(false);
  const [isEditModalOpen, showEditModal] = useState(false);
  const [section, setSection] = useState(null);

  const user = useSelector((state) => state.UserReducer);

  useUserManagementHook();

  function editData (section){
    setSection(section);
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
            <SectionTable editData={editData} isAddModalOpen = {isAddModalOpen} isEditModalOpen = {isEditModalOpen} />
            {isAddModalOpen && <SectionAddModal schoolid={user.data.school} showAddModal={showAddModal}/>}
            {isEditModalOpen && <SectionEditModal section={section} school={user.data.school} showEditModal={showEditModal}/>}
          </div>
        </SchoolAdminLayout>
      )}
    </>
  );
}
