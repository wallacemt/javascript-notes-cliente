import React, { Fragment, useState } from "react";
import 'bulma/css/bulma.css';
import { useNavigate } from "react-router-dom";
import UserService from '../../../services/users';


const RegisterForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [redirectToLogin, setRedirectToLogin] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate()

    const handleSubmit = async (evt) => {
        evt.preventDefault();

        try {
            const user = await UserService.register({ name: name, email: email, password: password });
            setRedirectToLogin(true);
        } catch (error) {
            setError(true)
        }
    }

    if (redirectToLogin) {
        return navigate('/login')
    }
    return (
        <Fragment>
            <div className="columns is-centered">
                <form onSubmit={handleSubmit}>
                    <div className="column is-12">
                        <div className="field">
                            <label className="label is-small">Name:</label>
                            <div className="control">
                                <input
                                    className="input"
                                    type="text"
                                    name="name"
                                    placeholder="Name"
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
                                    placeholder="email@gmail.com"
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
                                    className="input password"
                                    type="password"
                                    name="password"
                                    placeholder="********"
                                    required
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />

                                {error && <span className="help is-danger">Email or Password invalid</span>}
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
                    </div>
                </form>
            </div>
        </Fragment >
    )
}

export default RegisterForm