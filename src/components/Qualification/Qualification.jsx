import React from 'react';
import './qualification.css';
import porto1 from '../../assets/porto1.svg';
import porto2 from '../../assets/porto2.png';
import suit from '../../assets/suitjawa.png';
import booksearch from '../../assets/booksearch.png';



const Qualification = () => {
    return (
        <div className="qualification" id='portofolio'>
            <h2 className="section__title">My Portofolio</h2>
            <span className="section__subtitle">Project</span>
            <div className="qualification__porto">
                <div className="porto__item">
                    <img src={porto1} alt="" />
                    <p>
                        his is an online car rental website which can
                        display data from the back-end API and can
                        interact with costumers. This application that built
                        with React.Js. As a customer in this application
                        you can search the available car, determine the
                        ate of renting, and make a payment. (<a href="https://binar-car-rental-platinum.netlify.app" target='blank'>view</a>)
                    </p>
                </div>
                <div className="porto__item">
                    <img src={porto2} alt="" />
                    <p>
                        This application that built with React.Js. As a
                        admin in this application you can see order details
                        rented by costumers and there is a CRUD feature
                        (create, read, update, delete) for data settings for
                        cars to be rented. (<a href="https://binar-car-rental-admin.netlify.app" target='blank'>view</a>)
                    </p>
                </div>
                <div className="porto__item">
                    <img src={suit} alt="" />
                    <p>
                    This application that built with React.Js. This game
                    is played by pitting fingers against the computer to
                    determine who wins. (<a href="https://suit-jawa-game.netlify.app/" target='blank'>view</a>)
                    </p>
                </div>
                <div className="porto__item">
                    <img src={booksearch} alt="" />
                    <p>
                    This application that built with React.Js. This application will assist users in searching for books and provide the required information. (<a href="https://cari-buku.netlify.app/" target='blank'>view</a>)
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Qualification
