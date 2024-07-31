import React, { Fragment, useState } from "react";
import 'bulma/css/bulma.css';
import { useNavigate } from "react-router-dom";
import UserService from '../../../services/users';


const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [RedirectToRegister, setRedirectToRegister] = useState(false);
    const [RedirectToNotes, setRedirectToNotes] = useState(false);
    const [error, setError] = useState(false);
    const navigate = useNavigate()

    const HandleSubmit = async (evt) => {
        evt.preventDefault();
        try {
            const user = await UserService.login({ email: email, password: password });
            setRedirectToNotes(true);
        } catch (error) {
            setError(true)
        }
    }

    if (RedirectToRegister)
        return navigate('/register')
    else if (RedirectToNotes)
        return navigate('/notes')

    return (
        <Fragment>
            <div className="columns is-centered">
                <form onSubmit={HandleSubmit}>
                    <div className="column is-12">
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
                                            onClick={e => setRedirectToRegister(true)}
                                        >Register</a>
                                    </div>
                                    <div className="column">
                                        <button className="button is-outlined is-custom-purple register">Login</button>
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

export default LoginForm;