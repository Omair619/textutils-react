import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      typ: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000)
  }
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "#080814"
      showAlert("Dark mode has been enabled", "success")
      document.title = "dark mode"
      // setInterval(()=>{
      //   document.title="dark mode"
      // },2000)
      // setInterval(()=>{
      //   document.title="textutils"
      // },1500)
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("Dark mode has been disabled", "success")
      document.title = "Textutils - Home"
    }
  }
  return (
    <>
      {/* <BrowserRouter> */}
        {/* <Navbar title="textutils" aboutText="About Textutils"/> */}
        {/* <Navbar/> */}
        <Navbar title="textutils" mode={mode} setMode={setMode} showAlert={showAlert} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route exact path="/about" element={<About />}> */}
            {/* </Route> */}
            {/* <Route exact path="/" element={<TextForm showAlert={showAlert} heading="enter the text to analyze below" mode={mode} />}> */}
            <TextForm showAlert={showAlert} heading="enter the text to analyze below" mode={mode} />
            {/* </Route> */}
          {/* </Routes> */}
        </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
