import React, { useState } from 'react'


export default function TextForm(props) {
    const [text, setText] = useState('enter text to convert it into uppercase');
    const handleChange = (event) => {
        setText(event.target.value)
    }
    const handleUpClick = () => {
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to uppercase", "success")
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to lowercase", "success")
    }
    const handleReClick = () => {
        let newText = ""
        setText(newText)
        props.showAlert("Text area has been cleared", "success")
    }
    const extractEmails = (event) => {
        if (text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi)) {
            let txtMatch = (text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi)).toString();
            setText(txtMatch)
            props.showAlert("Emails have been extracted", "success")
        }
        else {
            props.showAlert("Please insert text which has email in it.", "warning")
        }
    }
    return (
        <>
            <div className='container' style={{ color: props.mode === "light" ? "black" : "white" }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" style={{ backgroundColor: props.mode === "light" ? "white" : "#080814", color: props.mode === "light" ? "black" : "white" }} value={text} onChange={handleChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary my-3" onClick={extractEmails}>Extract Emails</button>
                <button className="btn btn-danger mx-1" onClick={handleReClick}>Clear text</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === "light" ? "black" : "white" }}>
                <h2>Your text summary</h2>
                <p>total characters are {text.length}, and total words are {text.split(/\s+/).filter(Boolean).length}</p>
                <p>{0.008 * text.split(" ").length} - Minutes read.</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something in textarea to preview it here"}</p>
            </div>
        </>
    )
}
