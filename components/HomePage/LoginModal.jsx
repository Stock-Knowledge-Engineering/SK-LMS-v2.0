const LoginModal = (props) => {
    return (
        <div style={{background: 'rgba(238, 238, 238, 0.5)'}} className="fixed h-screen flex w-full z-50">
        <div className="w-11/12 bg-white h-4/5 inset-0 m-auto flex rounded-2xl  animate__animated animate__fadeInDown">
          <div style={{background: `linear-gradient(white, rgb(0, 128, 246))`}} className="rounded-l-2xl w-1/2 bg-blue-400 relative overflow-hidden">
            <img className="absolute w-full h-full rounded-2xl" src="/images/bg-home-modal.svg" />
          </div>
          <div className="w-1/2 relative">
            <svg onClick={e => props.showModal(false)} className="absolute right-0 w-8 h-8 mr-4 mt-4 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div className="w-full h-full flex justify-center align-center">
            <form className="flex items-center">
              <div className="w-full flex items-center flex-col">
                <div className="lg:w-96 md:w-80 flex items-center">
                  <img className="w-16 " src="/images/logo.png" />
                  <p className="text-gray-500 text-3xl">Stock <span className="text-blue-500 font-bold">Knowledge</span></p>
                </div>
                <label className="w-full mt-10 text-left font-bold text-4xl text-gray-700">Login</label>
                <input className="w-full mt-4 border-none bg-gray-100 rounded-xl" type="text" placeholder="Username" />
                <input className="lg:w-full md:w-full mt-2 border-none bg-gray-100 rounded-xl" type="password" placeholder="Password" />
                <div className="w-full mt-2 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" name="rememberpassowrd" />
                    <label className="text-gray-500" for="rememberpassword">Remember me?</label>
                  </div>
                  <a className="font-bold text-blue-500">
                    Forgot Password?
                  </a>
                </div>
                <input className="bg-blue-500 text-white text-2xl font-bold w-full mt-10 py-3 rounded-full" type="submit" value="Login" />
                <a className="text-gray-500 mt-6" href="">
                  Don't have an account? <span className="text-blue-400 font-bold">Sign Up.</span>
                </a>
              </div>
            </form>
            </div>
          </div>
        </div>
      </div>
    )
}

export default LoginModal;