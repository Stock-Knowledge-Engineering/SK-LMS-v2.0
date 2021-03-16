import { useCallback, useEffect, useRef, useState } from "react"

export default function NavBar(){
    const ref = useRef(null);
    const menuRef = useRef(null);
    const [visibility, setVisibility] = useState(null)
    const [fixNavBar, setFixNavBar] = useState(false);

    const handler = useCallback((e) =>{
      // let visibility = 1 - (window.pageYOffset/(ref.current.offsetTop + ref.current.offsetHeight))
      let visibility = (1- (window.pageYOffset/ref.current.offsetTop));

      let navbarHeight =visibility > 0.30 || visibility == NaN ? visibility*15 : 5;
      let fontSize = visibility > 0.50 && visibility < 0.50 ? visibility*1.875 : 1;
      const {offsetTop} = ref.current;
      // console.log(`offsetheight: ${offsetHeight}`);
      // console.log( (1- (window.pageYOffset/ref.current.offsetTop)) * offsetHeight);
      ref.current.style.height = navbarHeight+'rem';
      menuRef.current.style.fontSize = fontSize+'rem';

      if(visibility < 0.10)
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
          <div style={{borderRadius: visibility < 0.3 ? '0' : '0 0 100% 100%'}} ref={ref} className={`md:flex xs:hidden hero w-full p-4 h-96 bg-nav justify-${visibility < 0.3 ? "between" : "center"} items-center ${fixNavBar ? 'fixed top-0' : ''} z-50`}>
            {visibility < 0.3 && 
              <div className="lg:w-1/4 flex items-center text-xl text-white md:w-2/12">
                <img src="images/logo-white.svg" />
                <h4 className="lg:flex md:hidden">Stock <span className="font-bold">Knowledge</span></h4>
              </div>
            }
              <div className={`lg:w-3/4 md:w-full flex text-white text-3xl font-bold`}>
                <ul ref={menuRef} className="flex justify-around w-full md:text-xs">
                  <li>
                    <a href="#home">Our Solutions</a>
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
              </div>
              {/* {visibility < 0.3 && 
                <button className="bg-yellow-400 text-white text-xl font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 focus:ring-offset-yellow-200">Register</button>
              }           */}
            </div>
        </>
    )
}