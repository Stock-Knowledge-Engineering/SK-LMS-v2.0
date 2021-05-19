import { faBell, faCog, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MiniProfile from "./MiniProfile";

const SecondaryMenu = () => {
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
  return (
    <div className="z-20 fixed right-0 flex h-20 w-96 mr-4 items-center justify-end space-x-4">
      <div className="h-1/2 flex items-center space-x-2 border-r px-4 ">
        {questionMarkIcon}
        {gearIcon}
        {bellIcon}
      </div>
      <MiniProfile />
      {/* <div className="flex items-center space-x-2">
          <img
            className="h-16 rounded-full border"
            src="/images/avatar.png"
          />
          <div className="flex flex-col">
            <p className="text-heading font-semibold">Firstname Lastname</p>
            <p className="text-subheading">ID: 000000</p>
          </div>
          {angleDownIcon}
        </div> */}
    </div>
  );
};

export default SecondaryMenu;
