import Navbar from "../component/navbar"
import "../assent/css/portfolio.css"
import Footer from "../component/footer"

function Portfolio() {
    return (
        <>
            <div style={{ backgroundColor: "rgb(226, 224, 224)" }}>
                <Navbar />
                <div>
                    <div className="row">
                        <div data-aos="fade-up" className="col-xxl-6 col-xl-6 col-lg-6 col-sm-12 hero_txt0">
                            <h2 className="type2">Mordern vs.</h2>
                            <h2 className="sec_txt type2">Contemporary</h2>
                            <h2 className="type2">Design :</h2>
                            <h2 className="sec_txt type2">What's Difference?</h2>
                        </div>
                        <div data-aos="fade-down" className="col-xxl-6 col-xl-6 col-lg-6 col-sm-12 hero_img0 p-0">
                            <div className="back_img"></div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="row">
                        <div className="second_sec_img p-0">
                            <div className="white_box p-5">
                                <div className="row">
                                    <div data-aos="zoom-out-up" className="col-xxl-4 col-xl-4 col-lg-4 p-3 ps-5">
                                        <div className="box">
                                            <h1 className="box_title">01</h1>
                                            <div className="box_txt">
                                                <h2 className="type_2">Space Planning</h2>
                                                <p>We believe that good design should not only be aesthetically pleasing, but also functional and environmentally responsible. Our approach to architecture is rooted in a deep understanding of our clients’ needs and the context in which we are designing. We work closely with our clients throughout the entire design process to ensure that their vision is realized and that their space is both beautiful and practical.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-aos="zoom-out-up" className="col-xxl-4 col-xl-4 col-lg-4 p-3">
                                        <div className="box">
                                            <h1 className="box_title">02</h1>
                                            <div className="box_txt">
                                                <h2 className="type_2">Interior Design </h2>
                                                <p>We believe that good design should not only be aesthetically pleasing, but also functional and environmentally responsible. Our approach to architecture is rooted in a deep understanding of our clients’ needs and the context in which we are designing. We work closely with our clients throughout the entire design process to ensure that their vision is realized and that their space is both beautiful and practical.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-aos="zoom-out-up" className="col-xxl-4 col-xl-4 col-lg-4 p-3 pe-5">
                                        <div className="box">
                                            <h1 className="box_title">03</h1>
                                            <div className="box_txt">
                                                <h2 className="type_2">Lighting Design</h2>
                                                <p>Renovatio Interiors pays special attention to lighting design, as it plays a crucial role in creating ambiance and enhancing the overall aesthetic appeal. They design lighting plans that combine natural and artificial light sources, incorporating fixtures that complement the design concept while providing functional illumination.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div data-aos="zoom-out-right" className="row third_section">
                        <div className="t_txt">
                            <h1 className="h1_txt">INTERIOR   DECORFIRM</h1>
                            <p>Renovatio Interiors collaborates with skilled craftsmen to design and produce custom furniture and millwork pieces. They work closely with clients to understand their specific needs and preferences, creating bespoke solutions that perfectly fit the space and reflect the client's style.</p>
                        </div>
                        <div className="t_img"></div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Portfolio