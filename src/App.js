import React from "react";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import SearchScreen from "./components/SearchScreen";
import HomeScreen from "./components/HomeScreen";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import DetailsScreen from "./components/Details/detail-screen";
import AboutUs from "./components/AboutUs";
import Others from "./components/Others";
import {ChakraProvider} from "@chakra-ui/react";
import {Provider, useSelector} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./reducers/user-reducer";
import favoriteReducer from "./reducers/favorite-reducer";

const store = configureStore({
    reducer: {
        user: userReducer,
        favoritesData: favoriteReducer,
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
                        <Route path="/search" element={<SearchScreen/>}/>
                        <Route path="/profile" element={<Profile/>}/>
                        <Route path="/others" element={<Others/>}/>
                        <Route path="/aboutus" element={<AboutUs/>}/>
                        <Route path="/details/:mealId" element={<DetailsScreen/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/register" element={<Register/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </Provider>
      </ChakraProvider>
  )
}

export default App;