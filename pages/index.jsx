import Link from "next/link";
import { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import MainLayout from "../layouts/MainLayout";

import Start from "../components/Start";

import { useUserManagementHook } from "../hooks/userManagementHook";
import { useRouter } from "next/dist/client/router";
import NavBar from "../components/NavBar";
import MobileNavBar from "../components/MobileNavBar";

export default function Home(props) {
  useUserManagementHook();

  const [status, setStatus] = useState("login");
  const user = useSelector((state) => state.UserReducer);
  const router = useRouter();

  return (
    <>
      <MobileNavBar />
      <div id="home" className="h-screen hero relative sm:w-full xs:w-height">
        <div className="flex items-center text-white xs:hidden">
          <img className="" src="images/logo.png" />
          <h1 className="text-6xl font-bold">Stock Knowledge</h1>
        </div>
        <div className="flex w-full h-1/2">
          <div className="w-1/2 pl-10 pt-10">
            <h1 className="text-8xl font-bold text-white md:text-6xl xs:text-5xl">
              Bringing together innovation and education
            </h1>
            <br />
            <p className="text-3xl text-white md:text-xl">
              When technology and teaching work <br />
              hand in hand, we get better results.
            </p>
            <br />
            <br />
            
            <br />
            <a className="rounded-full bg-blue-500 font-bold text-xl text-white py-4 px-12">
              Request for a demo
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
              className="w-3/4 h-full absolute animate__animated animate__slow animate__shakeY animate__infinite"
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
              className="w-3/4 h-full absolute animate__animated animate__slow animate__shakeY animate__infinite"
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
      <NavBar />
      <br />
      <span></span>
      <div className="md:w-full xs:w-height p-6 h-1/4">
        <h1 id="solution"  className="text-center w-full text-7xl font-bold text-gray-600">
          Our Solutions
        </h1>
        <br />
        <h4 className="text-xl text-center">
          Every learning module is customized to adapt each student’s unique
          learning styles and pacing.
        </h4>
        <br />
      </div>
      <div className="md:w-full xs:w-height md:flex-row xs:flex-col p-6 h-1/4 flex items-center">
        <div className="md:w-1/2 flex justify-end px-14">
          <img src="images/vr-couch-1.svg" />
        </div>
        <div className="md:w-1/2 px-14 xs:text-center">
          <h4 className="text-4xl font-bold text-blue-500">
            LMS with Gamification
          </h4>
          <p className="text-xl">Studying is more fun and engaging.</p>
        </div>
      </div>
      <div className="md:w-full md:flex-row xs:w-height xs:flex-col-reverse p-6 h-1/4 flex items-center">
        <div className="md:w-1/2 px-14 md:text-right xs:text-center">
          <h4 className="text-4xl font-bold text-blue-500">Extended Reality</h4>
          <p className="text-xl">
            The use of AR / VR for more immersive learning.
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
        <div className="md:w-1/2 px-14 xs:text-center">
          <h4 className="text-4xl font-bold text-blue-500">Online Education</h4>
          <p className="text-xl">
            Convenient access of courses anytime, anywhere.
          </p>
        </div>
      </div>
      <div className="md:w-full md:flex-row xs:w-height xs:flex-col-reverse p-6 h-1/4 flex items-center">
        <div className="md:w-1/2 px-14 md:text-right xs:text-center">
          <h4 className="text-4xl font-bold text-blue-500">
            Adaptive Learning
          </h4>
          <p className="text-xl">
            Effectively adapt each learner’s style and pace.
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
            Stock Knowledge was founded in September 2016 by Anna Marie Benzon,
            a physicist and educator.
            <br />
            <br />
            Today, our team is composed of scientists, engineers, educators, and
            entrepreneurs to ensure that every element of the learning program
            is delivered seamlessly from concept to completion.
            <br />
            <br />
            Owing to its forward-looking approach to the 21st educational
            technologies, Stock Knowledge positioned itself to be one of the
            most promising startups internationally.
          </p>
        </div>
        <div className="lg:w-1/2 relative space-y-10 p-20 md:w-full">
          <div className="py-2 px-4 w-full border text-gray-500 bg-white rounded-lg h-36">
            <h6 className="text-2xl font-bold text-blue-400">Mission</h6>
            <br />
            <p>
              Empower Learners and educators by creating accessible,
              cutting-edge digital tools.
            </p>
          </div>
          <div className="py-2 px-4 w-full border text-gray-500 bg-white rounded-lg h-36">
            <h6 className="text-2xl font-bold text-blue-400">Vision</h6>
            <br />
            <p>
              Be the leading EdTech company in today's digital transformation
              age.
            </p>
          </div>
          <div className="py-2 px-4 w-full border text-gray-500 bg-white rounded-lg h-36">
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
      <div id="sme" className="md:w-full xs:w-height p-6 h-1/4 bg-blue-50 rounded-b-full">
        <h1 className="text-center w-full text-7xl font-bold text-gray-600 mt-32">
          Our Subject Matter Experts
        </h1>
        <br />
        <h4 className="text-xl text-center text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h4>
        <div className="flex w-full justify-around mt-32 lg:px-10 lg:flex-row lg:space-y-0 xs:flex-col xs:items-center md:space-y-4">
          <div className="w-80 h-96 rounded-3xl relative">
            <div className="h-3/4 border bg-white absolute inset-x-0 bottom-0"></div>
            <div className="rounded-full absolute inset-0">
              <img className="m-auto" src="images/sme-1.svg" />
              <h3 className="mt-8 ml-12 text-xl font-bold text-blue-500">
                Dr. Carlos Baldo
              </h3>
              <p className="mt-1 ml-12 text-gray-500">
                PhD in Physics
                <br />
                University of the Philippines
              </p>
            </div>
          </div>
          <div className="w-80 h-96 rounded-3xl relative">
            <div className="h-3/4 border bg-white absolute inset-x-0 bottom-0"></div>
            <div className="rounded-full absolute inset-0">
              <img className="m-auto" src="images/sme-2.svg" />
              <h3 className="mt-8 ml-12 text-xl font-bold text-blue-500">
                Mr. Joseph Bandoy
              </h3>
              <p className="mt-1 ml-12 text-gray-500">
                PhD in Medical Engineering (Cand.)
                <br />
                Gwangju Insitute of Science and Technology
              </p>
            </div>
          </div>
          <div className="w-80 h-96 rounded-3xl relative">
            <div className="h-3/4 border bg-white absolute inset-x-0 bottom-0"></div>
            <div className="rounded-full absolute inset-0">
              <img className="m-auto" src="images/sme-3.svg" />
              <h3 className="mt-8 ml-12 text-xl font-bold text-blue-500">
                Dr. Resmond Reano
              </h3>
              <p className="mt-1 ml-12 text-gray-500">
                PhD in Chemical Engineering
                <br />
                University of the Philippines
              </p>
            </div>
          </div>
        </div>
        <br />
      </div>
      <div className="md:w-full xs:w-height space-y-14 mt-32">
        <h1 id="testimonial" className="text-center w-full text-7xl font-bold text-gray-600">
          What our Clients Say
        </h1>
        <div className="m-auto md:w-3/4 xs:w-height flex xs:items-center md:items-center md:justify-center xs:flex-col">
          <div className="relative p-10 md:w-1/2 xs:w-3/4 bg-blue-200 h-80 flex flex-col items-center text-left text-white rounded-l-xl" style={{background: 'linear-gradient(224.06deg, #62B4FF 0%, #0080F6 99.64%)'}}>
            <h4 className="w-full text-xl font-bold">Testimonials</h4>
            <p className="leading-loose">
              Lorem ipsum dolor sit amet, consectetur aydipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="absolute flex bottom-10 left-8">
              <svg className="h-6 w-6 opacity-50 hover:opacity-100" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <svg className="h-6 w-6 opacity-50 hover:opacity-100" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
          <div className="md:w-1/2 xs:w-3/4 h-80 bg-gray-50 flex items-center rounded-r-xl">
            <div className="bg-white h-72 w-full mr-4 px-8 py-4 space-y-4 rounded-r-xl">
              <div className="w-full flex space-x-3">
                <img className="w-16 rounded-full" src="images/article1.svg" />
                <div>
                  <h6 className="text-xl font-bold text-blue-500">Test test</h6>
                  <p className="text-blue-300 text-sm">College Student</p>
                </div>
              </div>
              <p className="leading-loose text-gray-400 lg:text-lg md:text-sm">
                "Stock Knowledge is very helpful and useful. It gives detailed information. The site is very creative and reliable. One of the most powerful educational website I know. I get high grades in Physics because of this"
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-full xs:w-height xs:items-center flex bg-blue-100 mt-32 p-4 xs:flex-col">
        <h6 id="sponsor" className="md:w-1/4 xs:text-center text-4xl font-bold md:text-left md:my-16 md:ml-28">
          Our
          <br />
          Sponsors
        </h6>
        <div className="w-3/4 flex justify-around flex-wrap">
          <img src="images/aim.svg" />
          <img src="images/animo labs.svg" />
          <img src="images/QBO.svg" />
          <img src="images/equals.svg" />
          <img src="images/she trades.svg" />
        </div>
      </div>
      <div id="article" className="mt-32">
        <h1  className="text-center md:w-full xs:w-height text-7xl font-bold text-gray-600">
          Articles
        </h1>
      </div>
      <div className="flex md:w-full xs:w-height justify-around mt-32 mb-16">
        <div>
          <img className="w-3/4 m-auto" src="images/article1.svg" />
          <h3 className="mt-8 ml-12 text-xl font-bold">
            Learning in the Digital Age
          </h3>
          <div className="flex items-end mt-1 ml-12 text-blue-500">
            <p className="">Read More</p>
            <svg
              className="h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
        <div>
          <img className="w-3/4 m-auto" src="images/article1.svg" />
          <h3 className="mt-8 ml-12 text-xl font-bold">
            Learning in the Digital Age
          </h3>
          <div className="flex items-end mt-1 ml-12 text-blue-500">
            <p className="">Read More</p>
            <svg
              className="h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
        <div>
          <img className="w-3/4 m-auto" src="images/article1.svg" />
          <h3 className="mt-8 ml-12 text-xl font-bold">
            Learning in the Digital Age
          </h3>
          <div className="flex items-end mt-1 ml-12 text-blue-500">
            <p className="">Read More</p>
            <svg
              className="h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </div>
      <div id="contactus" className="md:w-full xs:w-height p-6 h-1/4 bg-blue-50 rounded-b-full">
        <h1 className="text-center w-full text-7xl font-bold text-gray-600 mt-16">
          Send us a message
        </h1>
        <br />
        <h4 className="text-xl text-center text-gray-500">
          Send us a message for a demo to set-up your courses via the use of our
          adaptive gamified extended reality technologies. You can also send a
          message if you are interested to join us, we are currently looking for
          sales and marketing officers.{" "}
        </h4>
        <div className="flex w-full xs:flex-col xs:space-y-10 xs:items-center md:justify-around mt-32 space-x-10 px-10">
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
                href="mailto:stock.knowledge7@gmail.com "
                className="text-gray-500"
              >
                stock.knowledge7@gmail.com
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
      <div
        className="md:w-full xs:w-height p-8 space-y-4"
        style={{
          background: `linear-gradient(268.4deg, #62B4FF 0.19%, #0080F6 97.81%)`,
        }}
      >
        <div className="w-full flex align-center justify-between">
          <a href="#home" className="w-1/4 flex items-center text-xl text-white">
            <img src="images/logo-white.svg" />
            <h4>
              Stock <span className="font-bold">Knowledge</span>
            </h4>
          </a>
          <div className="w-3/4 flex items-center justify-end text-md text-white space-x-5">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms</a>
            <div className="flex align-center space-x-4">
              <img src="images/facebook.svg" />
              <img src="images/twitter.svg" />
              <img src="images/instagram.svg" />
              <img src="images/youtube.svg" />
            </div>
          </div>
        </div>
        <hr />
        <div className="flex align-center lg:text-sm md:text-xs text-white xs:flex-col xs:items-center xs:space-y-4">
          <ul className="flex justify-around md:w-3/4 xs:flex-col xs:text-center">
          <li>
                <a href="#home">Home</a>
            </li>
          <li>
                <a href="#solution">Our Solutions</a>
            </li>
            <li>
                <a href="#story">Our Story</a>
            </li>
            <li>
                <a href="#sme">Our SME</a>
            </li>
            <li>
                <a href="#testimonial">Testimonials</a>
            </li>
            <li>
                <a href="#sponsor">Sponsors</a>
            </li>
            <li>
                <a href="#article">Article</a>
            </li>
            <li>
                <a href="#contactus">Contact Us</a>
            </li>
          </ul>
          <div className="md:w-1/4 flex align-center justify-end">
            <p className="">© 2021 Stock Knowledge. All rights reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
}
