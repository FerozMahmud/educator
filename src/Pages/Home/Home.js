import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div>

            {/* ..............................................
            ..............Home page start here............
            .............................................. */}

            <div className="row px-5">


                {/* ..........Home page cover part start here.......... */}

                <div className="col-sm-6 p-5 my-5">
                    <h1 className='text-primary'>Result-Oriented</h1>
                    <h1>Online Tutoring Services!</h1>
                    <h4>World-class education for your world</h4>
                    <p>Get highest quality personalized 1:1 online tutoring, based on your needs & learning style, at honest prices. 100% learning & satisfaction delivered to students.</p>
                    <button className='btn btn-primary'>Read More</button>
                </div>
                <div className="col-sm-6 img-main">
                    <img src="./bg.jpg" alt="" />
                </div>
            </div >


            {/* ..........Services part start here.......... */}

            <div className='container p-5'>
                <h1 className='text-primary'>Our Services:</h1>
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    <div className="col">
                        <div className="card h-100 bg">
                            <img height='170' src="./cart-1.jpg" className="card-img-top" alt="" />
                            <div class="card-body">
                                <h5 class="card-title">Social Science and Humanities</h5>
                                <p class="card-text">Price: $59</p>
                                <button className='btn btn-success'>Enroll Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 bg">
                            <img height='170' src="./cart-2.jpg" className="card-img-top" alt="" />
                            <div class="card-body">
                                <h5 class="card-title">Data science and software</h5>
                                <p class="card-text">Price: $59</p>
                                <button className='btn btn-success'>Enroll Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 bg">
                            <img height='170' src="./cart-3.png" className="card-img-top" alt="" />
                            <div class="card-body">
                                <h5 class="card-title">Programming and Masterclass</h5>
                                <p class="card-text">Price: $59</p>
                                <button className='btn btn-success'>Enroll Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 bg">
                            <img height='170' src="./cart-4.png" className="card-img-top" alt="" />
                            <div class="card-body">
                                <h5 class="card-title">Programming for Beginners</h5>
                                <p class="card-text">Price: FREE</p>
                                <button className='btn btn-success'>Enroll Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            {/* ..........Reviwe part start here.......... */}

            <div className='container p-5'>
                <h1 className='text-primary'>What our learners say?</h1>
                <div className="row row-cols-1 row-cols-md-3 g-4 p-5">
                    <div className="col">
                        <div className="card h-100 bg">
                            <img height='360' width='180' src="./learner-1.jpg" className="card-img-top" alt="" />
                            <div class="card-body">
                                <h3 class="card-title">Jonh Doe</h3>
                                <p class="card-text">I totally recommend this tutor! he's always available and he has helping me a lot lately :)</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 bg">
                            <img height='360' width='180' src="./learner-3.jpg" className="card-img-top" alt="" />
                            <div class="card-body">
                                <h3 class="card-title">Emma Bostian</h3>
                                <p class="card-text">For those asking, I'm taking the Systems Design course by @Educator and loving it so far!</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 bg">
                            <img height='360' width='180' src="./learner-2.jpg" className="card-img-top" alt="" />
                            <div class="card-body">
                                <h3 class="card-title">Anthony Walker</h3>
                                <p class="card-text">This was the perfect assignment completion, it REALLY helped me understand the material. Thanks!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;