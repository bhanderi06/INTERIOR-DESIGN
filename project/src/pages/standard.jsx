import Navbar from "../component/navbar"
import "../assent/css/standard.css"
import Footer from "../component/footer"
function Standard() {
    return (
        <>
            <div style={{ backgroundColor: "rgb(226, 224, 224)" }}>
                <Navbar />
                <div data-aos="fade-down" className=" row">
                    <div className="hero_img_f p-0">
                        <div className="black_box">
                            <div className="hero_txt_2">
                                <h5>CREATIVE INTERIOR DESIGN</h5>
                                <h1>STANDARD</h1>
                                <button type="submit">
                                    <a href="./read_more.html" style={{ color: "black", textDecoration: "none" }}>Learn More</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up" className="second_sec">
                    <div className="row">
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 p-5">
                            <h3>Sustainable Design</h3>
                            <p>Modern architecture often features a minimalistic and clean design aesthetic, focusing on
                                simplicity, functionality, and ample natural light. This approach enhances the building’s energy
                                efficiency, reduces visual clutter, and creates a more visually appealing experience.</p>
                            <h1 style={{ color: "rgb(85, 77, 77)" }}>WE LOVE <br /> NOTHING MORE <br /> THAN WORKING <br /> WITH OTHER <br />
                                BUSINESSES</h1>
                        </div>
                        <div className="row col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div className="row w-50">
                                <div data-aos="zoom-in" className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                    <div className="sec_img1"></div>
                                </div>
                                <div data-aos="zoom-in" className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                    <div className="sec_img2"></div>
                                </div>
                            </div>
                            <div className="row w-50">
                                <div data-aos="zoom-in" className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                    <div className="sec_img3"></div>
                                </div>
                                <div data-aos="zoom-in" className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                    <div className="sec_img4"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Standard