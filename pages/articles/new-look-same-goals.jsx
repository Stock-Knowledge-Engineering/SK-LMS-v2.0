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
                <h1 className="text-6xl w-3/4 font-bold">New look, same goals– here’s Stock Knowledge’s promise to the future</h1>
                <p className="text-sm">By: Anna Marie Benzon, CEO </p>
            </div>
            <div className="w-height md:-mt-5 xs:-mt-4 md:mb-8 md:w-full xs:w-height">
                <img className="mx-auto w-3/4" src="/images/articles/new-look-same-goal/header-img.svg" />    
            </div>
            <div className="md:w-full xs:w-height flex justify-between lg:px-48 xs:px-20 text-gray-500 lg:flex-row xs:flex-col">
                <div className="w-1/4">
                    <p>Share this article</p>
                    <div className="w-full h-10 flex items-center text-blue space-x-2">
                        <img className="w-8 h-8 p-1 bg-blue-400 rounded-full inline-block" src="/images/share/facebook.svg" />
                        <img className="w-8 h-8 p-1 bg-blue-400 rounded-full inline-block" src="/images/share/twitter.svg" />
                    </div>

                </div>
                <div className="w-11/12 leading-relaxed">
                    <h1 className="text-lg text-blue-500 font-bold">Introducing the new Stock Knowledge logo</h1>
                    <br />
                    <p>
                        Anyone can define ‘stock knowledge’ but we have given it an entirely new and progressive meaning.
                        <br />
                        <br />
                        When Stock Knowledge first started in September 2016, we ran on only two sources of fuel: our determination to be a gamechanger in the educational technology industry and the genuine passion to help students across the local academic sector have a new-found appreciation for learning. Little did we know that in just less than five years, we would eventually evolve into a dynamic team of driven professionals that can offer highly sustainable innovations and bigger benefits to each of our stakeholders on a broader scale.    
                        <br />
                        <br />
                        Today, we are proud to unveil our new logo which perfectly represents the growth we have achieved so far. While we embrace new developments and brighter outlooks moving forward, we are still anchored on the same mission, vision, and values that have made Stock Knowledge one of the premier educational technology providers in the country: to create breakthrough software innovations that meet the demands of modern education; help raise the standard of learning for students around the world; and vow to perform our functions with utmost excellence, efficiency, integrity, creativity, and loyalty at all times.
                        <br />
                        <img className="mx-auto my-8" src="/images/articles/new-look-same-goal/image-1.svg" />
                        <br />
                        Perhaps, our new logo can best expound on this.
                    </p>
                    <br />
                    <h1 className="text-lg text-blue-500 font-bold">All elements matter</h1>
                    <br />
                    <p>
                        We have meticulously chosen every detail that makes up our new logo just as how we painstakingly provide worthy solutions to our clientele. After studying how color psychology works, we have come up with primary hues in our palette that not only represent the many branches of academic study but also tell of our inclusive approach in helping all students across standard education phases and modes. 
                        <br />
                        <br />
                        The green represents Science; the yellow for Engineering; and the red for Math; all blending into the main blue that signifies cutting-edge technology– just as how the Stock Knowledge platform has finally evolved into today.
                        <br />
                        <br />
                        More than the colors, our team of creatives likewise ensured that the tone for our new logo both tells of our story (two books stacked on top of one another as our continuing process of uncovering new technologies and methods of teaching), while also upholding our appeal to our various audiences– the students, educators, parents, investors, partners, and colleagues. 
                        <img className="mx-auto my-8" src="/images/articles/new-look-same-goal/image-2.svg" />
                    </p>
                    <br />
                    <h1 className="text-lg text-blue-500 font-bold">Driven towards new horizons in education and technology</h1>
                    <br />
                    <p>
                        By continually extending our capabilities and knowledge power to address the pain points of those we cater via a patient, and encouraging manner, we let students of every age or every faculty member know that we too can speak their languages and are ready to work together towards greater developments. 
                        <br />
                        <br />
                        This is because we acknowledge that developing new standards in education requires everyone’s help. We cannot just draw up a plan and not provide avenues for communication because all the voices within the education spectrum are all important. This is why our logo’s various elements– from the colors and fonts to the entire design, represent the many change agents who need to get involved in creating great strides in global education’s progress.   
                        <br />
                        <br />
                        With our new logo best encapsulating our current achievements, stand, and onward direction, there’s no question how we at Stock Knowledge recognize how we can further boost our innovations not only with great passion and determination, but also with a collective mindset that is tech-driven, bright, and dynamic. All this fuel propelling us into the future as we pursue our goal of better and more engaging education for every student. 

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