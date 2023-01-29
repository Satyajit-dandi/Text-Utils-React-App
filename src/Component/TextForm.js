import React, { useState } from "react";

export default function TextForm(props) {
  const convertUpper = () => {
    let newtxt = text.toUpperCase();
    setText(newtxt);
    props.showAlert("Converted to Upper","success");
  };
  const convertLower = () => {
    let newtxt = text.toLowerCase();
    setText(newtxt);
    props.showAlert("Converted to Lower", "success");
  };
  const handleOnchange = (event) => {
    setText(event.target.value);
  };

  const handleVoClick=()=>{
    for(count=0;count<text.length;count++){
      if(text.charAt(count).match(/[aeiouAEIOU]/)){
        countChar++;
        setCount(countChar)
      }
    }
    props.showAlert("Vowels displayed", "success");
  }

  const handleConsonants=()=>{
    for (count1 = 0; count1 <= text.length; count1++) {
      if (text.charAt(count1).match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/)
      ) {
        countCons++;
        setCount1(countCons);
      }
    }
    props.showAlert("Consonants displayed", "success");
  }

  const handleExtraSpace=()=>{
    let newtxt = text.split(/[ ]+/);
    setText(newtxt.join(" "));
    props.showAlert("Extra space removed", "success");
  }

  const [text, setText] = useState("");
  let [count, setCount] = useState(0);
  let [count1, setCount1] = useState(0);
  let countChar = 0,
    countCons = 0;
  // text="jdshajs"//wrong way to set/modify text
  // setText("Please enter text here :") //  correct way to set/modify text
  return (
    <>
      <div className="container">
        <h3>{props.heading}-</h3>
        <div className="mb-3">
          <label htmlFor="mybox" className="form-label"></label>
          <textarea
            className="form-control"
            onChange={handleOnchange}
            id="mybox"
            value={text}
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "#404040": "white", color: props.mode === "dark" ? "white":"black"
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={convertUpper}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={convertLower}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleVoClick}>
          Vowels
        </button>
        <button className="btn btn-primary mx-2" onClick={handleConsonants}>
          Consonants
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>
          Remove Extra Space
        </button>
      </div>

      <div className="container my-5">
        <h1>Your Text Summary :</h1>
        <p>
          {text.split(" ").length} words and {text.length} charcters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview :</h2>
        <p>{text}</p>
        <p>Total no of vowels : {count}</p>
        <p>Total no of Consonants : {count1}</p>
      </div>
    </>
  );
}
