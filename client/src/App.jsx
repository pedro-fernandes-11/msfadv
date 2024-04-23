import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Home from "./pages/Home"

import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import "./global.css"

function App() {
  console.log("a")
  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>
          <Route exact path="/customer" Component={Home} />
        </Routes>
      </Router>
    </>
  )
}

export default App
