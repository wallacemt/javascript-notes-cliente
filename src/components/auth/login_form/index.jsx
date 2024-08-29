import React, { Fragment, useState } from "react";
import 'bulma/css/bulma.css';
import { useNavigate } from "react-router-dom";
import UserService from '../../../services/users';
import ReCAPTCHA from "react-google-recaptcha";
import LoadingPage from "../../loading";


const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [RedirectToRegister, setRedirectToRegister] = useState(false);
    const [RedirectToNotes, setRedirectToNotes] = useState(false);
    const [error, setError] = useState(false);
    const [recaptchaToken, setRecaptchaToken] = useState("");
    const [loading, setLoading] = useState(false);


    const navigate = useNavigate();
    
    const handleSubmit = async (evt) => {
        evt.preventDefault();
        if (!recaptchaToken) {
            setError(true);
            return;
        }
        setLoading(true);
        try {
            const user = { email, password, recaptchaToken, rememberMe };
            await UserService.login(user);
            setRedirectToNotes(true);
        } catch (error) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };


    const handleRecaptchaChange = (token) => {
        setRecaptchaToken(token);
    };

    if (RedirectToRegister) {
        navigate('/register');
    } else if (RedirectToNotes) {
        navigate('/notes');
    }

    return (
        <Fragment>
            {loading ? (
                <LoadingPage/>
            ) : (
                <div className="columns is-centered">
                    <form onSubmit={handleSubmit}>
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
                                    <label className="checkbox">
                                        <input
                                            type="checkbox"
                                            checked={rememberMe}
                                            onChange={() => setRememberMe(!rememberMe)}
                                        />
                                        <span className="ml-2">Remember me</span>
                                    </label>
                                </div>
                            </div>

                            <div className="field recaptcha">
                                <ReCAPTCHA
                                    sitekey={process.env.REACT_APP_RECAPTCHA_SITE_TOKEN}
                                    onChange={handleRecaptchaChange}
                                />
                            </div>

                            <div className="field">
                                <div className="control">
                                    <div className="columns is-mobile">
                                        <div className="column">
                                            <a className="button is-white has-text-custom-purple login"
                                                onClick={() => setRedirectToRegister(true)}
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
            )}
        </Fragment>
    );
};

export default LoginForm;
