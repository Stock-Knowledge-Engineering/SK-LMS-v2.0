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
                    Stock Knowledge at ITU Telecom World 2019 in Budapest
                </h1>
                <p className="text-sm">By: Rome Salonga </p>
            </div>
            <div className="w-height md:-mt-5 xs:-mt-4 md:mb-8 md:w-full xs:w-height">
                <img className="mx-auto w-3/4" src="/images/articles/stock-knowledge-at-itu/header-img.svg" />    
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
                        Following the accomplishment of the company in Hong Kong, September 10, 2019 is yet another day to remember.
                        <br />
                        <br />
                        Anna Marie Benzon, Stock Knowledge’s founder and CEO, is one of the selected ITU fellows and EQUALS delegates worldwide. Stock Knowledge had also made it to the shortlist of ITU Telecom World Awards - SME category to showcase our EdTech solution before influential ICT industry stakeholders, high-level government officials, regulators, private companies, and smaller technology pioneers. The International Telecommunication Union (ITU) and International Trade Centre (ITC) spearheaded this big annual event. ITU is a specialized agency of the United Nations whose purpose is to correlate with information and communication technologies throughout the world.
                        <br />
                        <br />
                        Our company was privileged to have an all-access pass at the ITU Telecom World 2019 and a fully-funded trip to Hungary. The event was indeed an exceptional experience for us as the most influential ICT industrial stakeholders convened, where they were able to share their knowledge and expertise with newer companies.
                        <br />
                        <br />
                        Along with other start-ups around the globe, we had the opportunity to discuss our EdTech’s potential and how it would change the younger generation’s attitude towards learning.
                    </p>
                    <img className="mx-auto mt-8" src="/images/articles/stock-knowledge-at-itu/image-1.svg" />
                    <p className="text-xs leading-loose">
                        Stock Knowledge was in Budapest, Hungary!
                        <br/>
                        As a selected ITU fellow and EQUALS delegate, Anna Marie Benzon, has showcased and pitched Stock Knowledge in front of investors, international jury and analyst in the newly concluded International Telecommunication Union (ITU) World 2019 in Budaest, Hungary last September 9-12.                    </p>
                </div>
            </div>
            <div className="">
                <ArticleCarouselLayout />
            </div>
            <Footer />
        </>
    )
}