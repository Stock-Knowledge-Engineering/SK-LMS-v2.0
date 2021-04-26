import Link from "next/link";
import { useContext, useEffect, useState } from "react";

import { useSelector } from "react-redux";
import MainLayout from "../../layouts/MainLayout";

import Start from "../../components/Start";

import { useUserManagementHook } from "../../hooks/userManagementHook";
import { useRouter } from "next/dist/client/router";
import { socket, SocketContext } from "../../context/socket";
import ModalLayout from "../../components/HomePage/ModalLayout";

export default function Index(props) {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [onlineUserCount, setOnlineUserCount] = useState(0);
  const [registeredUserCount, setRegisteredUserCount] = useState(0);
  const user = useSelector((state) => state.UserReducer);
  const router = useRouter();

  useEffect(() => {
    let data = {
      id: 1,
      username: "admin",
      type: "1",
    };
    data ? socket.emit("CONNECT", data) : null;
  }, []);

  useEffect(() => {
    socket.emit("ONLINE_USER_COUNT");

    socket.on("ONLINE_USER_COUNT", (data) => {
      setOnlineUserCount(data);
    });

    socket.emit("REGISTERED_USER_COUNT");

    socket.on("REGISTERED_USER_COUNT", (data) => {
      setRegisteredUserCount(data);
    });
  });

  return (
    <>
      {user.isLogin && user.data.title == "Administrator" ? (
        <SocketContext.Provider value={socket}>
          <div className="box-border flex flex-col w-full">
            <div className="m-auto box-border h-auto lg:w-1/2 md:w-1/2 sm:w-full xs:w-full flex flex-col py-2 px-4 rounded-2xl space-y-2">
              <div className="w-full bg-skBlue rounded-2xl text-white box-border flex flex-col items-end justify-between p-4 space-y-2">
                <div className="box-border w-full flex justify-between">
                  <div className="border-b-2 border-white w-auto">
                    <h5 className="font-semibold text-xl">Online user:</h5>
                  </div>
                  <h4 className="text-4xl text-white font-bold">
                    {onlineUserCount}
                  </h4>
                </div>
              </div>
            </div>
            <div className="m-auto box-border h-auto lg:w-1/2 md:w-1/2 sm:w-full xs:w-full flex flex-col py-2 px-4 rounded-2xl space-y-2">
              <div className="w-full bg-skBlue rounded-2xl text-white box-border flex flex-col items-end justify-between p-4 space-y-2">
                <div className="box-border w-full flex justify-between">
                  <div className="border-b-2 border-white w-auto">
                    <h5 className="font-semibold text-xl">Registered User:</h5>
                  </div>
                  <h4 className="text-4xl text-white font-bold">
                    {registeredUserCount}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </SocketContext.Provider>
      ) : <ModalLayout showModal={setLoginModalOpen} />}
    </>
  );
}
