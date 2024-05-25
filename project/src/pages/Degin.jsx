import Navbar from "../component/navbar"
import "../assent/css/degin.css"
import Footer from "../component/footer"

function Degin() {
    return (
        <>
            <div style={{ backgroundColor: "rgb(226, 224, 224)" }}>
                <Navbar />
                <div data-aos="flip-left" className=" row">
                    <div className="hero_img3 p-0">
                        <div className="black_box">
                            <div className="hero_txt1">
                                <h5>CREATIVE INTERIOR DESIGN</h5>
                                <h1>STANDER DESIGN</h1>
                                <button type="submit">
                                    <a href="./read_more.html" style={{ color: "black", textDecoration: "none" }}>Learn More</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="second_sections text-center">
                    <div className="sec_box1">
                        <div className="sec_box2"></div>
                        <h2 style={{ color: "gray" }}>Solution for every corner</h2>
                        <h1>"Designing spaces for the way we live today and tomorrow."</h1>
                    </div>
                    <div className="row images">
                        <div data-aos="flip-up" className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12">
                            <div className="sec_img-1"></div>
                        </div>
                        <div data-aos="flip-down" className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12">
                            <div className="sec_img-2"></div>
                        </div>
                        <div data-aos="flip-up" className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12">
                            <div className="sec_img-3"></div>
                        </div>
                        <div data-aos="flip-down" className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12">
                            <div className="sec_img-4"></div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Degin