import Navbar from "../component/navbar"
import "../assent/css/formats.css"
import Footer from "../component/footer"

function Formats() {
    return (
        <>
            <div style={{ backgroundColor: "rgb(226, 224, 224)" }}>
                <Navbar />
                <div data-aos="fade-down" className=" row">
                    <div className="hero_img-1 p-0">
                        <div className="black_box">
                            <div className="hero_txt-1">
                                <h5>CREATIVE INTERIOR DESIGN</h5>
                                <h1>POST FORMATS</h1>
                                <button type="submit">
                                    <a href="./read_more.html" style={{ color: "black", textDecoration: "none" }}>Learn More</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="second_section0">
                    <div className="row">
                        <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-sm-12 bg-body sec_tx">
                            <div className="txt_box ms-4 me-4">
                                <h2>LETS MAKE YOUR <br/> INTERIOR BETTER</h2>
                                <p>Interior design in architecture companies involves the creation of functional and
                                    aesthetically pleasing interior spaces within buildings. Interior designers work closely
                                    with architects and clients to understand the purpose and requirements of the space and then
                                    develop design concepts that reflect the client's needs and preferences while also adhering
                                    to building codes and regulations.</p>
                            </div>
                        </div>
                        <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12 bg-body sec_img">
                            <div className="row">
                                <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                    <div className="sec_img1"></div>
                                </div>
                                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 mt-4">
                                    <div className="sec_img2"></div>
                                </div>
                                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 mt-4">
                                    <div className="sec_img3"></div>
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
export default Formats