import Navbar from "../component/navbar"
import "../assent/css/blog.css"
import Footer from "../component/footer"

function Blog() {
    return (
        <>
            <div style={{ backgroundColor: "rgb(226, 224, 224)" }}>
                <Navbar />
                <div className="container mb-5">
                    <div className="row">
                        <div data-aos="flip-right" className="col-xxl-6 col-xl-6 col-lg-6 col-md-12  p-0 mt-5">
                            <div className="hero_img mt-4"></div>
                        </div>
                        <div data-aos="flip-left" className="col-xxl-6 col-xl-6 col-lg-6 col-md-12  p-2 mt-5 hero_txt">
                            <div className="slider">
                                <div id="carouselExampleAutoplaying0" className="carousel slide col-lg-12 col-md-12 col-sm-12"
                                    data-bs-ride="carousel">
                                    <div className="carousel-indicators carousel-indicators0">
                                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0"
                                            className="active" aria-current="true" aria-label="Slide 1"></button>
                                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
                                            aria-label="Slide 2"></button>
                                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
                                            aria-label="Slide 3"></button>
                                    </div>
                                    <div className="carousel-inner">
                                        <div className="carousel-item carousel-item0 active">
                                            <div className="carousel-caption carousel-caption0 d-none d-md-block">
                                                <h2>This is a Most Popolar Living Room Color of 2024, Per a New Report</h2>
                                                <button type="submit">Read More</button>
                                            </div>
                                        </div>
                                        <div className="carousel-item carousel-item0">
                                            <div className="carousel-caption carousel-caption0 d-none d-md-block">
                                                <h2>This is a Most Popolar Living Room Color of 2024, Per a New Report</h2>
                                                <button type="submit">Read More</button>
                                            </div>
                                        </div>
                                        <div className="carousel-item carousel-item0">
                                            <div className="carousel-caption carousel-caption0 d-none d-md-block">
                                                <h2>This is a Most Popolar Living Room Color of 2024, Per a New Report</h2>
                                                <button type="submit">Read More</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <h1 className="feature_heading">Featured Stories</h1>
                    <div className="row">
                        <div data-aos="zoom-in" className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12">
                            <div className="fearure_img">
                                <img src="https://s3-alpha-sig.figma.com/img/03e2/f94c/f10618ba8c18d38c9a6028137a5ae86e?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QRwI0rUkvFFg~KkiFIPrmVPVdrHW85TK1wLIcWXjT~ovIXGw8kiG58CbE5v05MXpyhl2hp5kl3lyVoesl0AzZVJh5zrRIRg8FGp92ooRO9MS3FDWZ2rZYfEd33jINpmyrlmjbVVcTPdS-YiRcu2RW~Knz9AYDHyYXWeKJrdk8lswzeeESf0y0E93luaIlvdwAWDvECbmnvgYQGp1qhXKS~c0mbQBsgEvSXaMctZ-KxobyuUWYnV-9pTs6ytNBVSf0lsgZn1MWwKj6lLbba7lJfAVJvyaJ4yklPqdx8-OcKZs5h60DyKdKsO7OIleBDdKL0H7hJJEgRRpQZgPl99Hpw__" />
                                <div className="feature_img_txt">
                                    <p>CONSULTATION</p>
                                    <h6>This involves meeting with the client to discuss their goals, preferences, and budget for the project.</h6>
                                </div>
                            </div>
                        </div>
                        <div data-aos="zoom-in" className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12">
                            <div className="fearure_img">
                                <img src="https://s3-alpha-sig.figma.com/img/460b/ab68/613284de2c92186ef44769f41901b459?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T8xCGZhJCKLMeIapZffGoOFgAuMgV65eXVfOx6I51teTPuO1Ts1fDtqrzng7HiOVuAKUF5uSvO75enxlNzrY3-IDSFpaXiEYHFgm-7lHEl4-rEGk6BdweY7KuyLaD5rs~Gaccd8xGRGbkBo78qdtNGtq~pyZ30EcAUWKKTjhLQORLcFBt-H9BRBq10okjgeGTaHBqTMtO-7Ov~F63A9VRD3MWhn9HjMsglgxn9pFitQCvBzCGMeVzkEVv7yEAXZf41Gi~JV4PQvB8t8blpClZXYIC2fBaj01gzeW5cUEi2AHCXCzwEwsiqmzlqVyIRVo9Mpg~va0RQzzzYZbdJWQWQ__" />
                                <div className="feature_img_txt">
                                    <p>SPACE PLANNING</p>
                                    <h6>The designer evaluates the available space, creates a layout, and determines the placement of furniture, fixtures, and other elements.</h6>
                                </div>
                            </div>
                        </div>
                        <div data-aos="zoom-in" className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12">
                            <div className="fearure_img">
                                <img src="https://s3-alpha-sig.figma.com/img/62f0/12c6/ac620de7be01891673f5f6f607499729?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Brp3ieQWSODnURVxJ7LRzd41yOC~37z5q8fnMKpFLJBmJ7p75oJSiMdY-~3Nm~PFFDhFAMlpiYnSCLZac~bHrhAA~qnkPZjG1xiRP8ZA1hPZpZAlijJrYFBouwe1yZK1ElvQmJ1~1BwgYP8gCFlD7RWLKbwvWNOMqKyjOb803JmCmGjkQKn3BtjWcLxbLVqkrWYk~Ni4gqzA-Nn~g5spboyZWu3HJ7eIz~X6bKxHvgc20UFi6z5jhfGR2lqxk3tUR0YPreW07OkEvhxJQ638V~HRUylHTNHuwZIaAuBnfgKswJ1yITvdOJ1rMSU8jvnOoRWqhfzWiDaXYt-cIfXvGg__" />
                                <div className="feature_img_txt">
                                    <p>CONCEPT DEVELOPMENT</p>
                                    <h6>Based on the client's preferences and the space's intended use, the designer develops a concept that includes the color scheme, materials, and style.

                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div data-aos="zoom-in" className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12">
                            <div className="fearure_img">
                                <img src="https://s3-alpha-sig.figma.com/img/1797/b769/e2be0bc070d5cd2e7c697fa20cc10e99?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MYrIP31qAplmaLzte8m6GA~ZJrMAn4C5aILitU-NV38~sJn4bZgU0343MKBP-KR~RlxJvwg4i0ShbT-VVurwNTqgl0sCttiqjtpN5j3aQ5njyensfhxmTrdHzwpfG5gRxTAgku9Etug8BDJ-yi55GlmgBuM3YHS3FGRDTjWv-A~OzkMKvTq0T1TzrWWKSBBS3X9tybJxNnI9KIJqnw-fwEDG9M9KKAK7KNyqtVM-LsR9r7pdXLM7AgsKJATYyDomxEqiq2crcuPuVvhyOegbuHS81Wp4A0AkSUrGBPUhQto2FAnmlQilf3MglR3EnfyqS4kYYahTlaXkSY7V6ymW7g__" />
                                <div className="feature_img_txt">
                                    <p>DESIGN DEVELOPMENT</p>
                                    <h6>This involves creating detailed drawings and 3D models of the space, selecting materials and finishes, and choosing furniture, fixtures, and decor.</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div data-aos="zoom-in" className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12">
                            <div className="fearure_img">
                                <img src="https://s3-alpha-sig.figma.com/img/b868/7570/c274362fd39b21b3e6a9a2bb7826c83a?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aB2UI2VWMhRiliEGG~6wXKYS6ciSbvcjAgXkb-fhi12kfCWgOEzN8Fc3j498~D3u2AX2ZJqfM2gtOuRwzrFTqT8E1CG4qIHjf2Fwr6M-6eSjcfijZHcb1-KrnrMV2QLE~jNbvDnANfBK3J1mb~aovaKhm1SPfj6Ip8VayXlB9R61kbcyF0ye2doRtED1op7ccjPnih8fD2tlkak6D-XNrWBVQyeyFDdT0youb7dqQLvy042e0qEWojCOiZd12NF9EMrSKFhI9cMVhuZQ1Tw23fqhzRmXqLleAW3rOY43wArHwbBKlCSXyavqZQGE8QWUedDSxg2Oyhgb9cO8~2ds2w__" />
                                <div className="feature_img_txt">
                                    <p>IMPLEMENTATION</p>
                                    <h6>Once the design is finalized, the designer works with contractors and suppliers to implement the plan, overseeing the construction, installation, and finishing of the space.</h6>
                                </div>
                            </div>
                        </div>
                        <div data-aos="zoom-in" className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12">
                            <div className="fearure_img">
                                <img src="https://s3-alpha-sig.figma.com/img/a19f/79ed/27618ca359b66eedde348f256be3377c?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aUdC~Og9SryAJdTLvPGjEuah5LEsaNhRXVfrmlALZKOhOuYuLhLPJHHfsv8hpaRWpqtdCUri8BcH0xOSbdd7EVTAFJgtwsGc0fmetdejKMmwswlKJ7Wktr5iJv3v1XKUUzsv4-OSk~Lfat6OyVORj-pcfDuTQmAprpPrn1f7ISiW3rFb2yLYBBqbeN~XDFpdTYfBD~Ia3~EGvJ-DseqBIdscXgG5sGDAqnlGI9XOnWUCDFRM6nZijY5W2MpswR7vokItox2odn6-lYSTI4QhpR4CJkcUzxK~f9r6pr6SxWP2M~mqQpXWfB-XG7~8fVraUccNZU70oGsz18JYvjfSNA__" />
                                <div className="feature_img_txt">
                                    <p>FINAL TOUCHES</p>
                                    <h6>The designer adds final touches, such as artwork, accessories, and lighting, to complete the space's look and feel.</h6>
                                </div>
                            </div>
                        </div>
                        <div data-aos="zoom-in" className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12">
                            <div className="fearure_img">
                                <img src="https://s3-alpha-sig.figma.com/img/978f/1e11/d38157c8b6de037348eda70bb15ff0e0?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IqiW6EMtN7RUdcXFMoYXEYeirN1hnAI-LaW2ebhKG3RsVfoI2W3ly3qgXbgRF~agY2EcCMcVEcRgiP7ptpfyGKGh6a-I2LER2Do2ElvRkueOd3k5ocOtgyAuIg~lPUcZRjy4zdaXrZIrGR1GxM7nbUxb6QI4NXes9vqRh2yeftS-2HE60sQazGfuSUNXjlJi~xqS0qdAEegC9RljpQgqha6Fr4uTghJ~85s0H6vkVuJ6gurDMX0qmLmpOzKbcF2wopjFWV0LEZRHWWV4JB4lkeM4EWw9Ih6nTIOkDET4cotbtMjkMer6FP3PYH~QXd6gr-vyclD0hGu0v0fGI1R1Nw__ " />
                                <div className="feature_img_txt">
                                    <p>Modern Design</p>
                                    <h6>Through a unique combination of engineering, construction and design disciplines and expertise, Concor delivers world className infrastructure solutions to customers and stakeholders across a broad range of</h6>
                                </div>
                            </div>
                        </div>
                        <div data-aos="zoom-in" className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12">
                            <div className="fearure_img">
                                <img src="https://s3-alpha-sig.figma.com/img/ea14/c1ed/3209e3f38b3df1ecc377b5192a7fbe67?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kNRVvCeRDLgyPbJtkrR-INB2X0hzFe0~5pIvIae0pV7WQ8KJgG~hv1AA0MBKjSKqosF-GypE-z2n-kU1ShrxScZsyS93HYSNWRgiZFSC6cU0cSiqzy8X0ndUGcnqlgGfhKilk40gg9cHi3fSw3wSuvQQc7kbg7EdcNFLrkoFat2IxA~6HowtSIb6x704FsNkoQm8fKRFEwBMf~hbSlmLz19S1M08T5RGkaG8u3paNn7IQc~yW7HiR00fEX-bEXM7l92ICX1Fp8CaD3jE7-yhhBvN47FdcyfFi59A6tZWylnTi~Exp08eF3mFkVMiBdScjnxBvUKSE27hpycYvTUBDQ__" />
                                <div className="feature_img_txt">
                                    <p>Luxurious Facilities.</p>
                                    <h6>Hub Interior Design employs over 3 000 employees, the majority of whom are based on project sites. We embrace holistic development and support for employees with the aim of being a first-choice employer within our sectors.</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="feature_btn">
                        <button type="submit">More Stories</button>
                    </div>
                </div>
                <div className="interior_img">
                    <div className="white_box0">
                        <div className="container">
                            <div data-aos="zoom-out" className="interior_box row w-75 m-auto">
                                <div className="col-xxl-6 col-xl-6 col-md-6 col-sm-12 interior_box_img">
                                    <div className="interior_img2"></div>
                                </div>
                                <div className="col-xxl-6 col-xl-6 col-md-6 col-sm-12 interior_box_txt m-md-0 p-md-1">
                                    <h1 className="type2">Interior design <br /> made simple</h1>
                                    <button type="submit">More details</button>
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

export default Blog