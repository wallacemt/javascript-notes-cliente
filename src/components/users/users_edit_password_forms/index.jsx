import React, { Fragment, useState } from 'react';
import UserService from '../../../services/users';

function UsersEditFormPassword() {
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [status, setStatus] = useState(null);

    const handleSubmit = async (evt) => {
        evt.preventDefault();

        if (password === passwordConfirmation) {
            try {
                await UserService.updatePassword({ password: password });
                setStatus("success");
            } catch (err) {
                setStatus("error_update");
            }
        } else {
            setStatus("error_confirmation_password");
        }
    };

    return (    
        <Fragment>
            <form onSubmit={handleSubmit}>
                <div className="field">
                    <label className="label has-text-grey">New Password</label>
                    <div className="control">
                        <input
                            className="input"
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                            name="password"
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label has-text-grey">New Password Confirmation</label>
                    <div className="control">
                        <input
                            className="input"
                            type="password"
                            value={passwordConfirmation}
                            onChange={e => setPasswordConfirmation(e.target.value)}
                            required
                            name="password_confirmation"
                        />
                    </div>
                </div>

                <div className="field">
                    <div className="control">
                        <div className="columns is-mobile">
                            <div className="column is-12 has-text-right">
                                <button className="button is-outlined custom-purple" type="submit">
                                    Update Password
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {status === "error_update" && (
                    <p className="help is-danger">Problem in password update</p>
                )}
                {status === "error_confirmation_password" && (
                    <p className="help is-danger">Passwords don't match</p>
                )}
                {status === "success" && (
                    <p className="help is-primary">Updated successfully</p>
                )}
            </form>
        </Fragment>
    );
}

export default UsersEditFormPassword;
