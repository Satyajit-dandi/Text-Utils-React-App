// import About from "./Component/About";
import NavBar from "./Component/NavBar";
import TextForm from "./Component/TextForm";
import React, { useState } from "react";
import Alert from "./Component/Alert";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const ab = "About TextUtils";
function App() {
  const [mode, setMode] = useState("light");
  const [modeText, setModeText] = useState("Enable DarkMode");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setModeText("Enable LightMode");
      document.body.style.backgroundColor = "#404040";
      document.body.style.color = "white";
      showAlert("Dark Mode has been enabled", "success");
      document.title = "Dark Mode";
    } else {
      setMode("light");
      setModeText("Enable DarkMode");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light Mode has been enabled", "success");
      document.title = "Light Mode";
    }
  };
  return (
    <>
      {/* <Router> */}
        <NavBar
          mode={mode}
          toggleMode={toggleMode}
          modeText={modeText}
        ></NavBar>
        <Alert alert={alert}></Alert>
        <div className="container my-3">
         
              {/* <About /> */}
          
    
                <TextForm
                  showAlert={showAlert}
                  heading="Enter text 2 analyze"
                  mode={mode}
                />
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
