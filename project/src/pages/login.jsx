import Navbar from "../component/navbar"
import "../assent/css/login.css"
import Footer from "../component/footer"

function LogIn() {
    return (
        <>
            <div style={{ backgroundColor: "rgb(226, 224, 224)" }}>
                <Navbar />
                <div className="back">
                    <h1 style={{ textAlign: "center", paddingTop: "80px", color: "red" }}>Log In</h1>
                    <div className="front">
                        <form id="loginForm">
                            <div className="mb-3">
                                <label for="username" className="form-label" style={{ color: "white", fontWeight: "bold" }}>Username or email</label>
                                <input type="email" className="form-control" id="username" />
                            </div>
                            <div className="mb-3">
                                <label for="password" className="form-label" style={{ color: "white", fontWeight: "bold" }}>Password</label>
                                <input type="password" className="form-control" id="password" />
                            </div>
                            <div>
                                <a href="#" style={{ color: "bisque", textDecoration: "none", marginLeft: "199px" }}>Forgot password?</a>
                            </div>
                            <div>
                                <button type="button" onclick="validateLogin()"
                                    style={{ width: "100%", backgroundColor: "red", color: "white", border: "none", borderRadius: "5px", padding: "7px", marginTop: "30px" }}>Sign
                                    in</button>
                            </div>
                        </form>
                        {/* <hr style={{ color: "white", opacity: "1", marginTop: "30px" }}> */}
                        {/* <h6 style={{ color: "white", textAlign: "center", marginTop: "30px" }}><i className="bi bi-google" */}
                        <h6 style={{ color: "white", textAlign: "center", marginTop: "23px" }}>Are you new? <a href="#" style={{ color: "bisque", textDecoration: "none", marginLeft: "5px" }}> Create an Account</a></h6>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default LogIn