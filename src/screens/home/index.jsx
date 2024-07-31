import React, { Fragment } from "react";
import Header from "../../components/header";
import presentationImage from "../../assets/images/presentation.png"
import '../../styles/home.scss'
import { Link } from "react-router-dom";

const HomeScreen = () => {
    return (
        <Fragment>
            <Header />
            <section className="section home">
                <div className="container">
                    <div className="columns">
                        <div className="column is-5 dif">
                            <h1 className="title is-1 has-text-white spaced">
                                Create notes easily and access when you wants on the cloud
                            </h1>
                            <h2 className="subtitle is-5 has-text-light spaced">
                                Lorem ipsum, or lipsum as it is sometimes known, laying out print, graphic or web designs.<br /><br />
                                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print.
                            </h2>

                            <Link to={'./register'} className="button is-outlined is-white is-large">
                                <strong>Register for free Now</strong>
                            </Link>

                        </div>
                        <div className="column is-6 is-offset-1 presentation dif">
                            <img src={presentationImage} alt="Presentation" />
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default HomeScreen;