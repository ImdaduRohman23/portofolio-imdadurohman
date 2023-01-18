import React from 'react';
import './qualification.css';
import porto1 from '../../assets/porto1.svg';
import porto2 from '../../assets/porto2.png';
import quran from '../../assets/quran.png';
import suit from '../../assets/suitjawa.png';
import todo from '../../assets/todo.png';
import tontoninaja from '../../assets/tontoninaja.png';
import hoobank from '../../assets/hoobank.png';



const Qualification = () => {
    return (
        <div className="qualification" id='portofolio'>
            <h2 className="section__title">My Portofolio</h2>
            <span className="section__subtitle">Project</span>
            <div className="qualification__porto">
                <div className="porto__item">
                    <img src={porto1} alt="bcr website costumers" />
                    <p>
                        This is an online car rental website which can
                        display data from the back-end API and can
                        interact with costumers. This application that built
                        with React.Js. As a customer in this application
                        you can search the available car, determine the
                        ate of renting, and make a payment. (<a href="https://binar-car-rental-platinum.netlify.app" target='blank'>view</a>)
                    </p>
                </div>
                <div className="porto__item">
                    <img src={porto2} alt="bcr website admin" />
                    <p>
                        This application that built with React.Js and uses Redux for state management. As a
                        admin in this application you can see order details
                        rented by costumers and there is a CRUD feature
                        (create, read, update, delete) for data settings for
                        cars to be rented. (<a href="https://binar-car-rental-admin.netlify.app" target='blank'>view</a>)
                    </p>
                </div>
                <div className="porto__item">
                    <img src={quran} alt="D'Quran web app" />
                    <p>
                        D'Quran is a digital Al-Quran web application.
                        This application that built with React JS and uses Context for state management. 
                        By utilized API data from the Ministry of Religion of the Republic of Indonesia, this application allows users to read and listen the Al-Qur'an based on the selected letter of Qur'an. 
                        (<a href="https://d-quran.netlify.app/" target='blank'>view</a>)
                    </p>
                </div>
                <div className="porto__item">
                    <img src={tontoninaja} alt="tontoninaja web app" />
                    <p>
                    Tontoninaja is a YouTube clone web application. 
                    This application that built with React.Js and Material UI.  
                    Provided 4 features to interact with users: home page with 16 categories video, search video, video detail, and channel detail.
                    Utilized API data from Rapid API to display the required data.
                    (<a href="https://tontoninaja.netlify.app/" target='blank'>view</a>)
                    </p>
                </div>
                <div className="porto__item">
                    <img src={suit} alt="suitjawa web app" />
                    <p>
                    This application that built with React.Js. This game
                    is played by pitting fingers against the computer to
                    determine who wins. There is also a feature to set the level of difficulty. (<a href="https://suit-jawa-game.netlify.app/" target='blank'>view</a>)
                    </p>
                </div>
                <div className="porto__item">
                    <img src={todo} alt="todo web app" />
                    <p>
                        My Todo is a to do list web application to organize the list of jobs to be completed by the user. 
                        This application that bulit with React JS so it is very dynamic and responsive to user.
                        This application provided 4 features to organize those todos: create , edit , done, and delete. 
                        (<a href="https://my-todos-ir.netlify.app/" target='blank'>view</a>)
                    </p>
                </div>
                <div className="porto__item">
                    <img src={hoobank} alt="tontoninaja web app" />
                    <p>
                    This is landing page of Hoo Bank. 
                    This website that built with React.Js and Tailwindcss so it is very dynamic and responsive to user.  
                    (<a href="https://hoobank-tailwind.netlify.app" target='blank'>view</a>)
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Qualification
