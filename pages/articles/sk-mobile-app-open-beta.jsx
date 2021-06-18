import { useState } from "react";
import ArticleCarouselLayout from "../../components/ArticlesCarousel/ArticleCarouselLayout";
import Footer from "../../components/Footer";
import MobileNavbar from "../../components/HomePage/NavBar/MobileNavBar";
import NavBar from "../../components/NavBar";
import { useUserManagementHook } from "../../hooks/userManagementHook";
import LoginModal from "../../components/HomePage/LoginModal";

const MobileAppOpenBeta = () => {
  useUserManagementHook();

  const [loginModalOpen, setLoginModalOpen] = useState(false);

  return (
    <>
      {loginModalOpen && <LoginModal showModal={setLoginModalOpen} />}

      <MobileNavbar />
      <NavBar
        page="article"
        path="Stock Knowledge XR Mobile App (Open Beta) Is Now Available for Download!"
      />
      <div className="hero text-white px-20 py-10 space-y-2 md:w-full xs:w-screen">
        <h1 className="xl:text-6xl lg:text-6xl md:text-6xl sm:text-xl xs:text-xl xl:w-3/4 lg:w-3/4 md:w-full reno:w-full sm:w-full xs:w-full font-bold">
          Stock Knowledge XR Mobile App (Open Beta) Is Now Available for
          Download!
        </h1>
        <p className="text-sm">By: Celine Veloso, Marketing</p>
      </div>
      <div className="md:-mt-5 xs:-mt-4 md:mb-8 xl:w-full lg:w-full md:w-full reno:w-full sm:w-screen xs:w-screen">
        <img
          className="mx-auto w-3/4"
          src="/images/articles/sk-mobile-app-open-beta/header-img.svg"
        />
      </div>
      <div className="md:w-full xs:w-screen flex justify-between lg:px-48 md:px-20 reno:px-20 sm:px-20 xs:px-20 text-gray-500 lg:flex-row xs:flex-col">
        <div className="xl:w-1/4 lg:w-1/4 md:w-1/4 reno:w-1/4 sm:w-full xs:w-full">
          <p>Share this article</p>
          <div className="w-full h-10 flex items-center text-blue space-x-2">
            <img
              className="w-8 h-8 p-1 bg-blue-400 rounded-full inline-block"
              src="/images/share/facebook.svg"
            />
            <img
              className="w-8 h-8 p-1 bg-blue-400 rounded-full inline-block"
              src="/images/share/twitter.svg"
            />
          </div>
        </div>
        <div className="xl:w-11/12 lg:w-11/12 md:w-11/12 reno:w-11/12 sm:w-full xs:w-full leading-relaxed">
          <h1 className="text-lg text-blue-500 font-bold">
            A Unique Learning Experience for Students and Teachers
          </h1>
          <br />
          <p>
            The Stock Knowledge team has been hard at work the past few months
            in building a tool to enhance the learning experience for students.
            We are now proud to launch the Stock Knowledge XR Mobile App in Open
            Beta! The app contains gamified Augmented Reality (AR) and Virtual
            Reality (VR) STEM contents.
            <br />
            <br />
            This mobile app provides experiential learning experiences that will
            allow students to interact, explore, and immerse themselves in the
            lessons they are learning.
          </p>
          <br />
          <h1 className="text-lg text-blue-500 font-bold">
            What Users Can Expect
          </h1>
          <br />
          <p>
            The users of the app can take lessons in three different Modes. Each
            Mode varies in the level of interaction and thinking required. Mode
            One lessons are interactive lectures; Mode Two lessons are
            activities and experiments; while Mode Three lessons have Gamified
            Assessments.
            <br />
            <br />
            For the current version of the app, it allows users to play as they
            take the lessons or modules in different modes.
            <br />
            <br />
            Smartphone users without VR headsets are able to use the app with
            the “360” mode. Those with VR headsets (whether a VR box or the
            cardboard version) get to “gaze” or “tap” around in a Virtual
            Reality environment.
            <br />
            <br />
            Meanwhile, AR contents are used with matching Visual Sheets to scan
            images.
            <br />
            <br />
            Teachers are already excited to incorporate this tool in their
            lesson plans!
          </p>
          <br />
          <h1 className="text-lg text-blue-500 font-bold">How To Install</h1>
          <br />
          <p>
            The Stock Knowledge XR Mobile App is available to anyone and is FREE
            to download and install. It is currently available for Android OS
            only.
            <br />
            <br />A Step-by-Step Manual is available for use. Simply click on
            this&nbsp;
            <a className="text-skBlue" href={`https://www.canva.com/design/DAEbwXGKT18/z17lS7aqzhny6hOVW2F9CQ/view?utm_content=DAEbwXGKT18&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton#2`}>
              link
            </a>{" "}
            and follow the easy instructions.
            <br />
            <br />
            Are you ready to level up your learning? We look forward to hearing
            what you think!
            <a href={`https://www.canva.com/design/DAEbwXGKT18/z17lS7aqzhny6hOVW2F9CQ/view?utm_content=DAEbwXGKT18&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton#2`}>
              <img
                className="mx-auto my-8"
                src="/images/articles/sk-mobile-app-open-beta/image-1.png"
              />
            </a>
          </p>
        </div>
      </div>
      <div className="">
        <ArticleCarouselLayout />
      </div>
      <Footer />
    </>
  );
};

export default MobileAppOpenBeta;
