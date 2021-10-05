import React, { useEffect, useState } from 'react';

const Services = () => {

    //......Load services data from fake data start here.......//

    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch("./Services.JSON")
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);
    return (
        <div>


            {/* ..............................................
            ..............Services page start here............
            .............................................. */}

            <div className='container'>
                <h1 className='d-flex justify-content-center text-primary'>Our Courses</h1>
                <div className="row row-cols-1 row-cols-md-3 pt-5 g-4">
                    {
                        courses.map(services =>
                            <div className="col">
                                <div className="card h-100 bg">
                                    <img src={services.image} className="card-img-top" height='250' width='200' alt="" />
                                    <div class="card-body">
                                        <h5 class="card-title">{services.title}</h5>
                                        <p class="card-text">Price: ${services.price}</p>
                                        <button className='btn btn-success'>Enroll Now</button>
                                    </div>
                                </div>
                            </div>
                        )
                    };
                </div>
            </div>
        </div>
    );
};

export default Services;