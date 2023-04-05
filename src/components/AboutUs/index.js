import React from 'react';

const AboutUs = () => {
    return(
        <div>
            <h1>About Us</h1>
           <p class="fs-4">
               Welcome to [Website Name]! We are a team of food enthusiasts and tech-savvy individuals who are passionate about bringing delicious recipes and culinary inspiration to your fingertips.

               At [Website Name], we believe that cooking and eating are not just about sustenance - they're about creativity, community, and connection. Whether you're cooking for one or feeding a crowd, we believe that everyone should have access to easy-to-follow recipes, fresh ingredients, and helpful cooking tips.
           </p>
            <figure className="text-center">
                <blockquote className="blockquote">
                    <p>Food is not just fuel, it's information. It talks to your DNA and tells it what to do.</p>
                </blockquote>
                <figcaption className="blockquote-footer">
                    <cite title="Source Title">Dr. Mark Hyman</cite>
                </figcaption>
            </figure>
        </div>
    )
}
export default AboutUs