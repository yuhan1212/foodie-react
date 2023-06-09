import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import mealService from "../../services/search-service";
import ReviewList from "./detail-reviews"
import likeService from "../../services/favorite-service";
import dislikeService from "../../services/dislike-service"
import {useSelector} from "react-redux";
import { IconButton } from "@chakra-ui/react";
import {FaHeart, FaThumbsDown, FaRegThumbsDown, FaRegHeart} from "react-icons/fa";


const DetailsScreen = ({user, setUser}) => {
    const {mealId} = useParams()
    const [meal, setMeal] = useState ([])
    const [liked, setLiked] = useState(false);
    const [disliked, setDisliked] = useState(false);
    const currentUser = useSelector(state => state.user);

    useEffect(()=> {
        if (mealId) {
            mealService.findMealById(mealId)
                .then((data) => {
                    setMeal(data)
                })
        }
        if (currentUser._id) {
            likeService.isFavorite(mealId, currentUser._id).then((res) => setLiked(res));
            dislikeService.isDislike(mealId, currentUser._id).then((res) => setDisliked(res));
        }
    }, [mealId, currentUser]);


    const mealName = meal.meals && meal.meals[0] && meal.meals[0].strMeal;
    const mealImg = meal.meals && meal.meals[0] && meal.meals[0].strMealThumb;

    // Get the 'strIngredients' that are not null or empty for all meals
    const ingredientsList =
        meal && meal.meals && Array.isArray(meal.meals)
            ? meal.meals
                .map((meal) => {
                    return Object.keys(meal)
                        .filter(
                            (key) =>
                                key.startsWith('strIngredient') &&
                                meal[key] !== null &&
                                meal[key] !== ''
                        )
                        .map((key) => meal[key]);
                })
                .flat()
            : [];

    const mealInstruction = meal.meals && meal.meals[0] && meal.meals[0].strInstructions;


    const onClickLike = async () => {
        if (!liked) {
            await likeService.addFavorite(mealId, currentUser._id, currentUser.username, mealName, mealImg);
            setLiked(true);
        } else {
            const allUserFav = await likeService.findFavoritesByUserId(currentUser._id);
            const curFav = allUserFav.filter((fav) => fav.recipeId === mealId);
            console.log('curFav', curFav, curFav[0]._id)
            await likeService.removeFavorite(curFav[0]);
            setLiked(false);
        }

    }

    const onClickDislike = async () => {
        if (!disliked) {
            await dislikeService.addDislike(mealId, currentUser._id, currentUser.username, mealName, mealImg);
            setDisliked(true);
        } else {
            const allUserDislike = await dislikeService.findDislikesByUserId(currentUser._id);
            const curDis = allUserDislike.filter((dis) => dis.recipeId === mealId);
            console.log('curDis', curDis, curDis[0]._id)
            await dislikeService.removeDislike(curDis[0]);
            setDisliked(false);
        }

    }
    console.log("liked:", liked)
    console.log("disliked:", disliked)
    
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
                        {currentUser._id && currentUser.role === "USER" && (
                            <div className="col-xs-4">
                                { (
                                    <IconButton
                                        className="btn"
                                        onClick={onClickLike}
                                        disabled={liked}
                                        style={{ marginRight: '25px' }}
                                        icon={liked? <FaHeart /> : <FaRegHeart/>}
                                    />
                                )}
                                { (
                                    <IconButton
                                        className="btn"
                                        onClick={onClickDislike}
                                        disabled={disliked}
                                        icon={disliked ? <FaThumbsDown /> : <FaRegThumbsDown />}
                                    />
                                )}
                            </div>
                        )}
                    </div>
                    <div className="container ps-0 pt-2">
                        <img src={mealImg}
                             width={600}
                             alt="meal pic"/>
                    </div>
                    <br/>

                    <div className="container ps-0">
                        <h2 className="list-group-item">Ingredients </h2>
                        <ul className="list-group">
                            {ingredientsList.map((ingredient, index) => (
                                <li className="list-group-item" key={index}>{ingredient}</li>
                            ))}
                        </ul>
                    </div>
                    <br/>


                    <h2> Instruction </h2>
                    <p>
                        {mealInstruction}
                    </p>

                    <div className="container p-0">
                        <ReviewList mealId={mealId} user={user} setUser={setUser} mealName={mealName} mealImg={mealImg}/>
                    </div>
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
