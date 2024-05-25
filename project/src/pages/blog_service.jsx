import Navbar from "../component/navbar"
import "../assent/css/service.css"
import Footer from "../component/footer"

function BlogService() {
    return (
        <>
            <div style={{ backgroundColor: "rgb(226, 224, 224)" }}>
                <Navbar />
                <div>
                    <div data-aos="fade-down" className=" row">
                        <div className="hero_img_0 p-0">
                            <div className="black_box">
                                <div className="hero_txt-0">
                                    <h5>CREATIVE INTERIOR DESIGN</h5>
                                    <h1>OUR SERVICE</h1>
                                    <button type="submit">
                                        <a href="./read_more.html" style={{ color: "black", textDecoration: "none" }}>Learn More</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div data-aos="fade-up" className="service_section">
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 bg-black service_img_box1"></div>
                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 bg-info service_img_box2"></div>
                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 service_tx">
                            <h1 style={{ marginTop: "20px" }}>OUR SERVICE </h1>
                            <p>Have a list of services to display You can
                                list them here with a short description
                                of each.
                            </p>
                            <ul>
                                <ol>
                                    <li>OFFICE</li>
                                    <li>HOSPITAL</li>
                                    <li>COMMERICAL</li>
                                    <li>COLLEGES</li>
                                </ol>
                            </ul>
                        </div>
                    </div>
                    <p className="text-p">Throughout the process, the designer considers factors such as functionality, safety,
                        sustainability, and the client's budget and timeline to create a space that meets the client's needs and
                        preferences.</p>
                </div>
                <Footer />
            </div >
        </>
    )
}

export default BlogService