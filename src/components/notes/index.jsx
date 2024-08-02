import React, { useState, Fragment , useEffect} from "react";
import "../../styles/notes.scss"
import { push as Menu } from "react-burger-menu"

const Notes = (props) => {
    return (
        <Fragment>
            <div className="columns notes" id="notes">
                <Menu
                    pageWrapId={"notes-editor"}
                    isOpen={props.isOpen}
                    onStateChange={(state) => props.setIsOpen(state.isOpen)}
                    disableAutoFocus
                    outerContainerId={"notes"}
                    customBurgerIcon={false}
                    customCrossIcon={false}
                >
                    <div className="columns">
                        <div className="column is-10 is-offset-1">
                            Search...
                        </div>
                    </div>
                    <p>List...</p>
                </Menu>

                <div className="column is-12 notes-editor" id="notes-editor">
                    Editor...
                </div>
            </div>
        </Fragment>
    )
}

export default Notes