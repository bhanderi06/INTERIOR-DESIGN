import Navbar from "../component/navbar"
import "../assent/css/contact.css"
import Footer from "../component/footer"

function Contact() {
    return (
        <>
            <div style={{ backgroundColor: "rgb(226, 224, 224)" }}>
                <Navbar />
                <div data-aos="flip-up" className="hero">
                    <div className="row">
                        {/* <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 hero_img"><i
                        className="fa-solid fa-circle-play"></i></div>  */}

                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 hero_img">
                            <a target="_blank" href="https://youtu.be/_ZYrmy0Q6Tg?si=ycjQaboGpHZT87Hks">
                                <i className="bi bi-play-circle-fill play"></i>
                            </a>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 hero_txt">
                            <h5>CONTACT US</h5>
                            <h1>Lets make somthing <br /> beautiful together</h1>
                            <input type="text" placeholder="First name" />
                            <input type="text" placeholder="Last name" />
                            <input type="text" placeholder="Email address" />
                            <input type="text" placeholder="Subject" />
                            <input type="text" placeholder="Message" /><br />
                            <button type="submit">View More</button>
                        </div>
                    </div>
                </div>
                <div data-aos="flip-down" className="second_section">
                    <div className="row">
                        <div className="sec_img p-0">
                            <div className="white_box">
                                <div className="w_box">
                                    <h1>CONSULATION NOW</h1>
                                    <p>Renovatio, we believe that every space has the potential to be transformed into a work of
                                        art. With a passion for design and a commitment to excellence, we strive to create
                                        captivating interiors that reflect the unique personalities and aspirations of our
                                        clients.Our team of talented designers, architects.</p>
                                    <button type="submit">Contact US</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="third_sec">
                    <div className="row">
                        <div data-aos="fade-left" className="col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12 third_map p-0">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29727207.815887693!2d111.80748986445847!3d-24.561242717683097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2b2bfd076787c5df%3A0x538267a1955b1352!2sAustralia!5e0!3m2!1sen!2sin!4v1712926782186!5m2!1sen!2sin"
                                width="100%" height="100%" style={{ border: "0" }} allowfullscreen="" loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div data-aos="fade-up-right" className="col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-sm-12 third_txt">
                            <div className="details" style={{ marginTop: "300px" }}>
                                <span><i className="bi bi-telephone-fill"></i></span>
                                <p>CALL FOR CONSULATION <br /> 123-456-7890</p>
                            </div>

                            <div className="details">
                                <span><i className="bi bi-geo-alt-fill"></i></span>
                                <p>OFFICE LOCATION <br /> Bali,indonesia</p>
                            </div>
                            <div className="details">
                                <span><i className="bi bi-envelope-fill"></i></span>
                                <p>DROP US A LINK brsupport@aarik.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Contact