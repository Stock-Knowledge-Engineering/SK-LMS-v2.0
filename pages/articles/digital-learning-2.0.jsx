import ArticleCarouselLayout from "../../components/ArticlesCarousel/ArticleCarouselLayout"
import Footer from "../../components/footer"
import MobileNavbar from "../../components/MobileNavBar"
import NavBar from "../../components/NavBar"

export default function NewLookSameGoal() {
    return (
        <>
            <MobileNavbar />
            <NavBar page="article" path="New look, same goals– here’s Stock Knowledge’s promise to the future"/>
            <div className="hero text-white px-20 py-10 space-y-2 md:w-full xs:w-height">
                <h1 className="text-6xl w-3/4 font-bold">
                    Digital Learning 2.0
                </h1>
                <p className="text-sm">By: Rome Salonga </p>
            </div>
            <div className="w-height md:-mt-5 xs:-mt-4 md:mb-8 md:w-full xs:w-height">
                <img className="mx-auto w-3/4" src="/images/articles/digital-learning-2.0/header-img.svg" />    
            </div>
            <div className="md:w-full xs:w-height flex justify-between lg:px-48 xs:px-20 text-gray-500 lg:flex-row xs:flex-col">
                <div className="w-1/4">
                    <p>Share this article</p>
                    <div className="w-full h-10 flex items-center text-blue space-x-2">
                        <img className="w-8 h-8 p-1 bg-blue-400 rounded-full inline-block" src="/images/share/facebook.svg" />
                        <img className="w-8 h-8 p-1 bg-blue-400 rounded-full inline-block" src="/images/share/twitter.svg" />
                    </div>

                </div>
                <div className="w-11/12">
                    <p className="leading-relaxed">
                        Love is lovelier the second time around… and so is learning. With the success of our first forum, comes another to empower digital learners in facing expected circumstances. This time the talk was given by Dr. Christian Alis, a senior data scientist at Access@aim and an assistant professor at Asian Institute of Management. Stock Knowledge caters to help turn academic problems into opportunities by providing an EdTech solution that links traditional and digital approaches together.
                        <br />
                        <br />
                        The gathering occurred on March 22,  2019, still at De La Salle University in Br. Andrew Gonzales Hall. College students from different universities were, once again, given the chance to experience SK’s Gamified Learning Tool (GLT). Dr. Alis tackled the threats of automatons in taking over current jobs, and other issues of education in the Industry 4.0.
                        <br />
                        The allotment was provided to have them speak up with their fellow students, regarding their struggles in school - of course, everyone can relate to that - effective educational settings and practices were also discussed with their peers.
                        <br />
                        <br />
                        Not only did we have yet another successful assembly. Stock Knowledge has also thrived in introducing an application that may soon become the most effective learning tool of today’s generation.
                        <br />
                        <br />
                        The purpose of the Digital Learning 2.0 open forum is to determine the challenges of digital learners, and empowering them to shape their future, especially robots are inevitably coming that could wipe out many current jobs, and other issues of education in the Industry 4.0.
                    </p>
                    <img className="mx-auto mt-8" src="/images/articles/digital-learning-2.0/image-1.svg" />
                </div>
            </div>
            <div className="">
                <ArticleCarouselLayout />
            </div>
            <Footer />
        </>
    )
}