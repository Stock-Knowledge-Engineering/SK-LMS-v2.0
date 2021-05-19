import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import CalendarLayout from "../components/Calendar/CalendarLayout";
import Menu from "../components/Admin/Menu/Menu";
import Home from "../components/Admin/Home/Home";
import SecondaryMenu from "../components/LMS/SecondaryMenu";
import Search from "../components/LMS/Search/Search";
import BrandLogo from "../components/LMS/BrandLogo/BrandLogo";
import { useRouter } from "next/dist/client/router";
import { useSelector } from "react-redux";
import Courses from "../components/LMS/Courses/Courses";
import Course from "../components/LMS/Course/Course";
import CourseTopic from "../components/LMS/CourseTopic/CourseTopic";
import Subjects from "../components/Admin/Subject/Subjects";

const AdminLayout = (props) => {
  const router = useRouter();
  const user = useSelector((state) => state.UserReducer);

  const { slug } = router.query;

  const angleDownIcon = (
    <FontAwesomeIcon
      icon={faAngleDown}
      size="lg"
      color="lightGray"
      className={`cursor-pointer hover:text-subheading`}
    />
  );

  return (
    <>
      <div className="relative">
        <BrandLogo />
        <Search />
        <SecondaryMenu />
      </div>
      <div className="relative w-full flex flex-col box-border">
        <div className="relative flex flex-col box-border">
          <div className="relative flex flex-col min-h-content top-navbar-height box-border">
            <div className="relative flex flex-col min-h-content box-border">
              <div className="relative box-border min-h-content flex flex-row flex-nowrap items-stretch justify-center">
                <div className="box-border w-full max-w-full flex-nowrap items-start relative flex flex-row justify-around">
                  <div
                    className={`box-border overflow-hidden sticky w-1/6 min-h-content top-navbar-height space-y-4 py-10`}
                  >
                    <Menu />
                  </div>
                  {!slug && <Home />}
                  {slug && slug[0] != "courses" && <Home />}
                  {/* COURSES HOME */}
                  {slug && slug[0] == "courses" && <Subjects />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
