import { useCallback, useEffect, useRef, useState } from "react"
import { useEventListener } from "../hooks/useEventListener"

export default function NavBar(){
    const ref = useRef(null);
    const menuRef = useRef(null);
    const [visibility, setVisibility] = useState(null)
    const [fixNavBar, setFixNavBar] = useState(false);

    const handler = useCallback((e) =>{
      // let visibility = 1 - (window.pageYOffset/(ref.current.offsetTop + ref.current.offsetHeight))
      let visibility = (1- (window.pageYOffset/ref.current.offsetTop));
      let navbarHeight =visibility > 0.30 || visibility == NaN ? visibility*15 : 5;
      let fontSize = visibility > 0.30 ? visibility*1.875 : 1;
      const {offsetTop} = ref.current;
      // console.log(`offsetheight: ${offsetHeight}`);
      // console.log( (1- (window.pageYOffset/ref.current.offsetTop)) * offsetHeight);
      ref.current.style.height = navbarHeight+'rem';
      menuRef.current.style.fontSize = fontSize+'rem';

      if(visibility < 0.30)
        setFixNavBar(true);
      else
        setFixNavBar(false);

      if(pageYOffset <= 0){
        ref.current.style.height = 15+'rem';
        menuRef.current.style.fontSize = 1.875+'rem';
      }

      setVisibility(visibility);
    },[])

    useEffect(()=>{
      window.addEventListener('scroll', handler);
    },[])

    return(
        <>
          <div ref={ref} className={"w-full p-4 h-60 border bg-nav flex justify-center items-center " + `${fixNavBar ? 'fixed top-0' : ''}`}>
            {visibility < 0.3 && <img className="w-16" src="images/logo.png" />}
            <div className="w-full text-white text-3xl font-bold">
              <ul ref={menuRef} className="flex justify-around w-full">
                <li>Home</li>
                <li>Extended Reality</li>
                <li>Learning Management System</li>
                <li>Blogs</li>
                <li>About</li>
              </ul>
            </div>
            {visibility < 0.3 && <button className="bg-yellow-400 text-white text-xl font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 focus:ring-offset-yellow-200">Register</button>}          </div>
        </>
    )
}