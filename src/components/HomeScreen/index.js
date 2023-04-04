import React from 'react';

const HomeScreen = () => {

    return (
        <div>
            <img src="../../../images/food.png" alt="display" />
            <div className="container-fluid">

                <div className="hero-section">
                    <div className="hero-content">

                        <h1>Delicious Recipes</h1>
                        <p>Discover a world of mouth-watering dishes</p>

                        <form className="form-inline">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Search for recipes"/>
                            </div>
                            <button type="submit" className="btn btn-primary">Search</button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default HomeScreen;