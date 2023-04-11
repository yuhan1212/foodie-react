import React, {useEffect, useState} from 'react'
import { useParams} from 'react-router-dom'
import mealService from "../../services/search-service";


const DetailsScreen = () => {
    const {mealId} = useParams()
    const [meal, setMeal] = useState ([])

    const findMealByMealId = () => {
        mealService.findMealById(mealId)
            .then((data) => {
                setMeal(data)
            })
    }
    useEffect(()=> {
        findMealByMealId();
    }, [])


    const mealName = meal.meals && meal.meals[0] && meal.meals[0].strMeal;
    const mealImg = meal.meals && meal.meals[0] && meal.meals[0].strMealThumb;

    // Get the 'strIngredients' that are not null or empty for all meals
    const ingredientsList = meal && meal.meals  && meal.meals
        .map(meal => {
            return Object.keys(meal)
                .filter(key => key.startsWith('strIngredient') && meal[key] !== null && meal[key] !== '')
                .map(key => meal[key]);
        })
        .flat();

    // Populate the list-group with the ingredients
    const ingredientListElement = document.getElementById('ingredientList');
    if (ingredientListElement) {
        ingredientListElement.innerHTML = ingredientsList.map(ingredient => `<li>${ingredient}</li>`).join('');
    }

    const mealInstruction = meal.meals && meal.meals[0] && meal.meals[0].strInstructions;
    // console.log(mealName)

    return (

        <div className="container-fluid top-margin bottom-margin">
            <div className="row">
                <div className="col-sm-2"/>
                <div className="col-sm-8">
                    <br/>
                    <h2 className="">

                        {mealName}

                    </h2>
                    <div className="container p-0">
                        <img src={mealImg}
                             width={600}/>
                    </div>
                    <br/>
                    <h2 className="list-group-item">Ingredients </h2>
                    <div className="container" style={{paddingLeft: '20px'}}>
                        <ul className="list-group-item">
                            <li className="list-group-item" id="ingredientList"></li>
                        </ul>
                    </div>

                    <h2> Instruction </h2>
                    <p>
                        {mealInstruction}
                    </p>
                </div>
                <div className="col-sm-2"/>
            </div>
            <pre>
            {/*{JSON.stringify(meal, null, 2)}*/}
        </pre>
        </div>

    )
}
export default DetailsScreen
