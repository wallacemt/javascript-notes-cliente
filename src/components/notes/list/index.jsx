import React, { Fragment } from 'react';
import 'bulma/css/bulma.css';
import Moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'


function ListNotes(props) {
    return (
        <Fragment>
            <div className="columns is-mobile">
                <div className="column is-6 is-offset-1">
                    <h1 className="title is-6 notes">
                        {props.notes.length} Notes
                    </h1>
                </div>
                <div className="column is-2">
                    <button
                        className="button is-small is-outlined custom-purple" onClick={() => props.createNote()}>
                        Notes +
                    </button>
                </div>
            </div>
            <div className="list notes-list">
                {props.notes.map((item, key) =>
                    <div key={key} className={`list-item ${item === props.current_note ? 'is-active' : ''}`} onClick={() => props.selectNote(item._id)}>
                        <h2 className="title is-6">
                            {item.title.replace(/(<([^>]+)>)/ig, "").substring(0, 15)}
                        </h2>
                        <h2 className="subtitle is-6" style={{ marginBottom: '0' }}>
                            {item.body.replace(/(<([^>]+)>)/ig, "").substring(0, 30)}
                        </h2>

                        <div className="columns is-mobile">
                            <div className="column is-10">
                                <span className="tag is-dark">
                                    {Moment(item.created_at).format('DD/MM')}
                                </span>
                            </div>
                            <div className="column is-2">
                                <FontAwesomeIcon
                                    icon={faTrash}
                                    onClick={() => {props.deleteNote(item)}}
                                    className="icon-trash"
                                    color='gray'
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </Fragment>
    )
}

export default ListNotes;
