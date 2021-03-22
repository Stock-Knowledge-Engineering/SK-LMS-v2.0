import Head from 'next/head';

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
      </Head>
      {loginModalOpen && <LoginModal showModal={setLoginModalOpen}/>}
      <MobileNavBar />
      <div id="home" className="h-screen relative sm:w-full xs:w-height">
        <div className="md:flex items-center xs:hidden justify-between">
          <div className="flex items-center ml-10 mt-20">
            <img className="w-32" src="images/logo.png" />
            <h1 className="lg:text-6xl md:text-4xl  text-gray-700">Stock <span className="text-blue-400 font-bold">Knowledge</span></h1>
          </div>
          {user.isLogin ? 
            <h1 className="lg:text-6xl md:text-4xl xs:hidden md:block text-gray-700 mr-10 mt-20">{`Hi, ${user.data.firstname} ${user.data.lastname}`}</h1> :
            <button onClick={e => {setLoginModalOpen(true)}} className="bg-green-500 rounded-full font-bold text-xl text-white mr-10 py-4 px-12">Login</button>
          }
        </div>
        <div className="flex w-full h-1/2 lg:mt-20 xs:mt-0">
          <div className="w-1/2 pl-10 pt-10 text-black">
            <h1 className="lg:text-8xl font-bold md:text-6xl xs:text-5xl">
            Learn to Play. <br />
            Play to Learn.
            </h1>
            <br />
            <h2 className="xl:text-4xl lg:text-2xl md:text-xl text-gray-700">
            Stock Knowledge brings innovation and education together to provide accessible experiential learning technology that students love.
            </h2>
            <br />
            <br />
            <br />
            <a className="rounded-full bg-blue-500 font-bold text-xl text-white py-4 px-12">
              {user.isLogin ? 'Go to LMS' : 'Request a demo'}
            </a>
          </div>
          <div className="relative w-1/2 xs:mt-10">
            <div
              className="w-3/4 h-full absolute animate__animated animate__slow animate__flash animate__infinite"
              style={{
                background: "url('images/hero-4.svg') no-repeat",
                left: "10%",
              }}
            ></div>
              
            <div
              className="w-3/4 h-full absolute"
              style={{
                background: "url('images/hero-2.svg') no-repeat",
                top: "50%",
                left: "10%",
              }}
            ></div>
            <div
              className="w-3/4 h-full absolute"
              style={{
                background: "url('images/hero-1.svg') no-repeat",
                left: "18%",
              }}
            ></div>
            <div
              className="w-3/4 h-full absolute"
              style={{
                background: "url('images/hero-3.svg') no-repeat",
                top: "0%",
                left: "10%",
              }}
            ></div>
            <div
              className="w-3/4 h-full absolute "
              style={{
                opacity: "50%",
                background: "url('images/Vector (1).svg') no-repeat",
                bottom: "2%",
                left: "10%",
              }}
            ></div>
            <div
              className="w-3/4 h-full absolute "
              style={{
                background: "url('images/hero-6.svg') no-repeat",
                bottom: "2%",
                left: "10%",
              }}
            ></div>
          </div>
        </div>
      </div>
      <NavBar showModal={setLoginModalOpen} loginModalOpen={loginModalOpen} page={"home"}/>
      <br />
      <span></span>
      <div className="md:w-full xs:w-height p-6 h-1/4">
        <h1 id="solution"  className="text-center w-full text-7xl font-bold text-gray-600">
          Our Solutions
        </h1>
        <br />
        <h4 className="text-xl text-center">
        Our solutions aim to fulfill the needs of next generation learners in the country and across the globe
        </h4>
        <br />
      </div>
      <div className="md:w-full xs:w-height md:flex-row xs:flex-col p-6 h-1/4 flex items-center">
        <div className="md:w-1/2 flex justify-end px-14">
          <img src="images/vr-couch-1.svg" />
        </div>
        <div className="md:w-1/2 px-14 md:text-left xs:text-center">
          <h4 className="text-4xl font-bold text-blue-500">
            Fully-Immersive Digital Experience
          </h4>
          <p className="text-xl">Enabling students to interact and immerse their learning experience in their own digital space</p>
        </div>
      </div>
      <div className="md:w-full md:flex-row xs:w-height xs:flex-col-reverse p-6 h-1/4 flex items-center">
        <div className="md:w-1/2 px-14 md:text-right xs:text-center">
          <h4 className="text-4xl font-bold text-blue-500">Gamification</h4>
          <p className="text-xl">
            Assimilating new information and testing new knowledge in a fun and engaging way
          </p>
        </div>
        <div className="md:w-1/2 px-14">
          <img src="images/sol-2.svg" />
        </div>
      </div>
      <div className="md:w-full md:flex-row xs:w-height xs:flex-col p-6 h-1/4 flex items-center">
        <div className="md:w-1/2 flex justify-end px-14">
          <img src="images/sol-3.svg" />
        </div>
        <div className="md:w-1/2 px-14 md:text-left  xs:text-center">
          <h4 className="text-4xl font-bold text-blue-500">Device Accessibility</h4>
          <p className="text-xl">
          Delivering the highest-quality learning experiences accessible by basic devices
          </p>
        </div>
      </div>
      <div className="md:w-full md:flex-row xs:w-height xs:flex-col-reverse p-6 h-1/4 flex items-center">
        <div className="md:w-1/2 px-14 md:text-right xs:text-center">
          <h4 className="text-4xl font-bold text-blue-500">
            Adaptive Learning
          </h4>
          <p className="text-xl">
          Using algorithms to deliver customized learning activities that address each student’s unique needs
          </p>
        </div>
        <div className="md:w-1/2 px-14">
          <img src="images/sol-4.svg" />
        </div>
      </div>
      <div
        className="md:w-full md:flex-row xs:w-height h-1/4 flex mt-32 lg:flex-row md:flex-col xs:flex-col"
        style={{
          background:
            "url('images/bg-cta-1.svg') rgba(24, 79, 136, 0.5) no-repeat",
          backgroundSize: "cover",
          backgroundBlendMode: "multiply",
        }}
      >
        <div id="story" className="lg:w-1/2 text-white md:p-20 md:w-full xs:px-10 xs:py-8">
          <h4 className="text-center w-full text-6xl font-bold md:text-4xl">Our Story</h4>
          <br />
          <br />
          <p className="lg:text-2xl md:text-lg xs:text-2xl">
            Educator and physicist Anna Marie Benzon launched Stock Knowledge to focus on how young learners could foster better appreciation for their school subjects after realizing that traditional methods were not as engaging anymore in the age of the internet.
            <br />
            <br />
            Keeping on track to its mission of instituting its innovative platform into the local academic sector, Stock Knowledge recently entered into agreements with the Department of Education (DEpEd) of Manila and Makati to gather more insights from students and further develop the platform’s viability into the education mainstream with the help of investors and venture capitalists around the world.        
            <br />
            <br />
            Still in its early stages, Stock Knowledge has marked its reputation as one of the Philippines’ premier educational technology corporations that is committed to making a real difference in the industry for the benefit of students and educators around the world. 
          </p>
        </div>
        <div className="lg:w-1/2 relative space-y-10 p-20 md:w-full">
          <div className="py-2 px-4 w-full border text-gray-500 bg-white rounded-lg h-36">
            <h6 className="text-2xl font-bold text-blue-400">Mission</h6>
            <br />
            <p>
            Empower learners and educators by creating accessible, cutting-edge digital tools.
            </p>
          </div>
          <div className="py-2 px-4 w-full border text-gray-500 bg-white rounded-lg h-36">
            <h6 className="text-2xl font-bold text-blue-400">Vision</h6>
            <br />
            <p>
              Be the leading EdTech company in today's digital transformation age.
            </p>
          </div>
          <div className="py-2 px-4 w-full border text-gray-500 bg-white rounded-lg h-36">
            <h6 className="text-2xl font-bold text-blue-400">Core Values</h6>
            <br />
            <p>
            We are a mission-driven team that takes pride in efficient and ethical work, anchored on the highest degree of Excellence, Efficiency, Integrity, Creativity, and Loyalty.
            </p>
          </div>
        </div>
      </div>
      <div id="sme" className="md:w-full xs:w-height p-6 h-1/4 bg-blue-50 rounded-b-full">
        <h1 className="text-center w-full text-7xl font-bold text-gray-600 mt-32">
          Our Team
        </h1>
        <br />
        <h4 className="text-xl text-center text-gray-500">
        Behind the team are empowered individuals comprising scientists, engineers, educators, and entrepreneurs who were meticulously selected to perform and align with the Corporation’s mission, vision, values and culture. Each member of Stock Knowledge possesses the initiative to focus on the needs and best interests of its clients, while collectively working to ensure that each facet of the learning programs is delivered efficiently from conceptualization to realization, paving the way to better education for all. 
        </h4>
        <CarouselLayout />
        <br />
      </div>
      <div className="md:w-full xs:w-height space-y-14 mt-32">
        <h1 id="testimonial" className="text-center mb-32 w-full text-7xl font-bold text-gray-600">
          What our Partners Say
        </h1>
          <TestimonialLayout />
      </div>
      <div className="md:w-full xs:w-height xs:items-center flex bg-blue-100 mt-32 p-4 sm:flex-row xs:flex-col">
        <h6 id="sponsor" className="md:w-1/4 xs:text-center text-4xl font-bold md:text-left md:my-16 md:ml-28">
          Our
          <br />
          Partners
        </h6>
        <div className="w-3/4 flex justify-around flex-wrap">
          <img className="w-40" src="/images/unicef.svg" />
          <img className="" src="/images/QBO.svg" />
          <img className="" src="/images/AIM.svg" />
          <img className="w-24" src="/images/deped-manila.svg" />
          <img className="w-24" src="/images/deped-makati.svg" />
        </div>
      </div>
      <div id="article" className="mt-32">
        <ArticleCarouselLayout />
      </div>
      <div id="contactus" className="md:w-full xs:w-height p-6 h-1/4 bg-blue-50 rounded-b-full">
        <h1 className="text-center w-full text-7xl font-bold text-gray-600 mt-16">
          Send us a message
        </h1>
        <br />
        <h4 className="text-xl text-center text-gray-500">
        Send us a message if you’re interested to partner with us! 
        </h4>
        <div className="flex w-full sm:flex-row xs:flex-col xs:space-y-10 xs:items-center md:justify-around my-16 space-x-10 px-10">
          <div className="md:w-1/2 xs:w-full">
            <form className="space-y-4">
              <div>
                <label className="text-lg font-bold">Name:</label>
                <input
                  className="w-full"
                  type="text"
                  placeholder="Ex. Juan Dela Cruz"
                />
              </div>
              <div>
                <label className="text-lg font-bold">Email:</label>
                <input
                  className="w-full"
                  type="text"
                  placeholder="something@website.com"
                />
              </div>
              <div>
                <label className="text-lg font-bold">Message:</label>
                <br />
                <textarea className="w-full"></textarea>
              </div>
              <input className="w-full h-10 bg-blue-500 rounded-full text-white uppercase" type="submit" value="Send a message" />
            </form>
          </div>
          <div className="md:w-1/2 xs:w-full space-y-2">
            <div className="flex items-center text-blue-500 space-x-2">
              <svg
                className="h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <p className="text-gray-500">(+63)927-885-3760</p>
            </div>

            <div className="flex items-center text-blue-500 space-x-2">
              <svg
                className="h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <a
                href="mailto:stock.knowledge7@gmail.com "
                className="text-gray-500"
              >
                stock.knowledge7@gmail.com
              </a>
            </div>

            <div className="flex items-center text-blue-500 space-x-2">
              <svg
                className="h-4 w-4"
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
              <a
                className="text-gray-500 w-1/2"
              >
                QBO Innovation Hub, Ground Floor, DTI International Building, 375 Sen. 
Gil J. Puyat Avenue., Makati City, Metro Manila, 1209 Philippines
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
