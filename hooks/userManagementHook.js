import { useState, useEffect } from "react";
// import socketIOClient from "socket.io-client";
import { useSelector, useDispatch } from "react-redux";

import { DoLogin } from "../redux/actions/UserAction";

const ENDPOINT = "http://localhost:3001";
// const socket = socketIOClient(ENDPOINT);

export const useUserManagementHook = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.UserReducer);

  const [deviceData, setDeviceData] = useState(null);

  useEffect(() => {
    // if (!localStorage.getItem("isLogin"))
    //   localStorage.setItem("isLogin", false);

    if (
      localStorage.getItem("user") &&
      localStorage.getItem("isLogin") == "true"
    ) {
      dispatch(
        DoLogin(
          true,
          JSON.parse(localStorage.getItem("user")),
          JSON.parse(localStorage.getItem("remember"))
        )
      );
    }
    if (!localStorage.getItem("guestId"))
      setDeviceData({
        os: window.navigator.oscpu,
        browser: window.navigator.userAgent,
      });
  }, []);

  // useEffect(() => {
  //   if (deviceData) socket.emit("visit", deviceData);
  // }, [deviceData]);

  useEffect(() => {
    if (user.isLogin) {
      // console.log('creating local data');
      localStorage.setItem("isLogin", true);
      localStorage.setItem("user", JSON.stringify(user.data));
      localStorage.setItem("remember", false);
    }

  }, [user]);

  // useEffect(() => {
  //   socket.on("visitor", (data) => {
  //     if (!localStorage.getItem("guestId"))
  //       localStorage.setItem("guestId", JSON.stringify(data));
  //   });
  // });
};
