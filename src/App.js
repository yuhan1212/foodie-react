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
import {ChakraProvider} from "@chakra-ui/react";
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./reducers/user-reducer";
import dislikeReducer from "./reducers/dislike-reducer";
import favoriteReducer from "./reducers/favorite-reducer";
import usersReducer from "./reducers/all-user-reducer";
import BaseFrame from "./components/BaseFrame";
import reviewReducer from "./reducers/review-reducer";

const store = configureStore({
    reducer: {
        user: userReducer,
        favoritesData: favoriteReducer,
        dislikeData: dislikeReducer,
        usersData: usersReducer,
        reviewData: reviewReducer,
    }
});

const App = () => {
  return (
      <ChakraProvider>
        <Provider store={store}>
            <BrowserRouter>
                <BaseFrame>
                    <Navbar/>
                    <Routes>
                        <Route path="/*" element={<HomeScreen/>}/>
                        <Route path="/search" element={<SearchScreen/>}/>
                        <Route path="/search/:searchTerm" element={<SearchScreen/>}/>
                        <Route path="/profile" element={<Profile/>}/>
                        <Route path="/profile/:uid" element={<Profile/>}/>
                        <Route path="/aboutus" element={<AboutUs/>}/>
                        <Route path="/details/:mealId" element={<DetailsScreen/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/register" element={<Register/>}/>
                    </Routes>
                </BaseFrame>
            </BrowserRouter>
        </Provider>
      </ChakraProvider>
  )
}

export default App;