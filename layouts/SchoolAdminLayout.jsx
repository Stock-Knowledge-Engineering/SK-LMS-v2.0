import {useDispatch} from 'react-redux';
import Menu from '../components/Menu';
import MiniProfile from '../components/MiniProfile';

import {DoLogin} from "../redux/actions/UserAction";

export default function SchoolAdminLayout(props){
    const dispatch = useDispatch();

    const Logout = () => {
        dispatch(DoLogin(false, null));
        localStorage.setItem("isLogin", false);
        localStorage.removeItem("user");
      };

    return(
        <>
            <div id="dashboard" className="flex">
                <div id="dash-menu" className="text-white w-1/5 h-screen">
                    <MiniProfile />
                    <div className="clear-both"></div>
                    <Menu />
                    {/* <ul className="px-4">
                        <br />
                        <hr />
                        <br />
                        <li className="mb-2 flex hover:bg-white hover:text-black">
                            <svg className="mr-4 h-6 w-6 inline-block self-center" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            <a href="" className="inline-block">Home</a>
                        </li>
                        <li className="mb-2 flex hover:bg-white hover:text-black">
                        <svg className="mr-4 h-6 w-6 inline-block self-center" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            <a href="" className="inline-block">Profile</a>
                        </li>
                        <li className="mb-2 flex hover:bg-white hover:text-black">
                        <svg className="mr-4 h-6 w-6 inline-block self-center" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path className="st0" d="M20.7,3.5c-0.3-0.3-0.7-0.5-1.2-0.5h-1.5V2.5c0-0.6-0.5-1-1-1H7c-0.6,0-1,0.5-1,1v0.5H4.5
	                                            C4,2.9,3.6,3.1,3.3,3.5C3,3.8,2.9,4.2,3,4.7c0.4,2.4,1.9,4.5,4,5.7c0.2,0.5,0.4,0.9,0.7,1.3c0.8,1.3,1.8,2.2,2.8,2.7
	                                            c0.1,1.1-0.6,2.1-1.7,2.4c0,0,0,0,0,0c-0.2,0.1-0.4,0.2-0.4,0.5v2.2H7.5c-0.8,0-1.5,0.7-1.5,1.5v1.2c0,0.3,0.2,0.5,0.5,0.5h11.1
	                                            c0.3,0,0.5-0.2,0.5-0.5v-1.2c0-0.8-0.7-1.5-1.5-1.5h-0.9v-2.2c0-0.2-0.2-0.4-0.4-0.5c0,0,0,0,0,0c-1.1-0.3-1.8-1.3-1.7-2.4
	                                            c1.1-0.4,2-1.4,2.8-2.7c0.2-0.4,0.5-0.9,0.7-1.3c2.1-1.2,3.6-3.3,4-5.7C21.1,4.2,21,3.8,20.7,3.5z M3.9,4.5c0-0.2,0-0.3,0.1-0.4
	                                            C4.1,4,4.3,3.9,4.5,3.9h1.5v0.9c0,1.4,0.2,2.8,0.5,4C5.1,7.8,4.2,6.2,3.9,4.5z M16.6,20.4c0.3,0,0.5,0.2,0.5,0.5v0.7H7v-0.7
	                                            c0-0.3,0.2-0.5,0.5-0.5H16.6z M14.7,17.7v1.8H9.4v-1.8H14.7z M10.6,16.7c0.1-0.1,0.2-0.3,0.3-0.4c0.3-0.5,0.5-1.1,0.5-1.7
	                                            c0.2,0,0.3,0,0.5,0c0.2,0,0.4,0,0.6,0c0,0.8,0.3,1.5,0.8,2.1L10.6,16.7L10.6,16.7z M17.1,4.8c0,2.4-0.6,4.7-1.6,6.4
	                                            c-1,1.6-2.2,2.5-3.5,2.5c-1.3,0-2.6-0.9-3.5-2.5c-1-1.7-1.6-4-1.6-6.4V2.5c0,0,0-0.1,0.1-0.1h10c0,0,0.1,0,0.1,0.1V4.8z M20.1,4.5
	                                            c-0.3,1.7-1.2,3.2-2.5,4.3c0.3-1.3,0.5-2.6,0.5-4V3.9h1.5c0.2,0,0.3,0.1,0.4,0.2C20.1,4.2,20.1,4.4,20.1,4.5z M15,6.4
	                                            c-0.1-0.2-0.2-0.3-0.4-0.3l-1.5-0.2l-0.7-1.3c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2,0-0.4,0.1-0.4,0.3l-0.7,1.3L9.4,6.1
	                                            C9.2,6.1,9.1,6.3,9,6.4C9,6.6,9,6.8,9.1,6.9l1.1,1L10,9.5c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0L12,9.3l1.3,0.7
	                                            c0.1,0,0.1,0.1,0.2,0.1c0.1,0,0.2,0,0.3-0.1C14,9.8,14.1,9.6,14,9.5L13.8,8l1.1-1C15,6.8,15,6.6,15,6.4z M12.9,7.5
	                                            c-0.1,0.1-0.2,0.3-0.1,0.4l0.1,0.7l-0.7-0.4c-0.1,0-0.1-0.1-0.2-0.1s-0.2,0-0.2,0.1l-0.7,0.4l0.1-0.7c0-0.2,0-0.3-0.1-0.4l-0.5-0.5
	                                            l0.8-0.1c0.2,0,0.3-0.1,0.4-0.3L12,5.9l0.3,0.7c0.1,0.1,0.2,0.2,0.4,0.3l0.8,0.1L12.9,7.5z"/>
                            </svg>
                            <a href="" className="inline-block">Leaderboard</a>
                        </li>
                        <li className="mb-2 flex hover:bg-white hover:text-black">
                            <svg className="mr-4 h-6 w-6 inline-block self-center" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                            <a href="" className="inline-block">Notifications</a>
                        </li>
                        <li className="mb-2 flex hover:bg-white hover:text-black">
                            Teachers
                        </li>
                        <li className="mb-2 flex hover:bg-white hover:text-black">
                            Students
                        </li>
                        <li className="mb-2 flex hover:bg-white hover:text-black">
                            Class Schedules
                        </li>
                        <li className="mb-2 flex hover:bg-white hover:text-black">
                            Subjects
                        </li>

                        <br />
                        <hr />
                        <br />
                        <li className="mb-2 flex hover:bg-white hover:text-black">
                        <svg className="mr-4 h-6 w-6 inline-block self-center" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                            <a href="" className="inline-block">Settings</a>
                        </li>
                        <li className="mb-2 flex hover:bg-white hover:text-black">
                        <svg className="mr-4 h-6 w-6 inline-block self-center"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                            <a href="" className="inline-block">Help</a>
                        </li>
                        <li className="mb-2 flex hover:bg-white hover:text-black" onClick={e => {Logout()}}>
                            <svg className="mr-4 h-6 w-6 inline-block self-center" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                            </svg>
                            <a href="" className="inline-block">Logout</a>
                        </li>
                    </ul> */}
                </div>
                <div id="dash-content" className="p-4 w-4/5">
                    <div id="dash-home">
                        <div id="search" className="text-right">
                            <input type="text" placeholder="Quick search..." />
                        </div>
                        {props.children}
                    </div>
                </div>
            </div>
        </>
    )
}

