import "./footer.css";
function Footer() {
  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className="footer_main p-5"
      >
        <div className="row footer">
          <div className="col-xxl-8 col-sm-12 p-5">
            <div className="icons">
              <span className="wround">
              <i class="bi bi-twitter"></i>
              </span>
              <span className="wround">
              <i class="bi bi-facebook"></i>
              </span>
              <span className="wround">
              <i class="bi bi-instagram"></i>
              </span>
              <span className="wround">
              <i class="bi bi-linkedin"></i>
              </span>
            </div>
            <p>
              Welcome to our Interior Theme. simply text to the amet cing elit
              nulla pariatur.
            </p>
            <div className="row m-xxl-5 mt-xl-0">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-sm-12 info">
                <h3>Contact Info</h3>
                <p>
                <i class="bi bi-telephone-fill"></i>+977984112345
                </p>
                <p>
                  <a href="#">
                  <i class="bi bi-envelope-fill"></i>Company@gmail.com
                  </a>
                </p>
                <p>
                  <i class="bi bi-geo-alt-fill"></i>Kathmandu,nepal
                </p>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-sm-12 links">
                <h3>Active Links</h3>
                <p>Guidelines</p>
                <p>Resume templates</p>
                <p>Personal Websit templates</p>
                <p>FAQS</p>
              </div>
            </div>
          </div>
          <div className="col-xxl-4">
            <div className="form col-xxl-11 col-xl-11 col-lg-11 col-sm-12 m-auto">
              <p>
                Copyright.ALL rights reserved | Terms & Condition | privacy
                policy
              </p>
              <p id="formMessage"></p>
              <div className="input">
              <i class="bi bi-person-fill"></i>
                <input type="text" id="name" placeholder="Enter Name" />
              </div>
              <div className="input">
              <i class="bi bi-envelope-fill"></i>
                <input type="email" id="email" placeholder="Email Address" />
              </div>
              <div className="input">
              <i class="bi bi-journal-text"></i>
                <input type="text" id="subject" placeholder="Subject" />
              </div>
              <div className="input">
                <textarea
                  rows="5"
                  id="message"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <div className="input">
                <button type="button" onclick="validateForm()">
                  Send Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
