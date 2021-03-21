import { useState } from "react";
import Start from "../../components/Start";
import { useSelector } from "react-redux";

import SchoolAdminLayout from "../../layouts/SchoolAdminLayout";
import { useUserManagementHook } from "../../hooks/userManagementHook";
import RoomTable from "../../components/RoomTable";
import RoomAddModal from '../../components/RoomAddModal';
import RoomEditModal from "../../components/RoomEditModal";

export default function Index() {
  const [status, setStatus] = useState("admin-login");
  const [isAddModalOpen, showAddModal] = useState(false);
  const [isEditModalOpen, showEditModal] = useState(false);
  const [room, setGradeLevel] = useState(null);

  const user = useSelector((state) => state.UserReducer);

  useUserManagementHook();

  function editData (room){
    setGradeLevel(room);
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
            <RoomTable editData={editData} isAddModalOpen = {isAddModalOpen} isEditModalOpen = {isEditModalOpen}/>
            {isAddModalOpen && <RoomAddModal schoolid={user.data.school} showAddModal={showAddModal}/>}
            {isEditModalOpen && <RoomEditModal room={room} showEditModal={showEditModal}/>}
          </div>
        </SchoolAdminLayout>
      )}
    </>
  );
}
