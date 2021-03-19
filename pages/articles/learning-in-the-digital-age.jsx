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
                    Learning in the Digital Age: Gearing Towards Education 4.0</h1>
                <p className="text-sm">By: Rome Salonga </p>
            </div>
            <div className="w-height md:-mt-5 xs:-mt-4 md:mb-8 md:w-full xs:w-height">
                <img className="mx-auto w-3/4" src="/images/articles/learning-in-the-digital-age/header-img.svg" />    
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
                        On the 18th of November 2019, Stock Knowledge made an anticipated visit to the University of the Philippines Los Baños to further expand the coverage of the company’s target learners. The company’s CEO and founder Ms. Anna Marie Benzon, herself, led the conference. Technology enhanced learning was the main subject matter of the talk, focusing on how traditional teaching is no longer effective for the newer generation and turning to the usage of technology as a substitute would be a potent solution.
                        <br />
                        <br />
                        Science, for example, is a subject that students are interested in, but is a hard one to take into comprehension. Sometimes just sitting in a class and listening to your teacher can be too tedious that you’d rather learn about gravity on your own by falling on the ground head first. Gamified Learning Tool (GLT) is the way to avoid that, having fun while enhancing your knowledge is now possible thanks to Science.
                    </p>
                    <img className="mx-auto mt-8" src="/images/articles/learning-in-the-digital-age/image-1.svg" />
                    <p className="text-xs leading-tight">
                            PStock Knowledge goes to the University of the Philippines Rural High School to share the latest EdTech that most digitally savvy learners enjoy and discussing on how to maximize 21st-century technologies to teach and learn STEM subjects.
                    </p>
                </div>
            </div>
            <div className="">
                <ArticleCarouselLayout />
            </div>
            <Footer />
        </>
    )
}