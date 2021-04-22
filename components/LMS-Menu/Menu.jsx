import { faBookmark, faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import { faHome, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Menu = (props) => {
    const homeIcon = (
        <FontAwesomeIcon
          icon={faHome}
          size="lg"
          color=""
          className={`text-skBlue cursor-pointer hover:text-subheading`}
        />
      );
    
      const bookmarkIcon = (
        <FontAwesomeIcon
          icon={faBookmark}
          size="lg"
          color="lightGray"
          className={`cursor-pointer hover:text-subheading`}
        />
      );
    
      const calendarIcon = (
        <FontAwesomeIcon
          icon={faCalendarAlt}
          size="lg"
          color="lightGray"
          className={`cursor-pointer hover:text-subheading`}
        />
      );
    
      const leaderboardIcon = (
        <FontAwesomeIcon
          icon={faTrophy}
          size="lg"
          color="lightGray"
          className={`cursor-pointer hover:text-subheading`}
        />
      );
  return (
    <>
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
    </>
  );
};


export default Menu;