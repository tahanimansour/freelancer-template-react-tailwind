import star from "../../assets/star.svg";
import cabin from "../../assets/cabin.png";
import cake from "../../assets/cake.png";
import circus from "../../assets/circus.png";
import game from "../../assets/game.png";
import safe from "../../assets/safe.png";
import submarine from "../../assets/submarine.png";

function Protfolio() {
    return <section className="container py-24">
        <h2 className="text-center text-secondary font-bold  text-[2rem] md:text-[2.25rem] leading-7 ">PORTFOLIO</h2>

        <div className="row justify-center gap-4 my-6">
            <span className="line bg-secondary "></span>
            <img src={star} className="w-9 h-8 "/>
            <span className="line bg-secondary"></span>
        </div>

        <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-8 px-3 mb-12">
            <img src={cabin} className="protfolio_img" />
            <img src={cake} className="protfolio_img" />
            <img src={circus} className="protfolio_img" />
            <img src={game} className="protfolio_img" />
            <img src={safe} className="protfolio_img" />
            <img src={submarine} className="protfolio_img" />
        </div>
    </section>

}

export default Protfolio;