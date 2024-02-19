import React, { useState } from 'react';

export default function Textform(props) {
    const [text, setText] = useState('Enter here');

    const handelupclick = () => {
        console.log("upper case was clicked " + text);
        let newtext = text.toUpperCase();
        setText(newtext);
    }

    const handelOnChange = (event) => {
        console.log("On Change");
        setText(event.target.value);
    }

    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handelOnChange} id="mybox" rows="8"></textarea>
            </div>
            <button type="button" className="btn btn-primary" onClick={() => handelupclick()}>Convert to uppercase</button>

        </div>
    );
}
