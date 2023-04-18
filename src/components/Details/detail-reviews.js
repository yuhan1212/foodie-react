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
    //console.log(currentUser)

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

            <ul className="p-0">
                {
                    review && review[0] && review.map((item, i) => {
                        return(
                            <div className="border-1 pb-2"
                                key={i}>
                                <Link className="fw-bold fs-5 mb-2" to={`/profile/${item.userId}`}>
                                    {item.username}:
                                </Link>
                                <div className="fs-6 ms-3">
                                    {item.textArea}
                                </div>

                            </div>
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
