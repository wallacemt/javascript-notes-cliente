import React, { Fragment, useState, useEffect } from 'react';
import { Editor as TinyMCEEditor } from '@tinymce/tinymce-react';

function Editor(props) {
    const [currentContent, setCurrentContent] = useState('');
    const [timer, setTimer] = useState(null);

    const updateNotes = (content) => {
        const title = content.replace(/(<([^>]+)>)/ig, "").slice(0, 30);
        props.updateNote(props.note, { 'title': title, 'body': content });
    };

    const handleEditorChange = (content, editor) => {
        clearTimeout(timer);
        setCurrentContent(content);
        setTimer(setTimeout(() => updateNotes(content), 2000));
    };

    useEffect(() => {
        setCurrentContent(props.note.body);
    }, [props.note]);

    return (
        <Fragment>
            <TinyMCEEditor
                value={currentContent}
                apiKey="bnkcvpnss1lbevivp007qsax2o5ynydm9u5ml4do28bn2g4d"  
                init={{
                    height: '100vh',  
                    width: '100%',   
                    menubar: false,
                    plugins: [
                        'advlist autolink lists link image charmap print preview anchor',
                        'searchreplace visualblocks code fullscreen',
                        'insertdatetime media table paste code help wordcount'
                    ],
                    toolbar:
                        'undo redo | formatselect | bold italic backcolor | ' +
                        'alignleft aligncenter alignright alignjustify | ' +
                        'bullist numlist outdent indent | removeformat | help'
                }}
                onEditorChange={handleEditorChange}
            />
        </Fragment>
    );
}

export default Editor;
