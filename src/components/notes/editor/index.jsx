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
                apiKey={'bnkcvpnss1lbevivp007qsax2o5ynydm9u5ml4do28bn2g4d'}
                init={{
                    height: '92vh',
                    width: '100%',
                    language: 'pt_BR',
                    menubar: false,
                    skin:"oxide-dark",
                    plugins: [
                        'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'image', 'link', 'lists', 'media', 'searchreplace', 'table', 'visualblocks', 'wordcount',
                        'checklist', 'mediaembed', 'casechange', 'export', 'formatpainter', 'pageembed', 'a11ychecker', 'permanentpen', 'powerpaste', 'advtable', 'advcode', 'editimage', 'advtemplate', 'mentions', 'tinycomments', 'tableofcontents', 'footnotes', 'mergetags', 'autocorrect', 'typography', 'inlinecss', 'markdown',
                    ],
                    toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                    tinycomments_mode: 'embedded',
                    tinycomments_author: 'Author name',
                    mergetags_list: [
                        { value: 'First.Name', title: 'First Name' },
                        { value: 'Email', title: 'Email' },
                    ],

                }}
                onEditorChange={handleEditorChange}
            />
        </Fragment>
    );
}

export default Editor;
