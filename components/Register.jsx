import Link from "next/link";
import { useDispatch } from "react-redux";

import { DoLogin } from "../redux/actions/UserAction";

export default function Register(props) {
  const dispatch = useDispatch();

  return (
    <>
      <div className="w-1/2">
        <h1 className="w-full text-5xl font-bold text-blue-900 text-left">
          Register
        </h1>
        <br />
        <h3 className="text-gray-600">Tell us about yourself</h3>
        <br />
        <input
          type="text"
          className="block w-3/4 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          placeholder="Email"
        />
        <div
          class="w-3/4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong class="font-bold">Oops!</strong>
          <br />
          <span class="block sm:inline">Something seriously bad happened.</span>
        </div>
        <br />
        <input
          type="text"
          className="block w-3/4 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          placeholder="Username"
        />
        <div
          class="w-3/4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong class="font-bold">Oops!</strong>
          <br />
          <span class="block sm:inline">Something seriously bad happened.</span>
        </div>
        <br />
        <input
          type="password"
          name="password"
          className="block w-3/4 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          placeholder="Password"
        />
        <div
          class="w-3/4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong class="font-bold">Oops!</strong>
          <br />
          <ul>
            <li>test sdfs test</li>
            <li>test sdfs test</li>
            <li>test sdfs test</li>
            <li>test sdfs test</li>
            <li>test sdfs test</li>
          </ul>
        </div>
        <br />
        <input
          type="password"
          name="confirmPassword"
          className="block w-3/4 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          placeholder="Re-enter your password"
        />
        <div
          class="w-3/4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong class="font-bold">Oops!</strong>
          <br />
          <span class="block sm:inline">Something seriously bad happened.</span>
        </div>
        <br />
        <input
          type="text"
          name="firstName"
          className="block w-3/4 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          placeholder="First name"
        />
        <br />
        <input
          type="text"
          name="middleName"
          className="block w-3/4 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          placeholder="Middle name"
        />
        <br />
        <input
          type="text"
          name="lastName"
          className="block w-3/4 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          placeholder="Last name"
        />
        <br />
        <input
          type="text"
          name="mobileNo"
          className="block w-3/4 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          placeholder="Mobile Number"
        />
        <br />
        <input
          type="text"
          name="School"
          className="block w-3/4 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          placeholder="School"
        />
        <br />
        <input
          type="text"
          name="Grade Level"
          className="block w-3/4 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          placeholder="Grade Level"
        />
        <br />
        <div className="flex space-x-4">
          <button
            onClick={(e) => dispatch(DoLogin(true, { name: "test" }))}
            className="bg-green-600 text-white text-xl font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-green-200"
          >
            Confirm
          </button>
          <button
            onClick={(e) => props.changeStatus("login")}
            className="bg-blue-500 text-white text-xl font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-blue-300"
          >
            Register
          </button>
        </div>
      </div>
    </>
  );
}
