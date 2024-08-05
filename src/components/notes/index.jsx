import React, { useState, Fragment, useEffect } from "react";
import "../../styles/notes.scss"
import { push as Menu } from "react-burger-menu"
import List from "./list";
import NotesService from '../../services/notes'

const Notes = (props) => {
    const [notes, setNotes] = useState([]);
    const [current_note, setCurrentNote] = useState({ title: "", body: "", id: "" });

    async function fetchNotes() {
        const response = await NotesService.index();
        if (response.data.length >= 1) {
            setNotes(response.data.reverse())
            setCurrentNote(response.data[0])
        }
    }
    const createNote = async () => {
        await NotesService.create();
        fetchNotes();
    }

    const deleteNote = async (note) => {
        await NotesService.delete(note._id);
        fetchNotes();
    }

    const selectNote = (id) => {
        const note = notes.find((note) => {
            return note._id === id;
        })
        setCurrentNote(note)
        console.log(note.id)
    }

    useEffect(() => {
        fetchNotes();
    }, []);

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
                    <List
                        notes={notes}
                        selectNote={selectNote}
                        deleteNote={deleteNote}
                        createNote={createNote}
                        current_note={current_note}
                    />
                </Menu>

                <div className="column is-12 notes-editor" id="notes-editor">
                    Editor...
                </div>
            </div>
        </Fragment>
    )
}

export default Notes