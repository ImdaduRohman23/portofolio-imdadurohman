import React from 'react';
import './qualification.css';
import porto1 from '../../assets/porto1.svg';
import porto2 from '../../assets/porto2.png'


const Qualification = () => {
    return (
        <section className="qualification section" id='portofolio'>
            <h2 className="section__title">My Portofolio</h2>
            <span className="section__subtitle">Project</span>       
            {/* <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className="qualification__button qualification__active button--flex">
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        Education
                    </div>

                    <div className="qualification__button button--flex">
                        <i className="uil uil-briefcase-alt qualification__icon"></i>
                        Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className="qualification__content">
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Web Design</h3>
                                <span className="qualification__subtitle">UNY</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>
                                    2017-2021
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Art Director</h3>
                                <span className="qualification__subtitle">UNY</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>
                                    2017-2021
                                </div>
                            </div>


                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Web Development</h3>
                                <span className="qualification__subtitle">UNY</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>
                                    2017-2021
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">UX</h3>
                                <span className="qualification__subtitle">UNY</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>
                                    2021-2022
                                </div>
                            </div>


                        </div>

                    </div>
                </div>

                <div className="qualification__sections">
                    <div className="qualification__content">
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Web Design</h3>
                                <span className="qualification__subtitle">UNY</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>
                                    2017-2021
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Art Director</h3>
                                <span className="qualification__subtitle">UNY</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>
                                    2017-2021
                                </div>
                            </div>


                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Web Development</h3>
                                <span className="qualification__subtitle">UNY</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>
                                    2017-2021
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                    </div>
                </div>

            </div> */}

            <div className="porto">
                <div className="porto-container">
                    <div className="porto-content-left">
                        <img src={porto1} alt="" />
                        <a href="https://binar-car-rental-platinum.netlify.app">
                            <p>
                                This is an online car rental website which can
                                display data from the back-end API and can
                                interact with costumers. This application that built
                                with React.Js. As a customer in this application
                                you can search the available car, determine the
                                date of renting, and make a payment.
                            </p>
                        </a>
                    </div>
                    <div className="porto-content-right">
                        <img src={porto2} alt="" />
                        <a href="https://binar-car-rental-admin.netlify.app">
                            <p>
                                This application that built with React.Js. As a
                                admin in this application you can see order details
                                rented by costumers and there is a CRUD feature
                                (create, read, update, delete) for data settings for
                                cars to be rented.
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification
