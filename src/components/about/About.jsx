import star from "../../assets/star.svg";
import download from "../../assets/download.svg";

function About() {
    return <section className=" bg-primary text-white py-24">
        <div className="container">
            <h2 className="text-center font-bold  text-[2rem] md:text-[3rem] leading-10 ">ABOUT</h2>

            <div className="row justify-center gap-4 my-6">
                <span className="line bg-white"></span>
                <img src={star} className="w-9 h-8 brightness-0 invert" />
                <span className="line bg-white"></span>
            </div>

           <div className="flex flex-col md:flex-row gap-6 max-w-4xl mx-auto font-lato text-lg md:text-xl leading-7.5">
                <p className="md:w-1/2 px-3">Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                <p className="md:w-1/2 px-3">You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
            </div>

            <button type="button" className="row gap-2 mx-auto w-fit text-[1rem] md:text-[1.25rem] font-lato py-4 px-7 border-2 border-white rounded-lg mt-12">
                <img src={download} className="w-5 h-5 invert" />
                Free Download!
            </button>
        </div>

    </section>
}

export default About;
