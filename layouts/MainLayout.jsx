import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faQuestionCircle,
  faCog,
  faBell,
  faAngleDown,
  faHome,
  faTrophy,
  faChartPie,
  faCheckDouble,
  faAngleLeft,
  faAngleRight,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import { faBookmark, faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import CalendarLayout from "../components/Calendar/CalendarLayout";
import Menu from "../components/LMS/Menu/Menu";

export default function MainLayout(props) {
  const searchIcon = (
    <FontAwesomeIcon
      icon={faSearch}
      size="lg"
      color="lightGray"
      className={`absolute left-4 top-3 bottom-0 cursor-pointer hover:text-subheading`}
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

  const angleDownIcon = (
    <FontAwesomeIcon
      icon={faAngleDown}
      size="lg"
      color="lightGray"
      className={`cursor-pointer hover:text-subheading`}
    />
  );

  const pieChartIcon = (
    <FontAwesomeIcon
      icon={faChartPie}
      size="2x"
      color="lightGray"
      className={`cursor-pointer hover:text-subheading m-auto`}
    />
  );

  const availableCoursesIcon = (
    <FontAwesomeIcon
      icon={faBookmark}
      size="2x"
      color="lightGray"
      className={`cursor-pointer hover:text-subheading m-auto`}
    />
  );

  const completedCoursesIcon = (
    <FontAwesomeIcon
      icon={faCheckDouble}
      size="2x"
      color="lightGray"
      className={`cursor-pointer hover:text-subheading m-auto`}
    />
  );

  const calendarBackIcon = (
    <FontAwesomeIcon
      icon={faAngleLeft}
      size="2x"
      color=""
      className={`text-skBlue cursor-pointer hover:text-subheading`}
    />
  );

  const calendarForwardIcon = (
    <FontAwesomeIcon
      icon={faAngleRight}
      size="2x"
      color=""
      className={`text-skBlue cursor-pointer hover:text-subheading`}
    />
  );

  const calendarMarkIcon = (
    <FontAwesomeIcon
      icon={faCircle}
      className={`w-2 h-2 text-skBlue absolute bottom-0`}
    />
  );

  return (
    <>
      <div className="relative">
        <div className="fixed flex items-center h-20 w-96 py-4 px-8 text-xl space-x-2">
          <img className="w-12" src="/images/logo.png" />
          <h1 className="text-heading">
            Stock &nbsp;
            <span className="font-bold text-skBlue">Knowledge</span>
          </h1>
        </div>
        <div className="fixed w-full top-0 right-0 left-0 h-20 flex items-center justify-center shadow">
          <div className="h-full w-1/4 py-5">
            <div className="flex w-full relative">
              {searchIcon}
              <input
                className="bg-gray-100 text-center border border-gray-100 w-full h-full rounded-full"
                type="text"
                name="search"
                placeholder="Search"
              />
            </div>
          </div>
        </div>
        <div className="fixed right-0 flex h-20 w-96 mr-4 items-center justify-end space-x-4">
          <div className="h-1/2 flex items-center space-x-2 border-r px-4 ">
            {questionMarkIcon}
            {gearIcon}
            {bellIcon}
          </div>
          <div className="flex items-center space-x-2">
            <img
              className="h-16 rounded-full border"
              src="/images/avatar.png"
            />
            <div className="flex flex-col">
              <p className="text-heading font-semibold">Firstname Lastname</p>
              <p className="text-subheading">ID: 000000</p>
            </div>
            {angleDownIcon}
          </div>
        </div>
      </div>
      <div className="relative w-full flex flex-col box-border">
        <div className="relative flex flex-col box-border">
          <div className="relative flex flex-col min-h-content top-navbar-height box-border">
            <div className="relative flex flex-col min-h-content box-border">
              <div className="relative box-border min-h-content flex flex-row flex-nowrap items-stretch justify-center">
                <div className="box-border w-full max-w-full flex-nowrap items-start relative flex flex-row justify-around">
                  <div className="box-border overflow-hidden sticky w-1/6 min-h-content top-navbar-height space-y-4 py-10">
                    <Menu />
                  </div>
                  <div className="relative w-1/2 p-10 flex flex-col border min-h-content bg-blue-50 space-y-4">
                    <div className="w-full h-72 border relative">
                      <img
                        className="w-full h-full"
                        src="/images/dashboard-content-1.svg"
                      />
                      <p className="absolute top-8 left-8 text-skBlue font-bold text-5xl">
                        Hi Firstname,
                      </p>
                      <p className="absolute bottom-16 left-8 text-white text-2xl">
                        Welcome Back! What will you learn today?
                      </p>
                    </div>
                    <div className="w-full h-32 flex justify-around relative">
                      <div className="h-full w-1/4 flex bg-white border rounded-2xl">
                        <div className="w-1/3 h-full flex items-center">
                          {pieChartIcon}
                        </div>
                        <div className="flex flex-col justify-center h-full w-3/4">
                          <p className="text-skBlue font-bold text-4xl">20</p>
                          <p className="font-semibold text-subheading">
                            Ongoing Courses
                          </p>
                        </div>
                      </div>
                      <div className="h-full w-1/4 flex bg-white border rounded-2xl">
                        <div className="w-1/3 h-full flex items-center">
                          {availableCoursesIcon}
                        </div>
                        <div className="flex flex-col justify-center h-full w-3/4">
                          <p className="text-skBlue font-bold text-4xl">6</p>
                          <p className="font-semibold text-subheading">
                            Available Courses
                          </p>
                        </div>
                      </div>
                      <div className="h-full w-1/4 flex bg-white border rounded-2xl">
                        <div className="w-1/3 h-full flex items-center">
                          {completedCoursesIcon}
                        </div>
                        <div className="flex flex-col justify-center h-full w-3/4">
                          <p className="text-skBlue font-bold text-4xl">1</p>
                          <p className="font-semibold text-subheading">
                            Completed Courses
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="box-border flex flex-col overflow-hidden sticky w-1/4 min-h-content top-navbar-height space-y-4 py-10">
                    <CalendarLayout />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="flex w-full justify-around">
          <div className="sticky w-96 border min-h-content flex flex-col space-y-4 py-10">
            <div className="flex items-center w-full h-16 pl-10 bg-blue-50 rounded-l-full border-skBlue space-x-4 border-r-4">
              {homeIcon}
              <p className="text-skBlue">Home</p>
            </div>
            <div className="flex items-center w-full h-16 pl-10 space-x-4">
              {bookmarkIcon}
              <p className="text-lightGray">Courses</p>
            </div>
            <div className="flex items-center w-full h-16 pl-10 space-x-4">
              {calendarIcon}
              <p className="text-lightGray">My Schedule</p>
            </div>
            <div className="flex items-center w-full h-16 pl-10 space-x-4">
              {leaderboardIcon}
              <p className="text-lightGray">Leaderboard</p>
            </div>
          </div>
          <div className="relative w-1/2 p-10 flex flex-col border min-h-content bg-blue-50 space-y-4">
            <div className="w-full h-72 border relative">
              <img
                className="w-full h-full"
                src="/images/dashboard-content-1.svg"
              />
              <p className="absolute top-8 left-8 text-skBlue font-bold text-5xl">
                Hi Firstname,
              </p>
              <p className="absolute bottom-16 left-8 text-white text-2xl">
                Welcome Back! What will you learn today?
              </p>
            </div>
            <div className="w-full h-32 flex justify-around relative">
              <div className="h-full w-1/4 flex bg-white border rounded-2xl">
                <div className="w-1/3 h-full flex items-center">
                  {pieChartIcon}
                </div>
                <div className="flex flex-col justify-center h-full w-3/4">
                  <p className="text-skBlue font-bold text-4xl">20</p>
                  <p className="font-semibold text-subheading">
                    Ongoing Courses
                  </p>
                </div>
              </div>
              <div className="h-full w-1/4 flex bg-white border rounded-2xl">
                <div className="w-1/3 h-full flex items-center">
                  {availableCoursesIcon}
                </div>
                <div className="flex flex-col justify-center h-full w-3/4">
                  <p className="text-skBlue font-bold text-4xl">6</p>
                  <p className="font-semibold text-subheading">
                    Available Courses
                  </p>
                </div>
              </div>
              <div className="h-full w-1/4 flex bg-white border rounded-2xl">
                <div className="w-1/3 h-full flex items-center">
                  {completedCoursesIcon}
                </div>
                <div className="flex flex-col justify-center h-full w-3/4">
                  <p className="text-skBlue font-bold text-4xl">1</p>
                  <p className="font-semibold text-subheading">
                    Completed Courses
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full h-80 border"></div>
          </div>
          <div className="sticky w-1/4 border min-h-content"></div>
        </div> */}
      </div>
    </>
  );
}
