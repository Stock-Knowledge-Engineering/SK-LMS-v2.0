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
                Stock Knowledge at RISE Hong Kong 2019
                </h1>
                <p className="text-sm">By: Rome Salonga </p>
            </div>
            <div className="w-height md:-mt-5 xs:-mt-4 md:mb-8 md:w-full xs:w-height">
                <img className="mx-auto w-3/4" src="/images/articles/stock-knowledge-at-rise/header-img.svg" />    
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
                        On one of the most unforgettable days of the year, Stock Knowledge, together with 27 other start-ups, were selected to represent the country in 2019’s Hong Kong RISE Conference.
                        <br />
                        <br />
                        The event took place in Hong Kong Convention and Exhibition Center that lasted for four consecutive days, from July 8 to July 11 of the said year.
                        <br />
                        <br />
                        It was a great pleasure to have the company invited for the exhibition, as it is a substantial way to meet and interact with potential clients. Being picked in the government as one of the participants was enough for the company’s kickoff in the industry.
                        <br />
                        <br />
                        Our Founder and CEO, Ms. Anna Marie Benzon, got the chance to attend the talk of Dr. Eric Yang at Francis and Rose Yuen Campus in the University of Chicago. His “Building a Billion dollar AI Company in Global Education” conference was of great relevance and asset to the business.
                        <br />
                        <br />
                        Earning the trust of its future associates, the company received a lot of leads from mentorships and talks. Soon enough, Stock Knowledge would become the provider of enlightenment for newly-established companies.
                    </p>
                    <img className="mx-auto mt-8" src="/images/articles/stock-knowledge-at-rise/image-1.svg" />
                    <p className="text-xs leading-loose">
                    Stock Knowledge joined alongside other most promising startups to represent the Philippines at the newly concluded RISE Hong Kong 2019 last July 8-11, the largest tech conference in Asia, sponsored by DOST, DICT, and DTI. Companies were selected according to innovation, scalability, motivation and delegation profile. 
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