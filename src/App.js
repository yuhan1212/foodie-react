import React from "react";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import Login from "./components/Login";
import Register from "./components/Register";
import NotFound from "./components/NotFound";
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
        </Provider>
      </ChakraProvider>
  )
}

export default App;