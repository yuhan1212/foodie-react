import React from 'react';

const HomeScreen = () => {

    return (
        <div className="position-relative">
            <img src="../../../images/food.png" className="img-fluid w-100 h-100" alt="placeholder" />
            <div className="position-absolute top-50 start-50 translate-middle">
                <form className="form-inline my-2 my-lg-0">
                    <div className="row">
                        <div className="col">
                            <input className="form-control mr-sm-2" style={{ width: '300px' }} type="search" placeholder="Search" aria-label="Search" />
                        </div>
                        <div className="col-auto">
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default HomeScreen;