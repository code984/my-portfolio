import React from 'react';
import Title from '../layout/Title';
import Projectcard from './Projectcard';
import pic from '../Manoj.png';
import coll from "../College.png"
import kis from "../testimonial/kishan.jpeg"
import car from "../testimonial/images.jpeg"
const Project = () => {
    return (
        <section id='project' className='w-full py-20 border-b-[1px] border-b-black'>
            <div className='flex justify-center items-center text-center mb-12'>
                <Title title='VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK' des='MY Project' />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                <Projectcard
                    title='College Career'
                    des="College Career Finder, built with React.js, Redux, and Firebase, simplifies your college search. 
                    Locate nearby colleges easily, explore detailed profiles, and receive personalized recommendations.
                     Our real-time database keeps you informed, while user reviews offer insights.
                      Save and compare your favorites and use interactive maps for efficient planning. 
                      Whether you're a high school student, transfer candidate, or a parent, College Career Finder streamlines your journey.
                     Join us for free to find the perfect nearby college that can shape your future today!"
                    src={coll}
                />
                <Projectcard
                    title='Kishan'
                    des="Kisan is a cutting-edge platform, built using React.js, Firebase, and Redux, that empowers farmers with essential farming insights
                    . From seed selection to crop cultivation, we provide valuable information to optimize agricultural practices.

                   
                    Seed Repository: Explore detailed seed information for informed choices.
                    Farming Guidelines: Access practical advice on diverse farming techniques.
                    Real-Time Updates: Stay informed with the latest farming trends.
                    Community Engagement: Share experiences and advice within our farming community.
                    Saved Resources: Easily store and retrieve crucial farming information. "
                    src={kis}
                />
                <Projectcard
                    title='Gadiyo ka Mela'
                    des="Gadiyo Ka Mela, powered by React.js, Redux, and Firebase, is your ultimate online destination for buying, selling, and renting vehicles. Our platform simplifies the entire process, ensuring a smooth and secure experience for every customer.
                    Buy and Sell: Easily browse and list vehicles for sale.

                    Renting Made Easy: Quickly book rental vehicles for hassle-free travel.
                    
                    Comprehensive Listings: Access detailed vehicle information, photos, and prices.
                    
                    Real-Time Updates: Stay informed with the latest listings and market trends.
                    
                    Discover the convenience of vehicle transactions with Gadiyo Ka Mela. Join us today and embark on your journey to automotive fulfillment.!"
                    src={car}
                />
                <Projectcard
                    title='Social media clone'
                    des="I'm the React Native mobile app developer, crafting seamless and captivating mobile experiences using the power of JavaScript and native components."
                    src={pic}
                />
                <Projectcard
                    title='Social media clone'
                    des="I'm the React Native mobile app developer, crafting seamless and captivating mobile experiences using the power of JavaScript and native components."
                    src={pic}
                />
                <Projectcard
                    title='Social media clone'
                    des="I'm the React Native mobile app developer, crafting seamless and captivating mobile experiences using the power of JavaScript and native components."
                    src={pic}
                />
            </div>
        </section>
    );
};

export default Project;

