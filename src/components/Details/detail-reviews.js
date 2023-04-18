import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import reviewService from "../../services/review-service";
import {useSelector, useDispatch } from "react-redux";
import {createReview} from "../../services/review-thunks"


const ReviewList = ({mealId, user, mealName, mealImg}) => {
    const [review, setReview] = useState([])
    const [myReview, setMyReview] = useState({})
    const currentUser = useSelector(state => state.user);
    const dispatch = useDispatch();
    console.log(currentUser)

    useEffect(() => {
        findReviewsForMeal()
    })

    const findReviewsForMeal = () => {
        reviewService.findReviewsForMeal(mealId)
            .then((data) => {
                setReview(data)
            })
    }

    const submitHandler = () => {
        dispatch(createReview({
            mealId,
            textArea: myReview.textArea,
            username: currentUser.username,
            mealName,
            mealImg,
            userId: currentUser._id
        }));
        setReview(review => [...review, myReview])
    }
    return (
        <div>
            <h2>
                Reviews
            </h2>

            <ul>
                {
                    review && review[0] && review.map((item, i) => {
                        return(
                            <li className="list-spacing"
                                key={i}>
                                <Link className="reviews-title" to={(currentUser && currentUser._id && item.userId && currentUser._id === item.userId) ?
                                    "/profile" : `/profile`}>
                                    {item.username}
                                </Link>
                                <div className="reviews-text">
                                    {item.textArea}
                                </div>

                            </li>
                        )
                    })
                }
            </ul>
            {
                !currentUser.username &&
                <>
                    <div className='alert alert-warning'>
                        Please login to submit your review.
                    </div>
                </>
            }
            {
                currentUser.username &&
                <>
                    <h5 className="separation-padding">
                        Submit Your Review
                    </h5>
                    <div>
                        <textarea id="reviewText" placeholder="Please enter here."
                                  value={myReview.textArea}
                                  onChange={(e) => {
                                      setMyReview({...myReview,
                                          textArea: e.target.value,
                                          username: currentUser.username});
                                  }}
                                  className="form-control"/>
                    </div>
                    <br/>
                    <div className="d-grid gap-2 d-md-block">
                        <button className = "btn btn-primary"
                                onClick={submitHandler}>
                            Submit
                        </button>
                    </div>
                </>
            }
        </div>
    )
}
export default ReviewList;
