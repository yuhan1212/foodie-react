import React from "react";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import Login from "./components/Login";
import Register from "./components/Register";
import NotFound from "./components/NotFound";
const App = () => {
  return (
      <>
        <div>CS5610 Foodie</div>
        <BrowserRouter>
          <div className="container">
            <Routes>
                <Route path="/login"
                          element={<Login />}/>
                <Route path="/register"
                            element={<Register />}/>
                <Route path="/*"
                            element={<NotFound />}/>
            </Routes>
            </div>
        </BrowserRouter>
      </>
  )
}

export default App;