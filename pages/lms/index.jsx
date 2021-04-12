import { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import MainLayout from "../../layouts/MainLayout";

import Start from "../../components/Start";

import { SocketContext, socket } from "../../context/socket";

import { useUserManagementHook } from "../../hooks/userManagementHook";
import { useRouter } from "next/dist/client/router";
import SignupFormWrapper from "../../components/HomePage/SignupFormWrapper";

export default function Index(props) {
  useUserManagementHook();
  const [status, setStatus] = useState("login");
  const [onlineUserCount, setOnlineUserCount] = useState(0);

  const user = useSelector((state) => state.UserReducer);
  const router = useRouter();
  useEffect(() => {
    if (
      (user.data && user.data.title.toLowerCase() == "teacher") ||
      (user.data && user.data.title.toLowerCase() == "student")
    )
      router.push("/lms");
    if (user.data && user.data.title.toLowerCase() == "school-admin")
      router.push("/school");

  }, [user]);

  useEffect(() => {
    if (user.isLogin && user.data) {
      let data = { id: user.data.id, username: user.data.username, type: user.data.usertype};
      data ? socket.emit("CONNECT", data) : null;
    }

    socket.emit("ONLINE_USER_COUNT");

    socket.on("ONLINE_USER_COUNT", (data) => {
      setOnlineUserCount(data);
    });
  });

   

  return (
    <SocketContext.Provider value={socket}>
      <>
        {!user.isLogin && (
          <SignupFormWrapper defaultForm="login" code={router.query.code}/>
        )}
        {user.data && !user.data.verified && (
          <SignupFormWrapper defaultForm="verification-code" code={router.query.code}/>
          )}
        {user.isLogin && user.data.verified && (
          <MainLayout>
            <h1>
              Current Online User: <b>{onlineUserCount}</b>
            </h1>
          </MainLayout>
        )}
      </>
    </SocketContext.Provider>
  );
}
