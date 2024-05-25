import Navbar from "../component/navbar"
import "../assent/css/pavilion.css"
import Footer from "../component/footer"

function Pavilion() {
    return (
        <>
            <div style={{ backgroundColor: "rgb(226, 224, 224)" }}>
                <Navbar />
                <div data-aos="fade-down" className=" row">
                    <div className="hero_img-1 p-0">
                        <div className="black_box">
                            <div className="hero_txt-1">
                                <h5>CREATIVE INTERIOR DESIGN</h5>
                                <h1>PAVILION O</h1>
                                <button type="submit">
                                    <a href="./read_more.html" style={{ color: "black", textDecoration: "none" }}>Learn More</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-in" className="second_section">
                    <div className="row h-50">
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-sm-12 first_box"></div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-sm-12">
                            <h1 className="interior_heading">LETS MAKE YOUR INTERIOR BETTER</h1>
                            <p className="pt-xxl-5 pt-lg-3 pt-sm-2">Interior design in architecture companies may involve the selection of materials, furnishings, and lighting to create a cohesive design scheme that enhances the overall aesthetic of the space. The interior designer may also work with engineers and contractors to ensure that the design is feasible and can be implemented within the construction budget.</p>
                        </div>
                    </div>
                    <div className="row h-50 ">
                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-sm-12 interior_1 "></div>
                        <div className="col-xxl-4 col-xl-3 col-lg-3 col-sm-3 h-75 interior_2"></div>
                        <div className="col-xxl-1 col-xl-1 col-lg-1 col-sm-1 h-25 interior_3"></div>
                    </div>
                </div>
                <div data-aos="zoom-out" className="third_section">
                    <div className="container">
                        <div className="row">
                            <div className="third_section_img"></div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Pavilion