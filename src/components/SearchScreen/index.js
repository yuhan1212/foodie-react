import React from 'react';
import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import searchService from "../../services/search-service";
import "./index.css";

const SearchScreen = () => {
    const {mealNames} = useParams();
    const [search, setSearch] = useState('');
    const [resultMeal, setResultMeal] = useState({meals: []});
    const [noResults, setNoResults] = useState(false);

    useEffect(() => {
        if(mealNames !== "undefined" && typeof mealNames !== "undefined") {
            searchService.findMealByName(mealNames)
                .then((resultMeal) => {
                    setResultMeal(resultMeal)
                })
        }
    },[])

    const searchMealName = (mealName) => {
        searchService.findMealByName(mealName)
            .then((resultMeal) => {
                if(resultMeal.meals){
                    setResultMeal(resultMeal)
                    setNoResults(false);
                } else {
                    setNoResults(true);
                }
            })
    }

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", position: "relative" }}>
            <img src="../../../images/recipe.jpg" alt="background"
                 style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}/>

            <div style={{ position: "relative", maxWidth: "600px", width: "100%" }}>
                <h1 className="home-text-1" style={{ margin: 0 }}>Find Your Meal!</h1><br/>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <input type="text" placeholder="Search for a recipe..." style={{ width: "100%",
                        padding: "10px",
                        borderRadius: "5px 0 0 5px",
                        border: "none",
                        outline: "none" }}
                           value={search}
                           onChange={(e) => {
                               setSearch(e.target.value)
                               if (e.target.value === '') {
                                   setResultMeal({});
                                   setNoResults(false);
                               }
                           }}
                           onKeyPress={(e) => {
                               if (e.key === 'Enter') {
                                   searchMealName(search);
                               }
                           }}
                           className="form-control rounded-pill"/>
                    <button onClick={() => searchMealName(search)}
                            style={{ padding: "10px 20px",
                                borderRadius: "0 5px 5px 0",
                                backgroundColor: "#ffc107",
                                color: "black",
                                border: "none",
                                outline: "none",
                                marginLeft: "10px"}}
                            className="btn btn-lg rounded-pill">
                        Search
                    </button>
                </div>

                {
                    noResults && <div style={{ color: "black", textAlign: "center", marginTop: "20px" }}>
                        No results found for "{search}" Please input a meal.
                    </div>
                }

                <ul className="list-group position-absolute">
                    {
                        resultMeal && resultMeal.meals && resultMeal.meals.map((meal) => {
                            console.log(resultMeal)
                            return(
                                <li className="list-group-item">
                                    <Link to={`/details/${meal.idMeal}`}>
                                        <div>
                                            {meal.strMeal}
                                            <img className="float-right" src={meal.strMealThumb} width={50}/>
                                        </div>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

        </div>
    )
}
export default SearchScreen;