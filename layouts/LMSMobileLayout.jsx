import { faBookmark, faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import {
  faAngleDown,
  faBars,
  faBell,
  faChartPie,
  faCheckDouble,
  faCog,
  faHome,
  faPlay,
  faQuestionCircle,
  faSearch,
  faSignOutAlt,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/dist/client/router";
import CalendarLayout from "../components/Calendar/CalendarLayout";
import MobileMenu from "../components/LMS/Menu/MobileMenu";

const LMSMobileLayout = (props) => {
  const router = useRouter();

  const menuIcon = (
    <FontAwesomeIcon
      icon={faBars}
      size="lg"
      className={`text-skBlue cursor-pointer`}
      onClick={() => {
        router.query.menu
          ? router.push("/lms", undefined, { shallow: true })
          : router.push("?menu=true", undefined, { shallow: true });
      }}
    />
  );

  const searchIcon = (
    <FontAwesomeIcon
      icon={faSearch}
      size="lg"
      className={`text-skBlue cursor-pointer`}
    />
  );

  const questionMarkIcon = (
    <FontAwesomeIcon
      icon={faQuestionCircle}
      size="lg"
      className={`text-skBlue cursor-pointer`}
    />
  );

  const gearIcon = (
    <FontAwesomeIcon
      icon={faCog}
      size="lg"
      className={`text-skBlue cursor-pointer`}
    />
  );

  const bellIcon = (
    <FontAwesomeIcon
      icon={faBell}
      size="lg"
      className={`text-skBlue cursor-pointer`}
    />
  );

  const pieChartIcon = (
    <FontAwesomeIcon
      icon={faChartPie}
      size="2x"
      className={`text-skBlue cursor-pointer hover:text-subheading m-auto`}
    />
  );

  const availableCoursesIcon = (
    <FontAwesomeIcon
      icon={faBookmark}
      size="2x"
      className={`text-skBlue cursor-pointer hover:text-subheading m-auto`}
    />
  );

  const completedCoursesIcon = (
    <FontAwesomeIcon
      icon={faCheckDouble}
      size="2x"
      className={`text-skBlue cursor-pointer hover:text-subheading m-auto`}
    />
  );

  const modulePlayIcon = (
    <FontAwesomeIcon
      icon={faPlay}
      size="2x"
      className={`bg-blue-400 text-white p-2 rounded-lg cursor-pointer hover:text-subheading`}
    />
  );

  return (
    <>
      <div className="w-full h-auto box-border flex flex-col sticky border bg-blue-50">
        <div className="w-full p-4 mb-1 box-border flex flex-row items-center justify-between bg-white">
          {menuIcon}
          <div className="flex space-x-2">
            <img className="w-8" src="images/logo.png" />
            <h1 className="text-subheading">
              Stock <span className="text-skBlue font-semibold">Knowledge</span>
            </h1>
          </div>
          {searchIcon}
        </div>
        <div className="w-full p-4 flex flex-row items-center justify-between bg-white">
          <div className="box-border w-auto flex flex-row space-x-2">
            <img
              className="h-12 rounded-full border"
              src="/images/avatar.png"
            />
            <div className="box-border flex flex-col">
              <p className="text-heading font-semibold truncate">
                Firstname Lastname
              </p>
              <p className="text-subheading">ID: 000000</p>
            </div>
          </div>
          <div className="w-auto box-border flex flex-row space-x-4">
            {questionMarkIcon}
            {gearIcon}
            {bellIcon}
          </div>
        </div>
      </div>
      {router.query.menu && <MobileMenu />}
      <div className="box-border h-screen w-full bg-blue-50 flex flex-col py-2 space-y-2">
        <div className="w-full h-auto box-border relative px-4">
          <img
            className="w-full h-full"
            src="/images/dashboard-content-1.svg"
          />
          <p className="absolute top-2 left-8 text-skBlue font-bold">
            Hi Firstname,
          </p>
        </div>
        <div className="w-full h-auto flex flex-col justify-around relative px-4 space-y-2">
          <div className="h-full w-full p-2 flex bg-white border rounded-2xl">
            <div className="w-1/6 h-full flex items-center">{pieChartIcon}</div>
            <div className="flex flex-col justify-center h-full w-3/4">
              <p className="text-skBlue font-bold text-xl">20</p>
              <p className="font-semibold text-subheading">Ongoing Courses</p>
            </div>
          </div>
          <div className="h-full w-full p-2 flex bg-white border rounded-2xl">
            <div className="w-1/6 h-full flex items-center">
              {availableCoursesIcon}
            </div>
            <div className="flex flex-col justify-center h-full w-3/4">
              <p className="text-skBlue font-bold text-xl">6</p>
              <p className="font-semibold text-subheading">Available Courses</p>
            </div>
          </div>
          <div className="h-full w-full p-2 flex bg-white border rounded-2xl">
            <div className="w-1/6 h-full flex items-center">
              {completedCoursesIcon}
            </div>
            <div className="flex flex-col justify-center h-full w-3/4">
              <p className="text-skBlue font-bold text-xl">1</p>
              <p className="font-semibold text-subheading">Completed Courses</p>
            </div>
          </div>
        </div>
        <div className="box-border h-auto w-full flex flex-col py-2 px-4 rounded-2xl">
          <CalendarLayout />
        </div>
        <div className="box-border h-auto w-full flex flex-col bg-blue-50 py-2 px-4 rounded-2xl space-y-2">
          <h1 className="text-heading text-lg font-semibold ">Module Activity</h1>
          <div className="w-full bg-skBlue rounded-2xl text-white box-border flex flex-col items-end justify-between p-4 space-y-2">
            <div className="box-border w-full flex justify-between">
              <div className="relative border-b-2 border-white w-10">
                <h5 className="absolute font-semibold text-xl">Module</h5>
              </div>
              <h4 className="text-4xl text-white font-bold">01</h4>
            </div>
            <div className="h-2 w-full bg-skBlueInactive rounded-full">
              <div
                style={{ width: "44%" }}
                className="h-full bg-white rounded-full"
              ></div>
            </div>
            <div className="box-border w-full h-auto flex flex-row items-center justify-between">
              {modulePlayIcon}
              <div className="box-border flex flex-row items-center justify-between">
                <h5 className="font-bold">44% <span className="font-normal">Completed</span></h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LMSMobileLayout;
