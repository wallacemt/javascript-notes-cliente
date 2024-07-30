import React, { Fragment, useState } from "react";
import 'bulma/css/bulma.css';
import { useNavigate } from "react-router-dom";



const RegisterForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [redirectToLogin, setRedirectToLogin] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate()

    if(redirectToLogin){
        return navigate('/login')
    }
    return (
        <Fragment>
            <div className="columns is-centered">
                <form>
                    <div className="column is-12">
                        <div className="field">
                            <label className="label is-small">Name:</label>
                            <div className="control">
                                <input
                                    className="input"
                                    type="text"
                                    name="name"
                                    required
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label is-small">Email:</label>
                            <div className="control">
                                <input
                                    className="input"
                                    type="email"
                                    name="email"
                                    required
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label is-small">Password:</label>
                            <div className="control">
                                <input
                                    className="input"
                                    type="password"
                                    name="password"
                                    required
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="field">
                            <div className="control">
                                <div className="columns is-mobile">
                                    <div className="column">
                                        <a className="button is-white has-text-custom-purple login"
                                        onClick={e => setRedirectToLogin(true)}
                                        >Login</a>
                                    </div>
                                    <div className="column">
                                        <button className="button is-outlined is-custom-purple register">Register</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {error && <span className="help is-danger">Email or Password invalid</span>}
                    </div>
                </form>
            </div>
        </Fragment >
    )
}

export default RegisterForm