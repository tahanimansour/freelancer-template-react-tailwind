import star from "../../assets/star.svg";
function Contact() {
    return <section className="py-24">
        <div className="container">
            <h2 className="text-center text-[2.5rem] md:text-[3rem] leadind-[2.5rem] font-bold">CONTACT ME</h2>

            <div className="row justify-center gap-4 my-6">
                <span className="line bg-secondary "></span>
                <img src={star} className="w-9 h-8 " />
                <span className="line bg-secondary"></span>
            </div>

            <form className="flex flex-col max-w-3xl mx-auto">


                <label htmlFor="name" className="input_lable">Full name</label>
                <input type="text" name="name" id="name" className="contact_input" />

                <label htmlFor="email" className="input_lable">Email address</label>
                <input type="email" name="email" id="email" className="contact_input" />

                <label htmlFor="phone" className="input_lable">Phone number</label>
                <input type="tel" name="phone" id="phone" className="contact_input" />

                <label htmlFor="message" className="input_lable">Message</label>
                <textarea name="message" id="message" className="contact_input"></textarea>

                <button type="submit" className="bg-primary text-white text-xl py-4 px-7 rounded-lg mt-4 opacity-65 w-fit">Send</button>

            </form>

        </div>


    </section>
}

export default Contact;
