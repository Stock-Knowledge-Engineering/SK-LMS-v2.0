const Footer = (props) => {
  return (
    <div
      className="md:w-full xs:w-height p-8 space-y-4"
      style={{
        background: `linear-gradient(268.4deg, #62B4FF 0.19%, #0080F6 97.81%)`,
      }}
    >
      <div className="w-full flex align-center justify-between">
        <a href="#home" className="w-1/4 flex items-center text-xl text-white">
          <img src="/images/logo-white.svg" />
          <h4>
            Stock <span className="font-bold">Knowledge</span>
          </h4>
        </a>
        <div className="w-3/4 flex items-center justify-end text-md text-white space-x-5">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms</a>
          <div className="flex align-center space-x-4">
            <img src="/images/facebook.svg" />
            <img src="/images/twitter.svg" />
            <img src="/images/instagram.svg" />
            <img src="/images/youtube.svg" />
          </div>
        </div>
      </div>
      <hr />
      <div className="flex align-center lg:text-sm md:text-xs text-white lg:flex-row xs:flex-col xs:items-center xs:space-y-4">
        <ul className="flex justify-around md:w-3/4 sm:flex-row xs:flex-col xs:text-center">
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
        <div className="lg:w-1/4 xs:w-full flex align-center lg:justify-end md:justify-center">
          <p className="">© 2021 Stock Knowledge. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;