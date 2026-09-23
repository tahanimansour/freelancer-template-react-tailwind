import { FaFacebookF, FaTwitter, FaLinkedinIn, FaDribbble } from "react-icons/fa";

function Footer() {
    return <footer className="text-center bg-secondary text-white ">

        <div className="container grid  grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 py-24">

            <div>
                <h3 className="mb-6 uppercase">LOCATION</h3>
                <p className="text-[1.25rem] font-light mb-0">2215 John Daniel Drive<br />Clark, MO 65243</p>
            </div>

            <div>
                <h3 className="mb-4 uppercase">AROUND THE WEB</h3>

                <div className="row justify-center gap-3">
                    <button className="footer_icons"><FaFacebookF /></button>
                    <button className="footer_icons"><FaTwitter /></button>
                    <button className="footer_icons"><FaLinkedinIn /></button>
                    <button className="footer_icons"><FaDribbble /></button>
                </div>
            </div>

            <div>
                <h3 className="mb-4 uppercase">ABOUT FREELANCER</h3>
                <p className=" text-[1rem] md:text-[1.25rem] font-light mb-0">Freelance is a free to use, MIT licensed Bootstrap theme created by <a href="#" className="text-primary underline">Start Bootstrap.</a></p>
            </div>

        </div>

        <div className="bg-[#1a252f] text-center py-4">
            <small>Copyright © Your Website 2023</small>
        </div>

    </footer>
}

export default Footer;