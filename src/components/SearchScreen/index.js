import React from 'react';
import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import searchService from "../../services/search-service";

const SearchScreen = () => {
    const {mealNames} = useParams();
    const [search, setSearch] = useState('');
    const [resultMeal, setResultMeal] = useState({meals: []});

    useEffect(() => {
        if(mealNames !== "undefined" && typeof mealNames !== "undefined")
            searchService.findMealByName(mealNames)
                .then((resultMeal) => {
                    setResultMeal(resultMeal)
                })
    },[])

    const searchMealName = (mealName) => {
        searchService.findMealByName(mealName)
            .then((resultMeal) => {
                setResultMeal(resultMeal)
            })
    }

    return (
        <div className="container-fluid">
            <img className="searchPage position-relative" src="../../../images/recipe.jpg" className="img-fluid w-100 h-100" alt="placeholder" />
            <div className="position-absolute top-50 start-50 translate-middle-x">
                <div className="d-flex justify-content-center form-inline my-2 my-lg-0">
                    <div className="row">
                        <div className="col-sm-2 col-md-2"></div>
                        <div className="col-sm-5 col-md-6 col-lg-7 col-xl-8">
                            <div className="input-group input-group-lg">
                                <input value={search}
                                       onChange={(e) => {
                                           setSearch(e.target.value)
                                           if (e.target.value === '') {
                                           setResultMeal({});
                                        }
                                       }}
                                       onKeyPress={(e) => {
                                           if (e.key === 'Enter') {
                                               searchMealName(search);
                                           }
                                       }}
                                       className="form-control mr-sm-2 rounded-pill" style={{ width: '500px' }}
                                       type="search" placeholder="Search for a recipe"/>
                            </div>
                        </div>
                        <div className="col-sm-1 col-md-2">
                            <button onClick={() => searchMealName(search)}
                                className="btn btn-warning my-2 my-sm-0 btn-lg rounded-pill" type="submit">Search</button>
                        </div>
                    </div>
                </div>

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