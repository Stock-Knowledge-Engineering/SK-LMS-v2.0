import ArticleCarouselLayout from "../../components/ArticlesCarousel/ArticleCarouselLayout";
import Footer from "../../components/Footer";
import MobileNavbar from "../../components/HomePage/NavBar/MobileNavBar";
import ArticleNavbar from "../../components/NavBar";
import ModalLayout from "../../components/HomePage/ModalLayout";
import { useState } from "react";
import { useUserManagementHook } from "../../hooks/userManagementHook";

export default function DigitalLearning1() {
  useUserManagementHook();

  const [loginModalOpen, setLoginModalOpen] = useState(false);

  return (
    <>
      <MobileNavbar />
      <ArticleNavbar
        showModal={setLoginModalOpen}
        page="article"
        path="New look, same goals– here’s Stock Knowledge’s promise to the future"
      />

      {loginModalOpen && (
        <ModalLayout
          showModal={setLoginModalOpen}
        />
      )}

      <div className="hero text-white px-20 py-10 space-y-2 md:w-full xs:w-screen">
        <h1 className="xl:text-6xl lg:text-6xl md:text-6xl sm:text-xl xs:text-xl xl:w-3/4 lg:w-3/4 md:w-full reno:w-full sm:w-full xs:w-full font-bold">
          Digital Learning 1.0
        </h1>
        <p className="text-sm">By: Rome Salonga </p>
      </div>
      <div className="md:-mt-5 xs:-mt-4 md:mb-8 xl:w-full lg:w-full md:w-full reno:w-full sm:w-screen xs:w-screen">
        <img
          className="mx-auto w-3/4"
          src="/images/articles/digital-learning-1.0/header-img.svg"
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
            “Learning is a treasure that will follow its owner everywhere.” Just
            like what you have read from that quotation, learning can be
            continually found at all points. Since technology has been around
            for years and has affected both education and the students’ way of
            learning, why not take advantage of its prominence to make studying
            way more interesting?
            <br />
            <br />
            On March 2, 2019 Stock Knowledge organized an open forum attended by
            college students from different top universities at Animo Labs in
            Andrew Gonzales Bldg., De La Salle University. The forum centralized
            on technology’s positive and negative impacts and was led by
            University of the Philippines Los Baños’ assistant professor, Dr.
            Reslond L. Reaño.
            <br />
            <br />
            Stock Knowledge’s Gamified Learning Tool (GLT) was introduced during
            the talk. Student leaders were given the chance to use the app as to
            which, they say, differs from their usual academics methods. Unlike
            dull classroom discussions, you get to learn while you play. A
            perfect example of hitting two birds with one stone - only that
            stone happens to be your mobile phone.
            <br />
            <br />
            The paradigm shift in education has been gradually happening due to
            the changing behaviors of the millennial students heavily influenced
            by current technologies. Some schools haven’t realized, catching up,
            and fully embraced digital approaches to be relevant in the
            Information Age. There are drawbacks of purely traditional and
            employing fully digital in terms of delivering quality education.
            <br />
            <br />
            Stock Knowledge is here to help turn problems into opportunities by
            providing an EdTech solution that bridges the gap between
            traditional and digital approaches.
          </p>
          <img
            className="mx-auto mt-8"
            src="/images/articles/digital-learning-1.0/image-1.svg"
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
