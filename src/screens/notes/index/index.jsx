import React, { Fragment } from "react";
import HeaderLogged from "../../../components/header_logged";
import Notes from "../../../components/notes";

const NotesIndexScreen = () => {
    return (
        <Fragment>
            <HeaderLogged/>
            <Notes/>
        </Fragment>
    )
}

export default NotesIndexScreen;