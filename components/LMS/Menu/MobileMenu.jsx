import { faBookmark, faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import {
  faHome,
  faSignOutAlt,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MobileMenu = () => {
  const homeIcon = (
    <FontAwesomeIcon
      icon={faHome}
      size="lg"
      color=""
      className={`text-white cursor-pointer hover:text-subheading`}
    />
  );

  const bookmarkIcon = (
    <FontAwesomeIcon
      icon={faBookmark}
      size="lg"
      color="lightGray"
      className={`text-skBlue cursor-pointer hover:text-subheading`}
    />
  );

  const calendarIcon = (
    <FontAwesomeIcon
      icon={faCalendarAlt}
      size="lg"
      color="lightGray"
      className={`text-skBlue cursor-pointer hover:text-subheading`}
    />
  );

  const leaderboardIcon = (
    <FontAwesomeIcon
      icon={faTrophy}
      size="lg"
      color="lightGray"
      className={`text-skBlue cursor-pointer hover:text-subheading`}
    />
  );

  const logoutIcon = (
    <FontAwesomeIcon
      icon={faSignOutAlt}
      size="lg"
      color="lightGray"
      className={`text-skBlue cursor-pointer hover:text-subheading`}
    />
  );
  return (
    <div className="box-border h-screen w-full bg-blue-50 flex flex-col py-2">
      <div className="box-border border w-full h-auto bg-white text-skBlue">
        <div className="bg-skBlue text-white box-border h-auto p-4 flex justify-start items-center space-x-2 border-b">
          {homeIcon}
          <h4>Home</h4>
        </div>
        <div className="box-border h-auto p-4 flex justify-start items-center space-x-2 border-b">
          {bookmarkIcon}
          <h4>Courses</h4>
        </div>
        <div className="box-border h-auto p-4 flex justify-start items-center space-x-2 border-b">
          {calendarIcon}
          <h4>My Schedule</h4>
        </div>
        <div className="box-border h-auto p-4 flex justify-start items-center space-x-2 border-b">
          {leaderboardIcon}
          <h4>Home</h4>
        </div>
        <div className="box-border h-auto p-4 flex justify-start items-center space-x-2 border-b">
          {logoutIcon}
          <h4>Logout</h4>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
