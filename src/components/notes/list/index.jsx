import React, { Fragment } from 'react';
import 'bulma/css/bulma.css';
import Moment from 'moment';

function ListNotes(props) {
    return (
        <Fragment>
            <div className="columns is-mobile">
                <div className="column is-6 is-offset-1">
                    <h6 className="title is-6">
                        {props.notes.length} Notes
                    </h6>
                </div>
            </div>
            <div className="list notes-list">
                {props.notes.map((item, key) =>
                    <a
                        key={key}
                        className={`list-item ${item === props.current_note ? 'is-active' : ''}`}
                        onClick={() => props.selectNote(item._id)}
                    >
                        <div>
                            <h6 className="title is-6">
                                {item.title.replace(/(<([^>]+)>)/ig, "").substring(0, 15)}
                            </h6>
                            <h6 className="subtitle is-6">
                                {item.body.replace(/(<([^>]+)>)/ig, "").substring(0, 30)}
                            </h6>
                        </div>
                        <div className="columns is-mobile">
                            <div className="column is-10">
                                <span className="tag is-dark">
                                    {Moment(item.created_at).format('DD/MM')}
                                </span>
                            </div>
                        </div>
                    </a>
                )}
            </div>
        </Fragment>
    )
}

export default ListNotes;
