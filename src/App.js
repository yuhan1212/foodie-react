import React from "react";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import HomeScreen from "./components/HomeScreen";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import NotFound from "./components/NotFound";
import Profile from "./components/Profile";
import {ChakraProvider} from "@chakra-ui/react";
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./reducers/user-reducer";


const store = configureStore({
    reducer: {
        user: userReducer,
    }
});

const App = () => {
  return (
      <ChakraProvider>
        <Provider store={store}>
            <BrowserRouter>
                <div className="container-fluid">
                    <Navbar/>
                    <Routes>
                        <Route path="/*" element={<HomeScreen/>}/>
                        <Route path="/profile" element={<Profile/>}/>
                        <Route path="/login" element={<Login />}/>
                        <Route path="/register" element={<Register />}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </Provider>
      </ChakraProvider>
  )
}

export default App;