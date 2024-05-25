import Navbar from "../component/navbar"
import "../assent/css/sevilia.css"
import Footer from "../component/footer"

function Sevilla() {
    return (
        <>
            <div style={{ backgroundColor: "rgb(226, 224, 224)" }}>
                <Navbar />
                <div data-aos="flip-left" className=" row">
                    <div className="hero_img-1 p-0">
                        <div className="black_box">
                            <div className="hero_txt-0">
                                <h5>CREATIVE INTERIOR DESIGN</h5>
                                <h1>VILLA SEVILLA</h1>
                                <button type="submit">
                                    <a href="./read_more.html" style={{ color: "black", textDecoration: "none" }}>Learn More</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="second_section">
                    <div className="row h-100 p-5">
                        <div data-aos="flip-up" className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 h-100 second_left p-0">
                            <div className="second_left_innerBox1 w-25 h-25 ms-auto"></div>
                            <h1 style={{ color: "rgb(64, 64, 61)" }}>WE LOVE NOTHING MORE THAN WORKING WITH OTHER
                                BUSSINESS</h1>
                            <div className="second_left_innerBox h-25 p-3 mt-auto" style={{ color: "white" }}>Renovatio, we believe that
                                every space has the potential to be transformed into a work of art. With a passion for design
                                and a commitment to excellence, we strive to create captivating interiors that reflect the
                                unique personalities and aspirations of our clients.Our team of talented designers, architects,
                                and craftsmen collaborates closely with each client to understand their vision and bring it to
                                life.</div>
                        </div>
                        <div data-aos="flip-down" className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 h-100 second_right">
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Sevilla