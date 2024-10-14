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
                                Crie notas de forma rápida e acesse-as a qualquer momento na nuvem
                            </h1>
                            <hr id="row"/>
                            <h2 className="subtitle has-text spaced">
                                Armazene suas ideias, lembretes e informações importantes com facilidade, e tenha acesso a elas de qualquer lugar e a qualquer hora. Simples, seguro e sempre ao seu alcance.<br /><br />
                                Crie, organize e acesse suas notas com facilidade. Nosso site permite que você adicione, edite e categorize suas anotações de forma intuitiva.
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
