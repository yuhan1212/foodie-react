import React from 'react';

const AboutUs = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-8 mx-auto">
                    <h1 className="text-center mb-5 home-text-1">About Us</h1>
                    <img src="../../../images/display.png" className="img-fluid rounded mb-5" alt="Team photo" />
                    <p className="lead">
                        Welcome to Foodie! We are a team of food enthusiasts and tech-savvy individuals who are passionate about bringing delicious recipes and culinary inspiration to your fingertips.
                        <br/><br/>At Foodie, we believe that cooking and eating are not just about sustenance - they're about creativity, community, and connection. Whether you're cooking for one or feeding a crowd, we believe that everyone should have access to easy-to-follow recipes,
                        fresh ingredients, and helpful cooking tips.
                    </p>

                    <figure className="text-center">
                        <blockquote className="blockquote">
                            <p className="mb-0">Food is not just fuel, it's information. It talks to your DNA and tells it what to do.</p>
                        </blockquote>
                        <figcaption className="blockquote-footer">Dr. Mark Hyman</figcaption>
                    </figure>
                </div>
            </div>
        </div>
    )
}
export default AboutUs