import React from 'react';
import { GuardSpinner } from 'react-spinners-kit';
import "../../styles/auth.scss";

function LoadingPage() {
    return (
        <div className="loading-page">
            <GuardSpinner size={50} backcolor={"#6600CC"} loading={true} />
            <h1>Carregando...</h1>
        </div>
    );
}

export default LoadingPage;
