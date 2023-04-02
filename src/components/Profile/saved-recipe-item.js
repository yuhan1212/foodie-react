import React from "react";
const savedRecipeItem = ({ saved_recipe }) => {
    console.log("in saved recipe item")
    console.log(saved_recipe)
    return (
        <li className="list-group-item">
            <div className="row">

                <div className="col-3 d-flex justify-content-center">
                    <img width={70} className="float-end rounded-3" src={saved_recipe.strMealThumb}/>
                </div>

                <div className="col-7 my-auto">
                    <div className="fw-bold">{saved_recipe.strMeal}</div>
                </div>

                <div className="col-2 d-flex justify-content-center my-auto">
                    <a className="mx-auto" href="#">
                        <i className="bi bi-heart-fill" style={{'color': 'tomato'}}></i>
                    </a>
                </div>

            </div>
        </li>
    )
}
export default savedRecipeItem;