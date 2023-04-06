import React from 'react';
import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import searchService from "../../services/search-service";

const HomeScreen = () => {
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
            <img src="../../../images/recipe.jpg" className="img-fluid w-100 h-100" alt="placeholder" />
            <div className="position-absolute top-50 start-50 translate-middle">
                <div className="form-inline my-2 my-lg-0">
                    <div className="row">
                        <div className="col">
                            <input value={search}
                                   onChange={(e) => {
                                       setSearch(e.target.value)}
                                   }
                                   className="form-control mr-sm-2" style={{ width: '300px' }}
                                   type="search" placeholder="Search for a receipy"/>
                        </div>

                        <div className="col-auto">
                            <button onClick={() => searchMealName(search)}
                                className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
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
export default HomeScreen;