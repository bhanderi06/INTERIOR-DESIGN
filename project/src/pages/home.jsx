import "../assent/css/index-1.css"
import Footer from "../component/footer";
import Navbar from "../component/navbar";
function Home() {

    // function validateForm() {
    //     let name = document.getElementById("name").value;
    //     let email = document.getElementById("email").value;
    //     let subject = document.getElementById("subject").value;
    //     let message = document.getElementById("message").value;

    //     if (name.trim() == "" || email.trim() == "" || subject.trim() == "" || message.trim() == "") {
    //         document.getElementById("formMessage").innerHTML = "Please fill in all fields.";
    //         formMessage.style.color = 'red';
    //     } else {
    //         console.log("Form submitted successfully");
    //         formMessage.style.color = 'green';
    //         document.getElementById("name").value = "";
    //         document.getElementById("email").value = "";
    //         document.getElementById("subject").value = "";
    //         document.getElementById("message").value = "";
    //         document.getElementById("formMessage").innerHTML = "Form submitted successfully!";
    //     }
    // }
    return (
        <>
            <div style={{ backgroundColor: "rgb(226, 224, 224)" }}>
                <div>
                    <div className="container-fluid">
                        <Navbar />
                        <div>
                            <div className="container-fluid">
                                <div className="row ">
                                    <div className="col-xxs-12 col-xs-12 col-sm-12 col-md-6 col-lg-5 col-xl-5 col-xxl-5">
                                        <div className=" p-5">
                                            <div className=" text-danger pb-5">
                                                <h4>
                                                    <b>TRUSTED EXPERIENCE</b>
                                                </h4>
                                            </div>
                                            <div className="pb-5">
                                                <h1>
                                                    <b>We Create Paworful & Simple Interior Design Solutions</b>
                                                </h1>
                                            </div>
                                            <div>
                                                <button type="button" className="btn btn-danger rounded-0 btn-lg ">
                                                    <a href="./read_more.html" style={{ color: "white", textDecoration: "none" }}>READ MORE</a>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sx-12 col-sm-12 col-md-6 col-lg-7 col-xl-7 col-xxl-7">
                                        <img data-aos="zoom-in" className="hero1 w-100 h-100" src="https://s3-alpha-sig.figma.com/img/8ce4/5d59/cd21bdd7d292ad73c84ecbaf728d3ab8?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VwYForlOIIcUMftSdzOrarf5VauzhQlyPAQ5XIZ6oKCMjQH79LvsmH1l2cQCWFB3Hi~QPIv22W14mtwaJvhaIAFpk5BO8VdjpWAbiNUYBLhnN688P-UncYXlKNQ6CARNpu68vhEU0K10MNh5ar9Ya7-3-QZq3tLPZY-c-Vr-vJDuqEIZfiq4gofUiCDbIWEfKET42Jftov2l1ZCdyipbFSv3ld4oHL8PewLDNgepUdm~nw9epWvTvQ6uCnuwjmuW2bWkbWno0Y5AxFJoXkTe8ACu-VMFqLhxA3jJpNdjXma-C5AVFZnSzZLltOR7tc0QPfeW-mq4NPBThjbhWrxiQw__" alt="Image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="container-fluid text-center">
                                <div className="row g-5 p-5">

                                    <div className="col-6 col-sm-4 col-md-2 col-lg-2 col-xl-2 col-xxl-2" style={{ marginLeft: "113px" }}>
                                        <div className="p-2 border rounded-3 bg-light">
                                            <img src="https://s3-alpha-sig.figma.com/img/3a0b/2d76/33b0584c33a74fc38f690b74b1f9b154?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TL5HRcfslixSeKtQY~BQ9QspLnMFZuGkXZ3GjK~NcJJpBDT78hYXzaE--OZuV2TzI2EHaiRIcX7zZ~GK1NYWczS~DyusD4h5vqviRWumR255EcBk9ZGRuqHI2OlZTDzP6e5gvCx6F8hmhiCdcriiwha6V2pRJgBKleyh9jzFix7eIkEeQzAF4YNH4qMrG4QmQW4dM9vUoxw54WclMxdUxkaaIsvC74MRBlbwvR~I~QvFkrT6TIizi5RvXnmbyqsnyjCgFHpusX42zYk-HAnDSxiQ0ODQo3mS9JiGbqGEAoa507ssZrKFYp-N4iKGZ3ITHJ1FQcMiOGmEjKcdxkSGqQ__" className="w-50" alt="" />
                                            <div className="text-danger"><b>SOFA</b></div>
                                        </div>
                                    </div>
                                    <div className="col-6 col-sm-4 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                                        <div className="p-2 border rounded-3 bg-light">
                                            <img src="https://s3-alpha-sig.figma.com/img/6bda/c684/e6934cc413391ed659eca986ebfcd81f?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TWCvfuzxxhH~hY70KaPJXT2S0rCWPl8peHzOmVNkaZIdQp6yiKgfEDb8Wpxgdbloy7pNaXtE3mW3DV0JHh2mojjQKDoadPGJPtVYNt8skbJiGJUf3fI27UF7PdcMoecmHrAqaBTbU4e-OEZJGwmiHxPhVkhhbEfNnYd4uWSyXbpKfl4oqMI9LFNNSzDZS9BU7FHn5veJkwZIEkXuuk99hhr4hPOuvRZrkh8Jo0i~rcCCD6EXQLzFqaSCW5ZDzOjCPDxtJ2HuLgQcIkm2yXHD2XO-UFegGC2GLU7EPk4TJjYHk3CiGZjmWwGFeJvkh8apk6jf0qiyNahoqJKtiOl8sA__" className="w-50" alt="" />
                                            <div className="text-danger"><b>BATHROOM</b></div>
                                        </div>
                                    </div>

                                    <div className="col-6 col-sm-4 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                                        <div className="p-2 border rounded-3 bg-light">
                                            <img src="https://s3-alpha-sig.figma.com/img/d67f/b336/3a83622e3af8229ecd14af3e6ebf2ad7?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SNL4uQUWp5Y0DT-bB9I2srKz4xOXtEzPF-oZ4o4ePOcQDDAG8BkUIS83lSVZ3um61L8wH1ydq76gGePzd3e4kxhykfbBMtw3q8iKtO0sRxSkZYpNcWNlsBkip~gMrnw2kwYNa7lsxPERzGKBouyYpXduDB6TL1yrjkPlJffjmojykO8Z4TQNfe6616qC~zAPa8rUg7oZAFTZGhjq~iauwOAmRCtt28US8ZWA~GpjRDK6h0~VYfO02m--zeRSWe2Q0Ilc1dWaRX1OofSGB8OvXoqTW4EMDXYhrhFLFZDKoKPyU7bb9CWkwWhRkIvlUXUuOrmZfhpUJML7-Vle7u4R2g__" className="w-50" alt="" />
                                            <div className="text-danger"><b>CHANDELEIER</b></div>
                                        </div>
                                    </div>
                                    <div className="col-6 col-sm-4 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                                        <div className="p-2 border rounded-3 bg-light">
                                            <img src="https://s3-alpha-sig.figma.com/img/34e8/fdf4/c0a6695f5c2ebf45fcaea46e51e3b92c?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B-Kr0tDqHvtm3Vupervr5jU7hEkYY9gX4xiT39UXYAgGcWHyynDEVQ8nKMQIYCOd7W5Ipi~sgZYTSSETtUdoQPu6nXO3gOTmSMICimzQQHoutZxgxS2ffLbSDpkahkRZrAuzu~8-jgPx1nrvcIZ0FVbeP5BTuLcBY5yLz0ba5C-leccrcml2dd6vm54pjE1S0iRoxsmHH5ji4YTe2aBm31magJB7NtU2J1~~zHKHqJYTHYY85Bc3OY31rbvZ0Zywvlk3C8zZus~FL~fvlcBY2eKiIS4CE5QRmIba-YLEBNfbPfQO1esmHiye-rZ3SSHLEcCTouoq-zRmjDnUd3xK0g__" className="w-75" alt="" />
                                            <div className="text-danger"><b>BEDROOM</b></div>
                                        </div>
                                    </div>
                                    <div className="col-6 col-sm-4 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                                        <div className="p-2 border rounded-3 bg-light">
                                            <img src="https://s3-alpha-sig.figma.com/img/baae/655b/888b7e966b0b56c9de35189ce1befc10?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WyCP3XD9wSJQp6VQ-PatRIHFJCVe6f6peHsBW46GybFwbFAKlks89mPdQAqdO4isT0ZjqZUQprsf1Ry9roqOzjeI-kbLbh09w60Ys71v6VIib~VmslnbKPvvtb4FTvEETGKA06zC2IpVn4thgBBKULbLMgUe~Sf0mYtoO8WZ-EQBfbQEGIYwUEqvGWqrKgWnPnOrA2WjzEn3sCwW5eQ0oMmkWM3xSLnNSwp0BDgK~y2iq9l5tfoknbecZFHIeB0OL~vguc0x45g6N9FFkazBcY5sjXUMVAW5zFdgOoVDY9V8OPt9ELlf1OG9~7~fG3Kkx-Z4dDr7kYa3ROfPmjvjZg__" className="w-50" alt="" />
                                            <div className="text-danger"><b>LAMPS</b></div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div>
                            <div className="container-fluid">
                                <div className="row ">
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                        <img data-aos="fade-right" className="w-100 second-img img-fluid" src="https://s3-alpha-sig.figma.com/img/b91a/3782/5f1d47ec7e824350085c36d26363c251?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gYVUUk1pd2C2zKmA14xym9cGdhubJ9217O8R8hmGmcyhcfFNKYJQKIhW-fCRn0UbVEHT14N~FY1DwUv17jVy5r1nuM9P9qjNXkjIemp8KhQ2jDEUY2agsjFMthDsIUVWYyymPidm~GvInlYYZGytZSQtrxOQal~yigHm39bOatbeHq9YqQOgezXqsM7WNMSVY-CNiNxnvoWTA-GN4b~RkEeQOkX99mojj2H3gE-HJiVBD3dTzEJM4AGtUAqQcrsryqlBPLb6ghM0cQ8hXeyChi~5jRBjfAT578ILSn75xZMu~XiffueJV5cau18F48oEFZPh79kFXpnpGyhctdt-VA__"
                                            height="600px" alt="Image" />
                                    </div>

                                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <div className=" p-5">
                                            <div className="text-danger pb-5">
                                                <h4>
                                                    <b data-aos="zoom-in-down">ABOUT AS</b>
                                                </h4>
                                            </div>
                                            <div className="pb-5">
                                                <h1>
                                                    <b data-aos="zoom-in-down">Get your place the best makeover possible.</b>
                                                </h1>
                                            </div>

                                            <div className="pb-3">
                                                <h6>
                                                    <b data-aos="zoom-in-down">We are an award-winning architectural and interior design company renowned
                                                        for our commitment to design excellence and innovation offering comprehensive services in
                                                        architecture, interiors, 3D visualisation, bespoke furniture design and project management. We
                                                        create spaces that provoke emotions. We love our work and are passionate about every project we
                                                        undertake. Our facilities extend to a total of 3.500 m² of factories, workshops, and showroom
                                                        exhibition space.
                                                    </b>
                                                </h6>
                                            </div>

                                            <div className="pb-5">
                                                <h6>
                                                    <b data-aos="zoom-in-down">Our company mission statement sums up who we are and why we are here: “One
                                                        company with one objective: to design, build and furnish beautifully detailed contemporary homes.”
                                                        Everything you need for designing, building, renovating or furnishing your home
                                                        is in one company.</b>
                                                </h6>
                                            </div>

                                            <div>
                                                <button type="button" className="btn btn-danger rounded-0 btn-lg ">
                                                    <a href="./read_more.html" style={{ color: "white", textDecoration: "none" }}>READ MORE</a>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row text-center h-100 --bs-secondary-bg-rgb">
                            <p style={{ fontSize: "30px" }}>Recent Projects</p>

                        </div>
                        <div className="row">
                            <div className=" col-lg-4 col-md-6 col-12">
                                <div>
                                    <div data-aos="zoom-in" className="contain">
                                        <img src="https://s3-alpha-sig.figma.com/img/010d/dea2/8cfd6524b3a8659353627b3352b930de?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JH5PoU8jKDShqXnXF18r9ka1j5uJVlhucsJRxsPXAP7k4gAkkBSG4hhuOF4M~2U9WPxvjISVItTdbLk7xWMjcaenPOW5EGfOqW8Ag~xN48V~EP4cb-nz0rc8FG5IRicaKeApzi4eWDsEF96dD~5qzXCIR~dR7WDwUwP9Rn7ubnAaSvv67yQN22SzFfdLmvUlgSAVUJX~ck~N~K86IOFLweEk3KIR~kW1BjI1fMge6UuItwBVwoPznUjyb0vcdcPfciGv1-Ln2lvb144ScmLk-cSP~x0zcCQzEBcDe20bnLEJ8IytJFnXvzb7mVZQc0O7n-63CZU2I34uv~whaIFufQ__" alt="" />
                                        <div className="middle">
                                            <div className="icon">
                                                <i class="bi bi-share-fill"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div data-aos="zoom-in" className="contain">
                                        <img src="https://s3-alpha-sig.figma.com/img/ba67/bb96/f247693aa19c4c07eef32c51f22cab32?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lPEnWgWog9uk5tMNnvE5MU3X5FY3oGrpSS5~ZBLd3uLCH5Wm3HLlB7~XwGlkaQWUhT4xBUBC7Epb6jaMOjOdWMQJuPVh14KfWWUWjL8fVu4a9xLUb7D77UhWZj3b9XyAl4-J1QNdq7-BMhn8AYlbB7PnznUTWd350C~bg4w2smk8M5xcn5zxYiNHCEO7wLeRK4L-zRspSJQ9qC5-mnNWSy0EvUbM4u2gKw4C3tG4VqWpAhbgUEAt-ms~J4lnGRdUbhQlm~BtWo-gCW62ikLxfvarQ9KD50JgybrQkEKOYA9vSbLJdJKclJSs5NjbSOPQucL5GzinMSqlqXjTQXZQSQ__" alt="" />
                                        <div className="middle">
                                            <div className="icon">
                                                <i class="bi bi-share-fill"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" col-lg-4 col-md-6 col-12">
                                <div>
                                    <div data-aos="zoom-in" className="contain contain0">
                                        <img src="https://s3-alpha-sig.figma.com/img/bf78/8574/e6adc9c0d5cd7923d6196708bc6bce3b?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RhITxPKbxwx0AXvvZirLuGlcABuMWd3f9vD-bWnkFISPyZdO6cHfJAgSA3XHQlyvLDOZqmGQl56hY0wuB0rgVZG4S7tEfDz7bKNEOPW0qJLUn9lZ0Fjwh0UQ3vwy0GHpkX6p2IK1NE1n0zR9VktbABhzn2mM4cSj8MDeJ~4S8v9usZitq3iZV-a-ey76iIIfnuSNskuctftAALjzDay-j1eAgWujR6OZgsfCw-It0kWkCAZHt~w5H8aoiaF9aGYF~f8PkthZpgqQfSmIEMCcw5qxzT~KOR1w1CU9V51z4A4HkScOh0LF7tzAxlhbOctJeg56lKa~SbAD4mKN8PbraQ__" alt="" />
                                        <div className="middle">
                                            <div className="icon">
                                                <i class="bi bi-share-fill"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" col-lg-4 col-md-12 col-12">
                                <div>
                                    <div data-aos="zoom-in" className="contain">
                                        <img src="https://s3-alpha-sig.figma.com/img/dfac/4aeb/2806dc1edde594b23b04f75dbe085fe9?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VrpskCkjuLvsmiT9Z7I5NgoH9-vlYHmH6-VG8gATScQ0704Dj6KsPN9LlU5dbSDNVVAsi0tOof~skoLwANpRjGuPANWDlBk5hLktvqgDrEVt583BDTMDXSDOgoEyC6j0idq4Tm7LiFUGMnIFlMwCzGd8QtPdyFosT~oKcddbvC0gyOLwnUQSMIjwSalyC300bMMHqvdZgDVw~BjIDqdScOEaOfdSJI~LiIIXEZbEa6lfzKgsAYviYDAC~DKizUmIm5ekVPejNXyDFmlE6vP42G1UQmPKsMIgAdGJIADCi3Y-Ju7-sGg9hx3CTpLshkifgo-Xn-iGOdxeoMZF-mFuHQ__" alt="" />
                                        <div className="middle">
                                            <div className="icon">
                                                <i class="bi bi-share-fill"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div data-aos="zoom-in" className="contain">
                                        <img src="https://s3-alpha-sig.figma.com/img/fbce/3247/25eed95b58e2c04bb395ed336bd0b345?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ASOZbDZ4cDR9CP0dqSQnpA7SowluQDbIY--YQlbCNlBlEtzaKC07Z1Tovh7IO6PG8LboJ4tD3imBKbIMDXHJDFPrCfJQkbdDxw-QWz-5T~Hx1L0RQBq4NFUwg40UgO-xtFpflirftrEPlZGQrGEgn9TtThfoYqdHVX6xY9HL~8qMFj8M3BmEGxk3rioj9HzWVa0JHUcAS-Fbky4WVY~EO3OPaVztv9W8qqIW1-N8P4k3DT~9qBp1O8b-1yGoR1jO3Linn~c-88d2YaWwSkZ1O0W9NJALFG0fJDTRSfLadBNxjGWllJBNeCAWRx3HCTiIAxRvn9O3d0BWMI8oNb~qcg__" alt="" />
                                        <div className="middle">
                                            <div className="icon">
                                                <i class="bi bi-share-fill"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                <div className="container-fluid px-5 p-5">
                    <div className="row gx-5 ">
                        <div className="row gx-3 col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <div data-aos="fade-up" data-aos-duration="3000" className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                <img src="https://s3-alpha-sig.figma.com/img/1688/250d/e0208ddc953847dbaa510c1436b92111?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HnVoMtFucZCpZqj9oHd4hUMVPFBBXti8MNA5hwktPTnLaSyqf70YyyFMZFAldmlST40SN1CJdpMnA2tq3zNjE7D-BXQGfsA~4QhWqRY~-xLpknXjiOipRv5-X1b-XChLThi-6Q2YZofmxySJTl0ihjSy6605C--8Bu2jTkvJbmkrmGIz27NAErM0gbU2lOyg~66ZPr17~d32~3GcC6w-iWG7dAqGirKoRNdBG4MXppwWZMgbmJHX-lflD7q2b62wQ0UrQ6pIyjo9dHjrigsEsWPAXx2f8Srxi~YAfKeArWf~ZTaos3CP-4IhG0P07zR9ZVdRZLRS-nfxXp8Rgba0yA__" className=" rounded-3 w-100 h-100" alt="" />
                            </div>
                            <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500"
                                className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                <img src="https://s3-alpha-sig.figma.com/img/ed1b/db0e/ba5cd1224237b036916ccfa7602668b5?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p7XnVFo1THPD30SPNFqotiLiu-XQ6zLhwJoqh9PpDXxqI1QnHBvbS4ObtglPMYUDaRo4sCrRnOpzIfk2tKV0weXLcNOMmDepoQDd9USk4JuIkEH1D4u659F7AX8hMCpRkGLj105YJ7DeMTDUFVEVMozv6TBilyKjFaCN~65kvi8CEsn9sm9gF37oyFe3i6GSg0krfLrtZaHPNy84MWCuek~tKm17eiirn5wwzftqh~kpmLJw3YZ5T91CfOaBANyhHsLOK6-rJgRaQ4iOuPeN9i9qf8YhepEdVdXXIHzx6X9MRl1eKaWdT7Al-3rw3zj8Pp1JtoMA0xU2QX7JYRVCzg__" className=" rounded-3 w-100 h-100" alt="" />
                            </div>
                            <div data-aos="fade-up" data-aos-duration="3000" className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                <img src="https://s3-alpha-sig.figma.com/img/87db/f1a0/c52756e1ac7223581d7a7240c595ac71?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YhqZ-pCuCFfTQVM8NiDB4kCkKQH-HAPJb~ijonJiC9BDnfyMciafNjZi1iazOIufZSFpRDJlZMLf7b2BRKLeHR91W6T7Wco5nfN9Zocwn0iqwgcSTqTVJE2P7EWTNRQ7GnzotWQLDEaHYQ1~mpLX~SZwz5XsUtrv0NAGpKIpYWlaU~6pSHkiylRsqZOHTUjSaZe7R0b1Pxsm2s1bw1F41jWd9uTITyJHav9GDuIahkSd1vZ5nhYukPs0YHlA5cc9cm3hePvDEzvIL2T3TPOMvnGjMh5N7~fIWLQnjXemEI5Srr5H6LC4TtAJGHJVSdEx6RS0x0xScmB6iiKjXyuldA__" className=" rounded-3 w-100 h-100" alt="" />
                            </div>
                        </div>

                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <div className="px-5 p-5 pt-0">
                                <div className="text-danger pb-5">
                                    <h4>
                                        <b>WHO WE ARE</b>
                                    </h4>
                                </div>
                                <div className="pb-5">
                                    <h1>
                                        <b>Get your place possible.</b>
                                    </h1>
                                </div>

                                <div className="pb-5">
                                    <h6>
                                        <b>Interior designer implies that there is more of an emphasis on planning, functional design and the
                                            effective use of space, as compared to interior decorating. An interior designer in fine line design can
                                            undertake projects that include arranging the basic layout of spaces within a building as well as
                                            projects that require an understanding of technical issues such as window and door positioning,
                                            acoustics, and lighting..</b>
                                    </h6>
                                </div>

                                <div>
                                    <button type="button" className="btn btn-danger rounded-0 btn-lg ">
                                        <a href="./read_more.html" style={{ color: "white", textDecoration: "none" }}>READ MORE</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="container">
                        <p className="feature_heading1">Our Service</p>
                        <p className="feature_heading2"> <b>Solutions for every corner</b></p>
                        <div className="row">
                            <div className="col-xxl-3 col-lg-6 col-md-6 col-sm-12">
                                <div data-aos="fade-right" className="fearure_img">
                                    <img src="https://s3-alpha-sig.figma.com/img/39a9/442e/5af000aed2166461c03feec0ba1743a7?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U0y-vCOW5FjuZft5TWGJpk2-Lqe9hfcujdL9lb16hxWGIQnaKhrOe41pOz63BVzMX5CpcB9Qr-rp9qycyZRO7kkhEmkRLGWKDT83rWFGP2uwv6813QvIpwaTZDlZqaW9mK92jfj-tnumcmamwf3hPepYqcdMTRs~R9KTM5q2qTpS3Y7~vjQmDygTER87KqRofye6ODVr8N0MVmyPJKqbsM1QakxzNJ69F5X393BS-pjbhOhCLJFlrYrl4ajiRWK8mqFVAkBL2I7RLyTbk6GaD2dPXqXuSnQUpv~RUQ9jjtNgZsPdqYCZCMvfegzNJw9a72uzehHcJy1eaMJT5B5GDQ__" />
                                    <div className="feature_img_txt">
                                        <h4 style={{ color: "rgb(150, 94, 94)" }}>Kitchen area</h4>
                                        <h6>Visual and spatial branding: The use of space as a medium to express a corporate brand.</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-3 col-lg-6 col-md-6 col-sm-12">
                                <div data-aos="fade-right" className="fearure_img">
                                    <img src="https://s3-alpha-sig.figma.com/img/ba67/bb96/f247693aa19c4c07eef32c51f22cab32?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lPEnWgWog9uk5tMNnvE5MU3X5FY3oGrpSS5~ZBLd3uLCH5Wm3HLlB7~XwGlkaQWUhT4xBUBC7Epb6jaMOjOdWMQJuPVh14KfWWUWjL8fVu4a9xLUb7D77UhWZj3b9XyAl4-J1QNdq7-BMhn8AYlbB7PnznUTWd350C~bg4w2smk8M5xcn5zxYiNHCEO7wLeRK4L-zRspSJQ9qC5-mnNWSy0EvUbM4u2gKw4C3tG4VqWpAhbgUEAt-ms~J4lnGRdUbhQlm~BtWo-gCW62ikLxfvarQ9KD50JgybrQkEKOYA9vSbLJdJKclJSs5NjbSOPQucL5GzinMSqlqXjTQXZQSQ__" />
                                    <div className="feature_img_txt">

                                        <h4 style={{ color: "rgb(150, 94, 94)" }}>living room</h4>
                                        <h6>Institutional: government offices, financial institutions (banks and credit unions), schools and
                                            universities, religious facilities, etc.</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-3 col-lg-6 col-md-6 col-sm-12">
                                <div data-aos="fade-left" className="fearure_img">
                                    <img src="https://s3-alpha-sig.figma.com/img/970b/0c9f/147dc0db647f45955a3252729e85ee30?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eW3OWPihsrT-a3t-SAkmaMDO6ih-IWxidHRWGmv8UlKZINhgt6Vu-I2kPZDWfBZDWSoWP8x8bs2Gu9MyGpgk7tXqI7f~K-qGcYu46m9lf6iCP3y0LW2tyRZChVxm24GnwZ2Mndo-z0tN7wrBUkcGfcqgoXBeaUsNoj9nQhsBu8813cLfwOgJqSHBe3eSTc1OPj14l9EoSnF9clyR5Sd9cKoYPrl~Uxv6MIUbZEprUvArWn~IHXOPfk95qQbeEJ8Kmv5R2UwkwxBIoHRixSayX-Dv7HrCk0R2IaRND8jt2MtZ67piULSRaY3RdhpRV7CscIwzx55j8pUWCM2bOCAEBQ__" />
                                    <div className="feature_img_txt">

                                        <h4 style={{ color: "rgb(150, 94, 94)" }}>office area</h4>
                                        <h6>Exhibition: includes museums, gallery, exhibition hall, specially the design for showroom and
                                            exhibition gallery.</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-3 col-lg-6 col-md-6 col-sm-12">
                                <div data-aos="fade-left" className="fearure_img">
                                    <img src="https://s3-alpha-sig.figma.com/img/06ab/b022/40569d34b5cae87408535505351ef6ae?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qyLU1oPkNhlZ1~m3gWeLSJ3G24nkk4DAjQZfcbtQWXwgvMmJLC5mVC3kBGfu2NBUB6fGkhAnX674Y36dr3Oco7ngYrmF-T4NDLgYpfEWWH~iMOzsaD9sf5dJTHrQaPlkh2hbU2TBBaF4znlGEIpUCX1FEQLIYKltHhB83c2FzkDO4ZnEgnfdLQqFz9EIjO~nKXG2dPP6XzS-1NkFkPqHjMZRgZ57FIxGMDDejqp3PzEZbZC9h2iSoBq~AKC3CgBUti5rW~KyWIJjDCGSmGc606x7Wwgo6BnutY-3kkMPodYmXwi50RsbxIzeQlF~5BYl0l8~4lc-HwTCZ06gTgpzuA__" />
                                    <div className="feature_img_txt">

                                        <h4 style={{ color: "rgb(150, 94, 94)" }}>Commercial</h4>
                                        <h6>The use of space as a medium to express a corporate brand.
                                            Corporate: office design for any kind of business such as banks.</h6>
                                        <button type="button" className="btn btn-danger btn2 rounded-0 btn-lg px-5">
                                            <a href="./view_more.html" style={{ color: "white", textDecoration: "none" }}>view more</a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid text-center" style={{ marginTop: "50px;" }}>
                    <div className="container">
                        <p style={{ fontSize: "25px", color: "rgb(122, 70, 70)" }}>OUR PROCESS</p>
                        <h1>The Working Process</h1>
                        <div className="row  text-left">
                            <div data-aos="fade-down-right" className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                <img src="https://s3-alpha-sig.figma.com/img/6a8d/77fb/06942b6d4dfb5e691d49cd642c0e3680?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aTGo1cfMuQsogGU9KyoIn7~pMOB48kbPpfIdegcYu3Avid0gt6n7PorretxuJJ2TL3kgkZyYaBox9lIo-LMz5onl7iYybsQpHAOL-ApNmMPDs03fL-WJdqNMpzIrLJOMG7gYnHcka6F5B0Eik-BuHUvjhd1m1HRzuwtCI94A9vT6ophbsSFefqwo-CHeDCqP1VdG7iN7dMNU9Vs-MlV06XlFQ7CGlYEM7niyVBHFrZEG12RD3YT-4VL4gux8Gf65K9EolMvLfv8pJlfOawsOU0~~ZxkKvmunxx99D6VGnIC5Shmy6TsGkR4z5F2sgJCN0EO07BMMdOkqwDfJ5NBHWw__" height="400" width="100%" alt="" />
                            </div>
                            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                <h1 className="c-color"><b>01</b></h1>
                                <h3 className="margin-top-h3">Concept Design</h3>
                                <p className="margin-top-p">the award-winning digital design and development company solely led by women and
                                    refugees. Our goal is to code a more inclusive tech sector.</p>
                            </div>
                            <div data-aos="fade-down-left" className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                <img src="https://s3-alpha-sig.figma.com/img/4d20/b54b/de534a4bce2f5cc223c3183e84bf0eac?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TOHfhc913Q0GXacZsCVmMbZEsgEcUuiS6cPMDdh6Gz152apQEolQ4cQ~R3aK1kLn1V1TRNpUYTFZD4Z06YqamaiDxGta70XIRf-CHcXHn0nraKwITTySaaiXdUxxlg6LVYUq5HRqFEyiEq0Zu2-Gw~dQ2VBYA7Xd6lbtMWdnnEVGAyhsWZgNXOt0-bs5Pm6yK9BndwVOau1FxPzok2kU5K2k1lQXW24ojVoDqm5XUstB~gL3HNBuCfdrWPxUGsTwJUN7A8S195~~CjBwi1cQzk9DadTX8LlwQiynFts45xxay77~5O7cNsIGSPYU-FeF~fx70aEXCOuMk1fz0PQTVw__" height="400" width="100%" alt="" style={{ borderRadius: "5px" }} />
                            </div>
                            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                <h1 className="c-color"><b>02</b></h1>
                                <h3 className="margin-top-h3">Construction Drawings</h3>
                                <p className="margin-top-p">Detail drawings depict elements shown in other construction drawings on a larger
                                    scale. Detail drawings provide more thorough information about the placement of and the connections between
                                    different parts.</p>
                            </div>
                        </div>
                        <div className="row  text-left mt-5">
                            <div data-aos="fade-down-left" className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                <img src="https://s3-alpha-sig.figma.com/img/ebe3/3679/0aa2bad6b7ce366af62eda3ff0041144?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VWMgKv9bjutfNWVetQBKv8FhZ4r0nJve0W7rY9~gfPyS4Z8V5lwlxlkLnPaPkQPyFrkqoNi1WX2acmhFGjJiwiB-cILuwvFAGqENwLc-LIxNgbJ4dDKNLGpWFJy-JrSDUMzveuW~1~welYUnjxdr4E0fTagAgaK10D~j24ZBdthe8M9epyICUA8vshaPB1Gjz5oVUgu1lHqxi7ErEe7SjAjUz58bVemoLq1rn8Fv4yF6sWpVy8K0nw9rhUHWurBNDjbeiISZ19Y9~LTpAkEr5l0J19ASPN3YRBDI-h0g-99drEw0GhHvTKXUzjrZq~fZ0OJZxWu9CniSI9PUNuNoKw__" height="400" width="100%" alt="" />
                            </div>
                            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                <h1 className="c-color"><b>03</b></h1>
                                <h3 className="margin-top-h3">Schematic Design</h3>
                                <p className="margin-top-p">Schematic design includes a complete description of building systems and the building
                                    site. It provides control strategies for all equipment and systems relating to building services such as
                                    security and fire alarms and defines the technical requirements for phones, data, cable and
                                    audio-visual needs.</p>
                            </div>
                            <div data-aos="fade-down-right" className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0">
                                <img src="https://s3-alpha-sig.figma.com/img/5e6f/143c/4bc8df1a00a20967e31987fb6e87af52?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=plQZxQ~pmZmeUDIL5d~csVM4WvzO0NWglEd2yYNg1oXJZE8Ij~FAkz7i0xEDXZsRx5VgYDxqb7lMidPJwfeAKf~BX8QkpIK1Zt~RufDvQ6s0pNKyWUKvm3XvFhEzGdIV3M1OQNmC-9YA5IFokYgJunOaiSj-ChnT5CQpi2w8g46ycaTjx13qQE3CwRnW3muXK54c7FS~zOYlOcCcFc8LS1odaYBc5SovQGpQFJTJcgdL1MegmQNmzHTnAF6SEjNOszfBbOFr1y28wHqhfkn~qYJ1pv4U988fARlQwH2tj5kqmXFWxmo2wkrfrGCcB~OF33O8xtjmy342idsgFFKX5w__" height="400" width="100%" alt="" style={{ borderRadius: "10px" }} />
                            </div>
                            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                <h1 className="c-color"><b>04</b></h1>
                                <h3 className="margin-top-h3">Project Administration</h3>
                                <p className="margin-top-p">Project administration is the process of managing the administrative tasks of a
                                    project to ensure its successful execution. It involves planning, organizing, coordinating, and controlling
                                    activities and resources to achieve project goals within defined constraints, such as time,
                                    budget, and scope.</p>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid text-center">
                        <div className="row">
                            <div className="sofa-sec">
                                <p className="lorem"> "Sed do eiusmod temp nec ullam conse </p>
                                <p className="lorem1">ctetur adipiscing orem ipsum dolor sit amet luctus elitse."</p>
                                <button type="button" className="btn btn-danger btn2 rounded-0 btn-lg px-5">
                                    <a href="./view_more.html" style={{ color: "white", textDecoration: "none" }}>view more</a>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid px-5 p-5">
                        <div className="container">
                            <h4 style={{ color: "rgb(122, 70, 70)" }}>OUR BLOGS</h4>
                            <h1>Our Recent Blogs & News</h1>
                            <div className="row gx-5 ">
                                <div className=" gx-3 col-sm-12 col-md-6 col-lg-5col-xl-5 col-xxl-5">
                                    <img data-aos="fade-right" src="https://s3-alpha-sig.figma.com/img/0b31/fd11/d676066e7d8da65f9dba7360edbdfbaf?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IbqMMgD1hZPIT6H3YVBXzjpWj8fOG8Yli1UmGBp67bJV29PERNUKKkHYvTMs89qts2rhFC4rS9YJde6UyzWEp1q9JyU~~305hoQHVZ1wO3yRM~w069nxTukK2eoOklhhsraS5MEcWRy0ziStMPLztDbZeQLfufo8IEikJvsjkIaVQVeKWzDGS1rWfdLHxOvpZ0ps5pvNnUSjjdJbQeZ76jImFCFwjNeSYql3d30b1HUl6VVmOIv1YnLPtyPTkCr4L0n9CduBrQwiaGzSicQ67jXCtvrjQutWhEE8uKEHtjIp2BtuNIQE1L4sP4sAzYZ3BrXYpjn0AldrKNlhWXCk6A__" className="  rounded-3 w-100 h-100" alt="" />
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-7 col-xl-7 col-xxl-7">
                                    <div className=" pt-0">
                                        <div className="text-danger pb-5">

                                        </div>
                                        <div className="pb-5">
                                            <h1 className="tx-1"><b>Top 10 Tips For Your kitchen
                                                intorior design.</b></h1>
                                        </div>

                                        <div className="pb-5">
                                            <h6 className="tx-1"><b>Interior designer implies that there is more of an emphasis on planning,
                                                functional design and the effective use of space, as compared to interior
                                                decorating. An interior designer in fine line design can undertake projects that
                                                include arranging the basic layout of spaces within a building as well as
                                                projects that require an understanding of technical issues such as window and
                                                door positioning, acoustics, and lighting..</b></h6>
                                        </div>

                                        <div>
                                            <button type="button" className="btn btn-danger rounded-0 btn-lg ">
                                                <a href="./read_more.html" style={{ color: "white", textDecoration: "none" }}>READ MORE</a>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row pt-5 ">
                                <div className="col-sm-12 col-md-6 col-lg-7 col-xl-7 col-xxl-7">
                                    <div className=" pt-0">

                                        <div className="text-danger pb-5">

                                        </div>
                                        <div className="pb-5">
                                            <h1 className="tx-1"><b>Top 10 Tips For Your kitchen
                                                intorior design</b></h1>
                                        </div>

                                        <div className="pb-5">
                                            <h6 className="tx-1"><b>Interior designer implies that there is more of an emphasis on planning,
                                                functional design and the effective use of space, as compared to interior
                                                decorating. An interior designer in fine line design can undertake projects that
                                                include arranging the basic layout of spaces within a building as well as
                                                projects that require an understanding of technical issues such as window and
                                                door positioning, acoustics, and lighting..</b></h6>
                                        </div>

                                        <div>
                                            <button type="button" className="btn btn-danger rounded-0 btn-lg ">
                                                <a href="./read_more.html" style={{ color: "white", textDecoration: "none" }}>READ MORE</a>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className=" gx-3 col-sm-12 col-md-6 col-lg-5col-xl-5 col-xxl-5">
                                    <img data-aos="fade-left" src="https://s3-alpha-sig.figma.com/img/ae0b/c708/5e9fe0dc4ebe915602b22cb9af12ea33?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=be2bFQ2Uu9UKTkvxzS3tg1q6RHkpquTEpQ22wqLXA7DibYLOCumIydq5rNVdsbgz1FiHRKdT815daJ1pTEv5d7z~jdpfXQXfCypu9sNVxAPtYjVEgX~9VvogqL1WRtp8aPdEoEuTlU~Q-FqDz7IndWG8NxEw1tIHCc5qBaiOORdc7he7CImWy8RVMTLM8ABjnd3mn5uaz~nZwb2s7F-7TLqU9QHIIjZJRG8wxGzt33CyNap-FAcHF6s8v5Mw2hcsdYDnDbV7-oppEOKUx9xauYDz62OxY57sckAF1m3XRCEKcHSY9itceW7uUMp6lEKYOEj9yfnxFIHkXPE2Nj9Kdg__" className=" rounded-3 w-100 h-100" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />

                </div>
            </div>
        </>
    )
}

export default Home;