import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import UserService from '../../../services/users';
import { useNavigate } from 'react-router-dom';

function UsersDelete() {
    const navigate = useNavigate()
    const [redirectToHome, setRedirectToHome] = useState(false);

    const deleteUser = async () => {
        if (window.confirm('Are you sure you wish to delete this account?')) {
            await UserService.delete();
            setRedirectToHome(true);
        }
    };

    if (redirectToHome) {
        return navigate('/');
    }

    return (
        <button className="button is-danger" onClick={deleteUser}>
            <FontAwesomeIcon icon={faTrash} /> Delete Account
        </button>
    );
}

export default UsersDelete;
