import Navbar from "../component/navbar"
import "../assent/css/manila.css"
import Footer from "../component/footer"

function Manila() {
    return (
        <>
            <div style={{ backgroundColor: "rgb(226, 224, 224)" }}>
                <Navbar />
                <div data-aos="fade-down" className=" row">
                    <div className="hero_img2 p-0">
                        <div className="black_box">
                            <div className="hero_txt-0">
                                <h5>CREATIVE INTERIOR DESIGN</h5>
                                <h1>VILLA MANILA</h1>
                                <button type="submit">
                                    <a href="./read_more.html" style={{ color: "black", textDecoration: "none" }}>Learn More</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="second_section0">
                    <div className="sec_box">
                        <h1>Our mission is to offer you hope and freedom.</h1>
                        <div className="container">
                            <div className="row pt-5">
                                <div data-aos="zoom-in-up" className="col-xxl-4 col-xl-4 col-lg-6 col-md-12 col-sm-12">
                                    <div className="sec_img_1"></div>
                                    <h4>spicifications</h4>
                                    <p>Interior design in architecture companies involves the creation of functional and
                                        aesthetically pleasing interior spaces within buildings. Interior designers work closely
                                        with architects and clients to understand the purpose and requirements of the space and
                                        then develop design concepts that reflect the client's needs and preferences while also
                                        adhering to building codes and regulations.</p>
                                </div>
                                <div data-aos="zoom-in-down" className="col-xxl-4 col-xl-4 col-lg-6 col-md-12 col-sm-12">
                                    <div className="sec_img_2"></div>
                                    <h4>spicifications</h4>
                                    <p>Design concept: This outlines the overall vision for the space, including the style,
                                        color palette, and design elements that will be used.

                                        Floor plans and elevations: These are detailed drawings that show the layout of the
                                        space, including the placement of walls, windows, doors, and furniture.

                                        Material and finishes: This includes the selection of materials such as flooring, wall
                                        finishes, and lighting fixtures that will be used in the space. </p>
                                </div>
                                <div data-aos="zoom-in-up" className="col-xxl-4 col-xl-4 col-lg-12 col-md-12 col-sm-12">
                                    <div className="sec_img_3"></div>
                                    <h4>spicifications</h4>
                                    <p>Overall, interior design is an important aspect of architecture that focuses on creating
                                        functional, visually appealing, and comfortable interior spaces that meet the needs of
                                        the building's occupants.</p>
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

export default Manila