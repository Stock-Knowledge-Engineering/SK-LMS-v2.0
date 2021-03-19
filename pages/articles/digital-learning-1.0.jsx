import ArticleCarouselLayout from "../../components/ArticlesCarousel/ArticleCarouselLayout"
import Footer from "../../components/Footer"
import MobileNavbar from "../../components/MobileNavBar"
import NavBar from "../../components/NavBar"

export default function NewLookSameGoal() {
    return (
        <>
            <MobileNavbar />
            <NavBar page="article" path="New look, same goals– here’s Stock Knowledge’s promise to the future"/>
            <div className="hero text-white px-20 py-10 space-y-2 md:w-full xs:w-height">
                <h1 className="text-6xl w-3/4 font-bold">
                    Digital Learning 1.0
                </h1>
                <p className="text-sm">By: Rome Salonga </p>
            </div>
            <div className="w-height md:-mt-5 xs:-mt-4 md:mb-8 md:w-full xs:w-height">
                <img className="mx-auto w-3/4" src="/images/articles/digital-learning-1.0/header-img.svg" />    
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
                        “Learning is a treasure that will follow its owner everywhere.” Just like what you have read from that quotation, learning can be continually found at all points. Since technology has been around for years and has affected both education and the students’ way of learning, why not take advantage of its prominence to make studying way more interesting?
                        <br />
                        <br />
                        On March 2, 2019 Stock Knowledge organized an open forum attended by college students from different top universities at Animo Labs in Andrew Gonzales Bldg., De La Salle University. The forum centralized on technology’s positive and negative impacts and was led by University of the Philippines Los Baños’ assistant professor, Dr. Reslond L. Reaño.
                        <br />
                        <br />
                        Stock Knowledge’s Gamified Learning Tool (GLT) was introduced during the talk. Student leaders were given the chance to use the app as to which, they say, differs from their usual academics methods. Unlike dull classroom discussions, you get to learn while you play. A perfect example of hitting two birds with one stone - only that stone happens to be your mobile phone.
                        <br />
                        <br />
                        The paradigm shift in education has been gradually happening due to the changing behaviors of the millennial students heavily influenced by current technologies. Some schools haven’t realized, catching up, and fully embraced digital approaches to be relevant in the Information Age. There are drawbacks of purely traditional and employing fully digital in terms of delivering quality education.
                        <br />
                        <br />
                        Stock Knowledge is here to help turn problems into opportunities by providing an EdTech solution that bridges the gap between traditional and digital approaches.
                    </p>
                    <img className="mx-auto mt-8" src="/images/articles/digital-learning-1.0/image-1.svg" />
                </div>
            </div>
            <div className="">
                <ArticleCarouselLayout />
            </div>
            <Footer />
        </>
    )
}