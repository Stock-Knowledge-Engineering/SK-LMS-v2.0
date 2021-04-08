import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

import { useSelector } from "react-redux";

import { useUserManagementHook } from "../hooks/userManagementHook";
import { useRouter } from "next/dist/client/router";
import NavBar from "../components/NavBar";
import MobileNavBar from "../components/MobileNavBar";
import CarouselLayout from "../components/Carousel/CarouselLayout";
import TestimonialLayout from "../components/Testimonial/TestimonialLayout";
import LoginModal from "../components/HomePage/LoginModal";
import ArticleCarouselLayout from "../components/ArticlesCarousel/ArticleCarouselLayout";
import Footer from "../components/Footer";

export default function Home(props) {
  useUserManagementHook();

  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const user = useSelector((state) => state.UserReducer);
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Stock Knowledge</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {loginModalOpen && <LoginModal showModal={setLoginModalOpen} />}
      <MobileNavBar />
      <div
        className={`md:flex sm:hidden xs:hidden lg:w-full reno:w-full md:w-full sm:w-screen xs:w-screen p-4 h-20 justify-between items-center`}
      >
        <a
          href="/"
          className="lg:w-1/4 flex items-center text-xl text-heading md:w-2/12 space-x-2"
        >
          <img className="w-12" src="/images/logo.png" />
          <h4 className="lg:flex md:hidden">
            Stock &nbsp;<span className="font-bold text-skBlue">Knowledge</span>
          </h4>
        </a>
        <div
          className={`lg:w-3/4 md:w-full flex items-center text-subheading text-3xl font-bold`}
        >
          <ul className="flex justify-around w-full lg:text-base md:text-xs">
            <li>
              <a href="/#home">Home</a>
            </li>
            <li>
              <a href="/#solution">Solutions</a>
            </li>
            <li>
              <a href="/#story">Story</a>
            </li>
            <li>
              <a href="/#team">Team</a>
            </li>
            <li>
              <a href="/#testimonial">Testimonials</a>
            </li>
            <li>
              <a href="/#partners">Partners</a>
            </li>
            <li>
              <a href="/#articles">Articles</a>
            </li>
            <li>
              <a href="/#contactus">Contact Us</a>
            </li>
          </ul>
          {!user.isLogin && (
            <button
              onClick={(e) => {
                setLoginModalOpen(true);
              }}
              className="bg-skBlue rounded-full font-bold text-base text-white py-2 px-4"
            >
              Login
            </button>
          )}
          {user.isLogin && (
            <button
              onClick={(e) => {
                router.push("/lms");
              }}
              className="bg-skBlue rounded-full font-bold text-base text-white py-2 px-4"
            >
              LMS
            </button>
          )}
        </div>
        {/* {visibility < 0.3 && 
                <button className="bg-yellow-400 text-white text-xl font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 focus:ring-offset-yellow-200">Register</button>
              }           */}
      </div>
      <div id="home" className="sm:w-screen xs:w-screen">
        <div className="flex lg:flex-row reno:flex-row md:flex-row sm:flex-col xs:flex-col reno:w-full md:w-full sm:w-screen xs:w-screen h-1/2 lg:mt-20 xs:mt-0">
          <div className="lg:w-1/2 md:w-1/2 reno:w-1/2 sm:w-screen xs:w-screen lg:pl-10 lg:pt-10 md:pl-10 md:pt-10 reno:pl-10 reno:pt-10 sm:pl-10 xs:pl-10 sm:pt-10 xs:pt-10">
            <h1 className="lg:text-8xl font-bold text-heading md:text-6xl reno:text-6xl sm:text-5xl xs:text-5xl">
              Learn to Play. <br />
              Play to Learn.
            </h1>
            <br />
            <h2 className="xl:text-4xl lg:text-2xl md:text-lg text-subheading md:leading-snug">
              Stock Knowledge brings innovation and education together to
              provide accessible experiential learning technology that students
              love.
            </h2>
            <br />
            <br />
            <br />
            {!user.isLogin && (
              <Link href="/#contactus">
                <a className="rounded-full bg-skBlue font-bold xl:text-xl lg:text-xl reno:text-xl md:text-md sm:text-xl xs:text-xl text-white py-4 px-12">
                  Request a demo
                </a>
              </Link>
            )}
            {user.isLogin && (
              <button
                onClick={(e) => {
                  router.push("/lms");
                }}
                className="rounded-full bg-skBlue font-bold xl:text-xl lg:text-xl reno:text-xl md:text-md sm:text-xl xs:text-xl text-white py-4 px-12"
              >
                Go to LMS
              </button>
            )}
          </div>
          <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 reno:w-1/2 sm:w-full xs:w-full md:mt-0 xs:mt-10">
            <img
              className="md:w-full reno:w-full sm:w-full xs:w-full"
              src="/images/main-hero(2).svg"
            />
          </div>
        </div>
      </div>
      {/* <NavBar showModal={setLoginModalOpen} loginModalOpen={loginModalOpen} page={"home"}/> */}
      <br />
      <div className="lg:w-full reno:w-full md:w-full sm:w-screen xs:w-screen p-6 h-1/4">
        <h1
          id="solution"
          className="text-center lg:w-full md:w-full reno:w-full sm:w-full xs:w-full lg:text-6xl reno:text-6xl md:text-6xl sm:text-4xl xs:text-4xl font-semibold text-heading"
        >
          Our Solutions
        </h1>
        <br />
        <h4 className="text-lg text-center text-subheading lg:w-1/3 reno:w-1/3 md:w-1/3 sm:w-full xs:w-full m-auto">
          Our solutions aim to fulfill the needs of next generation learners in
          the country and across the globe
        </h4>
        <br />
      </div>
      <div className="md:w-full xs:w-screen md:flex-row xs:flex-col p-6 h-1/4 flex items-center">
        <div className="md:w-1/2 flex justify-end px-14">
          <img src="images/fullyimmersive.svg" />
        </div>
        <div className="md:w-1/2 px-14 md:text-left xs:text-center">
          <h4 className="text-4xl font-bold text-blue-500">
            Fully-Immersive Digital Experience
          </h4>
          <p className="text-xl">
            Enabling students to interact and immerse their learning experience
            in their own digital space
          </p>
        </div>
      </div>
      <div className="md:w-full xs:w-screen md:flex-row xs:flex-col-reverse p-6 h-1/4 flex items-center">
        <div className="md:w-1/2 px-14 md:text-right xs:text-center">
          <h4 className="text-4xl font-bold text-blue-500">Gamification</h4>
          <p className="text-xl">
            Assimilating new information and testing new knowledge in a fun and
            engaging way
          </p>
        </div>
        <div className="md:w-1/2 px-14">
          <img src="images/gamification.svg" />
        </div>
      </div>
      <div className="md:w-full md:flex-row xs:w-screen xs:flex-col p-6 h-1/4 flex items-center">
        <div className="md:w-1/2 flex justify-end px-14">
          <img src="images/device.svg" />
        </div>
        <div className="md:w-1/2 px-14 md:text-left  xs:text-center">
          <h4 className="text-4xl font-bold text-blue-500">
            Device Accessibility
          </h4>
          <p className="text-xl">
            Delivering the highest-quality learning experiences accessible by
            basic devices
          </p>
        </div>
      </div>
      <div className="md:w-full xs:w-screen md:flex-row xs:flex-col-reverse p-6 h-1/4 flex items-center">
        <div className="md:w-1/2 px-14 md:text-right xs:text-center">
          <h4 className="text-4xl font-bold text-blue-500">
            Adaptive Learning
          </h4>
          <p className="text-xl">
            Using algorithms to deliver customized learning activities that
            address each student’s unique needs
          </p>
        </div>
        <div className="md:w-1/2 px-14">
          <img src="images/adaptive.svg" />
        </div>
      </div>
      <div
        className="md:w-full md:flex-row sm:w-screen xs:w-screen lg:h-1/4 md:h-1/4 xs:h-auto reno:h-1/4 flex mt-32 lg:flex-row md:flex-col reno:flex-col sm:flex-col xs:flex-col"
        style={{
          background:
            "url('images/bg-cta-1.svg') rgba(24, 79, 136, 0.5) no-repeat",
          backgroundSize: "cover",
          backgroundBlendMode: "multiply",
        }}
      >
        <div
          id="story"
          className="lg:w-1/2 text-white md:p-20 sm:p-20 md:w-full reno:w-full sm:w-screen xs:w-screen xs:px-10 xs:py-8"
        >
          <h4 className="text-center lg:w-full md:w-full reno:w-full sm:w-full xs:w-full lg:text-6xl reno:text-6xl md:text-6xl sm:text-4xl xs:text-4xl font-bold md:text-4xl">
            Our Story
          </h4>
          <br />
          <br />
          <p className="lg:text-2xl md:text-lg xs:text-base">
            Educator and physicist Anna Marie Benzon launched Stock Knowledge to
            focus on how young learners could foster better appreciation for
            their school subjects after realizing that traditional methods were
            not as engaging anymore in the age of the internet.
            <br />
            <br />
            Keeping on track to its mission of instituting its innovative
            platform into the local academic sector, Stock Knowledge recently
            entered into agreements with the Department of Education (DEpEd) of
            Manila and Makati to gather more insights from students and further
            develop the platform’s viability into the education mainstream with
            the help of investors and venture capitalists around the world.
            <br />
            <br />
            Still in its early stages, Stock Knowledge has marked its reputation
            as one of the Philippines’ premier educational technology
            corporations that is committed to making a real difference in the
            industry for the benefit of students and educators around the world.
          </p>
        </div>
        <div className="lg:w-1/2 relative space-y-10 md:p-20 reno:p-20 lg:p-20 sm:p-6 xs:p-6 md:w-full reno:w-full sm:w-screen xs:w-screen">
          <div className="py-2 px-4 w-full border text-subheading bg-white rounded-lg lg:h-36 md:h-36 reno:h-36 sm:h-auto">
            <h6 className="text-2xl font-bold text-blue-400">Mission</h6>
            <br />
            <p>
              Empower learners and educators by creating accessible,
              cutting-edge digital tools.
            </p>
          </div>
          <div className="py-2 px-4 w-full border text-subheading bg-white rounded-lg lg:h-36 md:h-36 reno:h-36 sm:h-auto">
            <h6 className="text-2xl font-bold text-blue-400">Vision</h6>
            <br />
            <p>
              Be the leading EdTech company in today's digital transformation
              age.
            </p>
          </div>
          <div className="py-2 px-4 w-full border text-subheading bg-white rounded-lg lg:h-36 md:h-36 reno:h-36 sm:h-auto">
            <h6 className="text-2xl font-bold text-blue-400">Core Values</h6>
            <br />
            <p>
              We are a mission-driven team that takes pride in efficient and
              ethical work, anchored on the highest degree of Excellence,
              Efficiency, Integrity, Creativity, and Loyalty.
            </p>
          </div>
        </div>
      </div>
      <div
        id="team"
        className="md:w-full xs:w-screen p-6 h-1/4 bg-blue-50 rounded-b-full"
      >
        <h1 className="text-center w-full lg:text-6xl md:text-6xl reno:text-6xl sm:text-4xl xs:text-4xl font-semibold text-heading lg:mt-32 md:mt-32 reno:mt-32 lg:mt-16 lg:mt-16">
          Our Team
        </h1>
        <br />
        <h4 className="lg:text-lg md:text-lg lg:text-lg xs:text-base text-center text-subheading w-3/4 m-auto">
          Behind the team are empowered individuals comprising scientists,
          engineers, educators, and entrepreneurs who were meticulously selected
          to perform and align with the Corporation’s mission, vision, values
          and culture. Each member of Stock Knowledge possesses the initiative
          to focus on the needs and best interests of its clients, while
          collectively working to ensure that each facet of the learning
          programs is delivered efficiently from conceptualization to
          realization, paving the way to better education for all.
        </h4>
        <CarouselLayout />
        <br />
      </div>
      <div
        id="testimonial"
        className="lg:w-full md:w-full reno:w-full sm:w-screen xs:w-screen space-y-14 lg:mt-32 md:mt-32 reno:mt-32 lg:mt-16 lg:mt-16"
      >
        <h1 className="text-center w-full lg:text-6xl md:text-6xl reno:text-6xl sm:text-4xl xs:text-4xl font-semibold text-heading lg:mt-32 md:mt-32 reno:mt-32 lg:mt-16 lg:mt-16">
          From Our Partners
        </h1>
        <TestimonialLayout />
      </div>
      <div className="lg:w-full md:w-full reno:w-full sm:w-screen xs:w-screen lg:items-center reno:items-start md:items-start sm:items-start xs:items-start flex bg-blue-100 lg:mt-32 md:mt-32 reno:mt-32 sm:mt-16 xs:mt-16 p-4 lg:flex-row reno:flex-col md:flex-col sm:flex-col xs:flex-col">
        <h6
          id="partners"
          className="lg:text-left lg:w-auto xs:w-full lg:text-6xl reno:text-6xl md:text-6xl sm:text-4xl xs:text-4xl font-semibold text-heading p-10"
        >
          <span className="reno:block lg:hidden">Our Partners</span>
          <span className="lg:block reno:hidden md:hidden sm:hidden xs:hidden">
            Our
            <br />
            Partners
          </span>
        </h6>
        <div className="lg:w-3/4 reno:w-full md:w-full sm:w-full xs:w-full lg:px-0 md:px-20 reno:px-52 flex justify-around flex-wrap lg:pb-0 reno:pb-10 md:pb-10 sm:pb-10 xs:pb-10">
          <img className="w-40" src="/images/unicef.svg" />
          <img className="" src="/images/QBO.svg" />
          <img className="" src="/images/AIM.svg" />
          <img className="w-24" src="/images/deped-manila.svg" />
          <img className="w-24" src="/images/deped-makati.svg" />
        </div>
      </div>
      <div
        id="articles"
        className="lg:w-full md:w-full reno:w-full sm:w-screen xs:w-screen"
      >
        <ArticleCarouselLayout />
      </div>
      <div
        id="contactus"
        className="md:w-full reno:w-full lg:w-full sm:w-screen xs:w-screen p-6 h-1/4 bg-blue-50 rounded-b-full"
      >
        <h1 className="text-center w-full text-6xl font-semibold text-heading mt-16">
          Send us a message
        </h1>
        <br />
        <h4 className="text-lg text-center text-subheading w-3/4 m-auto">
          Send us a message if you’re interested to partner with us!
        </h4>
        <div className="flex w-full lg:flex-row md:flex-col reno:flex-col sm:flex-col xs:flex-col lg:space-y-0 md:space-y-10 reno:space-y-10 sm:space-y-10 xs:space-y-10 xs:items-center md:justify-around my-16 px-10">
          <div className="lg:w-1/2 md:w-full reno:w-full sm:w-full xs:w-full self-start 1080:px-20">
            <form className="space-y-4">
              <div>
                <label className="text-lg font-bold text-subheading">
                  Name:
                </label>
                <input
                  className="w-full text-subheading"
                  type="text"
                  placeholder="Ex. Juan Dela Cruz"
                />
              </div>
              <div>
                <label className="text-lg font-bold text-subheading">
                  Email:
                </label>
                <input
                  className="w-full border-subheading"
                  type="text"
                  placeholder="something@website.com"
                />
              </div>
              <div>
                <label className="text-lg font-bold text-subheading">
                  Message:
                </label>
                <br />
                <textarea className="w-full text-subheading"></textarea>
              </div>
              <input
                className="w-full h-10 bg-blue-500 rounded-full text-white uppercase"
                type="submit"
                value="Send a message"
              />
            </form>
          </div>
          <div className="lg:w-1/2 md:w-full reno:w-full xs:w-full md:space-y-5 reno:space-y-5 sm:space-y-5 xs:space-y-5 self-start 1080:px-20">
            <div className="flex items-center text-blue-500">
              <svg
                className="lg:h-4 lg:w-4 md:h-6 md:w-6 reno:h-6 reno:w-6 sm:h-6 sm:w-6 xs:h-6 xs:w-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <p className="text-subheading">(+63)927-885-3760</p>
            </div>

            <div className="flex items-center text-blue-500 space-x-2">
              <svg
                className="lg:h-4 lg:w-4 md:h-6 md:w-6 reno:h-6 reno:w-6 sm:h-6 xs:h-6 sm:w-6 xs:w-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <a
                href="mailto:stock.knowledge7@gmail.com "
                className="text-skBlue lg:text-sm md:text-sm reno:text-sm sm:text-sm xs:text-sm"
              >
                stock.knowledge7@gmail.com
              </a>
            </div>

            <div className="flex items-center text-blue-500 space-x-2">
              <svg
                className="lg:h-4 lg:w-4 md:h-6 md:w-6 reno:h-6 reno:w-6 sm:h-6 sm:w-6 xs:h-6 xs:w-6 self-start"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              <a className="text-subheading w-11/12 self-start">
                QBO Innovation Hub, Ground Floor, DTI International Building,
                375 Sen. Gil J. Puyat Avenue., Makati City, Metro Manila, 1209
                Philippines
              </a>
            </div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15446.701697972365!2d121.0300123!3d14.5605444!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x929312216d6fcc29!2sQBO%20Innovation%20Hub!5e0!3m2!1sen!2sph!4v1615723123451!5m2!1sen!2sph"
              width="100%"
              height="450"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
