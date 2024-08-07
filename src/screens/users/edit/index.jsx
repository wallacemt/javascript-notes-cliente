import React, { Fragment } from 'react';
import HeaderLogged from '../../../components/header_logged';
import UsersEditForm from '../../../components/users/users_edit_forms';
import UsersEditFormPassword from '../../../components/users/users_edit_password_forms';
import UsersDelete from '../../../components/users/user_delete';
import "../../../styles/users.scss"

const UserEditScreen = () => {

    let iconLogo = document.querySelector('.navbar-item.navbar-start')
    if (iconLogo) {
        iconLogo.classList.add('hide');
    }
    const setIsOpen = () => {
        return null
    }
    return (
        <Fragment>
            <HeaderLogged setIsOpen={setIsOpen} />
            <section className="section users">
                <div className="container">
                    <div className="columns is-centered users-edit">
                        <div className="column is-4">
                            <h1 className="title is-5 has-text has-text-left">
                                Informações Pessoais
                            </h1>
                            <div className="card">
                                <div className="card-content">
                                    <UsersEditForm />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="columns is-centered users-edit">
                        <div className="column is-4">
                            <h1 className="title is-5 has-text has-text-left">
                                New Password
                            </h1>
                            <div className="card">
                                <div className="card-content">
                                    <UsersEditFormPassword />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="columns is-centered">
                        <div className="column is-4 has-text-right">
                            <UsersDelete />
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
};

export default UserEditScreen;
