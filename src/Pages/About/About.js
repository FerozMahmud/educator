import React from 'react';

const About = () => {
    return (
        <div>

            {/* ...............Top about section here........... */}

            <div className='container'>
                <div className="row g-4">
                    <div className="col p-5">
                        <img src="./about-bg.png" className="card-img-top" alt="" />
                    </div>
                    <div className="col p-5">
                        <h1 className='text-primary'>World best Virtual</h1>
                        <h1>Learning network</h1>
                        <h1 className='text-success'>education eLearning</h1>
                        <p>We provide one-on-one sessions with expert tutors to focus on your individual study needs. You are the one incharge and each session is designed according to your learning pace. Your tutor can tailor your curriculum so that it suits you. Our personalized tutoring sessions have helped thousands of students reach for better grades in the class. Besides, you have the liberty to address specific questions to help you gain much needed insights over a topic. Book your personalized doubt clearing session now!

                        </p>
                        <button className='btn btn-primary'>Get started</button>
                    </div>
                </div>
            </div>

            {/* ...............Bottom about section here........... */}

            <div className='container'>
                <h1 className='text-success'>Why is it best?</h1>
                <div className="row p-5 g-4">
                    <div className="col">
                        <h4 className='text-primary p-2'>Interactive Whiteboard</h4>
                        <p>Our digital whiteboard equipped with audio-video-chat features is the best way to enjoy learning at home! Whiteboard tutoring sessions help you voice your query instantly. What’s more, you can share files, upload textbook questions, draw diagrams and ask your tutor to review your homework. With Whiteboard learning - say ‘Yes’ to active learning today!</p>
                    </div>
                    <div className="col">
                        <h4 className='text-primary p-2'>24/7 Tutor Availability</h4>
                        <p>24/7 tutor availability assured at TutorEye matched to your learning style! Whether it’s morning or late at night, professional tutors in Math, Physics or English and many more are here for round the clock help. Schedule a session based on your need or opt for instant tutoring in case you are stuck with a difficult problem. Our expert tutors are happy to fit your schedule anytime of the day!</p>
                    </div>
                    <div className="col">
                        <h4 className='text-primary p-2'>Lifetime Access</h4>
                        <p>You just bring the brain and we will take care of the rest. Are you ready to bring the lesson home? Whether you prefer your dorm room, home or a cafe, just make sure you have a wi-fi connection to start your session. Study anytime, anywhere by making the most of one-on-one live study sessions to get clarity on difficult topics. Choose a location of your convenience or wherever you feel most comfortable to begin learning.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;