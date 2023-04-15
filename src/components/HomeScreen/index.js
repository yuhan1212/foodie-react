import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import "./index.css";
import mealService from "../../services/search-service";



const HomeScreen = () => {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        const mealIds = [52854, 52772, 52928, 53065]; // array of meal IDs to fetch
        const promises = mealIds.map((id) => mealService.findMealById(id));
        Promise.all(promises)
            .then((data) => {
                const mealsData = data.map((d) => d.meals[0]);
                setMeals(mealsData);
            })
            .catch((error) => console.error(error));
    }, []);

    if (meals.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className="body" style={{backgroundColor: "#f2f2f2"}}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-5 ">
                        <h1 className="home-text-1 homeScreen-title text-center">WANT TO EAT HEALTHY?</h1>
                        <h3 className="home-text-2 homeScreen-subTitle text-center">Join Foodie community to cook fresh meal at home!</h3>
                        <br/>
                        <div className="text-center">
                            <Link to="/search">
                                <button type="button" className="rounded-pill btn btn-warning btn-lg">
                                    <i className="bi bi-search"></i> Search for a Meal!
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="col-7 d-none d-md-block" style={{padding: 0}}>
                        <div style={{backgroundColor: "#fff"}}>
                            <img src="../../../images/egg.jpg" className="img-fluid rounded-2" alt="My Image"/>
                        </div>
                    </div>
                </div>

                <br/><br/><br/>
                <div className="row">
                    <div className="col-12">
                        <h2 className="text-center home-text-1">Our Featured Recipes</h2>
                        <hr/>
                    </div>

                    <div className="row feature-card">
                        {meals.map((meal) => (
                            <div className="col-6 col-lg-3" key={meal.idMeal}>
                                <div className="card-container">
                                    <img src={meal.strMealThumb} className="card-img-top" alt={meal.strMeal} /><br/>
                                    <div className="card-body">
                                        <h5 className="card-title">{meal.strMeal}</h5>
                                        <p className="card-text">{meal.strInstructions.substring(0, 100)}</p>
                                        <Link to={`/details/${meal.idMeal}`}>
                                            <button type="button-featured" className="rounded-pill btn btn-warning btn-lg">
                                                <i className="bi bi-search"></i> Learn More
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

                <br/><br/><br/><br/><br/>
                <footer className="footer_section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 footer-col">
                                <div className="footer_contact">
                                    <h4>Contact Us</h4>
                                    <div className="contact_link_box">
                                        <a href="https://github.com/yuhan1212/foodie-react">
                                            <i className="bi bi-github"></i>
                                            <span> GITHUB LINK</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5 footer-col">
                                <div className="footer_detail">
                                    <a id="footer-logo" href="" className="footer-logo">
                                        <i className="bi bi-egg-fried"></i> Foodie
                                    </a>
                                    <p>Everything you need to create delicious meals at home is here!</p>
                                    <div className="footer_social">
                                        <a href="">
                                            <i className="bi bi-facebook me-2"></i>
                                        </a>
                                        <a href="">
                                            <i className="bi bi-twitter me-2"></i>
                                        </a>
                                        <a href="">
                                            <i className="bi bi-linkedin me-2"></i>
                                        </a>
                                        <a href="">
                                            <i className="bi bi-instagram me-2"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <div className="container text-center">
                            <p>
                                <span><i className="bi bi-c-circle"></i> 2023 All Rights Reserved By Web 5610</span>
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}
export default HomeScreen;