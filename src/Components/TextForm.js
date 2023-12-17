import React, {useState} from "react";

export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText); //Chnage the vale of text onClick
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState('Enter text here');
    //text = "new text"//incorrect way to update text vale. Can't set new text just like a variable
    //setText("new text")//Correct way to update text variable 
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea
                className="form-control"
                id="myBox"
                rows="8"
                value={text}
                onChange={handleOnChange}
                ></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert To Uppercase</button>
        </div>
    );
}
