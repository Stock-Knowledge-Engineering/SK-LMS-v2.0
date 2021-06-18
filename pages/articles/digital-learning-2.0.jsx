import { useState } from "react";
import ArticleCarouselLayout from "../../components/ArticlesCarousel/ArticleCarouselLayout";
import Footer from "../../components/Footer";
import LoginModal from "../../components/HomePage/LoginModal";
import MobileNavbar from "../../components/HomePage/NavBar/MobileNavBar";
import NavBar from "../../components/NavBar";
import { useUserManagementHook } from "../../hooks/userManagementHook";

export default function DigitalLearning2() {
  useUserManagementHook();

  const [loginModalOpen, setLoginModalOpen] = useState(false);

  return (
    <>
      {loginModalOpen && <LoginModal showModal={setLoginModalOpen} />}
      <MobileNavbar />
      <NavBar
        page="article"
        path="Digital Learning 2.0"
        showModal={setLoginModalOpen}
      />
      <div className="hero text-white px-20 py-10 space-y-2 md:w-full xs:w-screen">
        <h1 className="xl:text-6xl lg:text-6xl md:text-6xl sm:text-xl xs:text-xl xl:w-3/4 lg:w-3/4 md:w-full reno:w-full sm:w-full xs:w-full font-bold">
          Digital Learning 2.0
        </h1>
        <p className="text-sm">By: Rome Salonga </p>
      </div>
      <div className="md:-mt-5 xs:-mt-4 md:mb-8 xl:w-full lg:w-full md:w-full reno:w-full sm:w-screen xs:w-screen">
        <img
          className="mx-auto w-3/4"
          src="/images/articles/digital-learning-2.0/header-img.svg"
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
          <p className="leading-relaxed">
            Love is lovelier the second time around… and so is learning. With
            the success of our first forum, comes another to empower digital
            learners in facing expected circumstances. This time the talk was
            given by Dr. Christian Alis, a senior data scientist at Access@aim
            and an assistant professor at Asian Institute of Management. Stock
            Knowledge caters to help turn academic problems into opportunities
            by providing an EdTech solution that links traditional and digital
            approaches together.
            <br />
            <br />
            The gathering occurred on March 22, 2019, still at De La Salle
            University in Br. Andrew Gonzales Hall. College students from
            different universities were, once again, given the chance to
            experience SK’s Gamified Learning Tool (GLT). Dr. Alis tackled the
            threats of automatons in taking over current jobs, and other issues
            of education in the Industry 4.0.
            <br />
            The allotment was provided to have them speak up with their fellow
            students, regarding their struggles in school - of course, everyone
            can relate to that - effective educational settings and practices
            were also discussed with their peers.
            <br />
            <br />
            Not only did we have yet another successful assembly. Stock
            Knowledge has also thrived in introducing an application that may
            soon become the most effective learning tool of today’s generation.
            <br />
            <br />
            The purpose of the Digital Learning 2.0 open forum is to determine
            the challenges of digital learners, and empowering them to shape
            their future, especially robots are inevitably coming that could
            wipe out many current jobs, and other issues of education in the
            Industry 4.0.
          </p>
          <img
            className="mx-auto mt-8"
            src="/images/articles/digital-learning-2.0/image-1.svg"
          />
        </div>
      </div>
      <div className="">
        <ArticleCarouselLayout />
      </div>
      <Footer />
    </>
  );
}
