import React from 'react'

const Services = () => {
    return (
        <section className="services section">
            <h2 className="section__services">Services</h2>
            <span className="section__subtitle">Waht i offer</span>
        
            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i className="uil uil-web-grid services__icon"></i>
                        <h3 className="services__titile">
                            Product <br /> Disigner
                        </h3>
                    </div>

                    <span className="services__button">
                        View More{" "}
                        <i className="uil uil-arrow-rifht"></i>
                    </span>

                    <div className="services__modal">
                        <div className="services__modal-content">
                            <i className="uil uil-arrow-right services__button-close"></i>

                            <h3 className="service-title">Product Disigner</h3>
                            <p className="services__modal-description">
                                Service with love. Providing quality work to clients and companies.
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">I develop the user interface.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Web page development.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">I create ux elements interaction.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">I position your company brand.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Design and mockups of products for companies.</p>
                                </li>


                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-arrow services__icon"></i>
                        <h3 className="services__titile">
                            Ui/Ux <br /> Designer
                        </h3>
                    </div>

                    <span className="services__button">
                        View More {" "}
                        <i className="uil uil-arrow-rifht"></i>
                    </span>

                    <div className="services__modal">
                        <div className="services__modal-content">
                            <i className="uil uil-arrow-right services__button-close"></i>

                            <h3 className="service-title">Ui/Ux Designer</h3>
                            <p className="services__modal-description">
                                Service with love. Providing quality work to clients and companies.
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">I develop the user interface.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Web page development.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">I create ux elements interaction.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">I position your company brand.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Design and mockups of products for companies.</p>
                                </li>


                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-edit services__icon"></i>
                        <h3 className="services__titile">
                            Visual <br /> Designer
                        </h3>
                    </div>

                    <span className="services__button">
                        View More
                        <i className="uil uil-arrow-rifht"></i>
                    </span>

                    <div className="services__modal">
                        <div className="services__modal-content">
                            <i className="uil uil-arrow-right services__button-close"></i>

                            <h3 className="service-title">Visual Designer</h3>
                            <p className="services__modal-description">
                                Service with love. Providing quality work to clients and companies.
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">I develop the user interface.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Web page development.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">I create ux elements interaction.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">I position your company brand.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Design and mockups of products for companies.</p>
                                </li>


                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Services
