import avatar from "../../assets/avatar.svg"
import star from "../../assets/star.svg"
function Hero() {
  return <section className="hero bg-primary text-white text-center pt-40 pb-24">
    <img src={avatar} className="w-[240px] mx-auto mb-8" />
    <h1 className="font-montserrat  text-[2rem] md:text-[2.75rem] leading-11    ">START BOOTSTRAP</h1>
    <div className="row justify-center gap-4 my-6">
      <span className="w-28 h-1 bg-white rounded-full"></span>
      <img src={star} className="w-9 h-8 invert"/>
      <span className="w-28 h-1 bg-white rounded-full"></span>
    </div>
    <p className="font-lato text-[1rem] md:text-[1.25rem] font-light">Graphic Artist - Web Designer - Illustrator</p>
  </section>
}

export default Hero;
