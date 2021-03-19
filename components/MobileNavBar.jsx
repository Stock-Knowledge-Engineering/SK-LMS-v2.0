import {useRef, useState, useEffect, useCallback} from 'react';

const Menu = (props) => {
    return (
        <ul onClick={e => {props.showMenu(false)}} className="hero top-15 py-8 h-screen w-height text-center text-4xl text-white uppercase font-bold space-y-6">
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
    )
}

const MobileNavbar = (props) => {
    const ref = useRef(null);
    const [displayMenu, setDisplayMenu] = useState(false);
    const [float, setFloat] = useState(false);

    const handler = useCallback((e) =>{
        if(window.pageYOffset > ref.current.offsetTop)
            setFloat(true);
        else
            setFloat(false);
    },[])

    useEffect(()=>{
        window.addEventListener('scroll', handler);
    },[])

    return (
        <div ref={ref} className={`${float ? 'fixed' : ''} hero flex flex-col items-center md:hidden xs:block xs:w-height z-50`}>
            <div className="w-full px-2 py-4 flex text-white justify-between">
                <a href="#home" className="flex items-center text-xl text-white">
                    <img src="/images/logo-white.svg" />
                    <h4 className="lg:flex md:hidden text-4xl">Stock <span className="font-bold">Knowledge</span></h4>
                </a >
                <svg onClick={(e) => setDisplayMenu(!displayMenu)} className="w-16 h-16 border p-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div>
            { displayMenu && <Menu showMenu={setDisplayMenu}/>}
        </div>
    )
}

export default MobileNavbar;