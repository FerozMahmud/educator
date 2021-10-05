import React, { useEffect, useState } from 'react';

const Team = () => {


    //......Load team data from fake data start here.......//

    const [members, setMembers] = useState([]);

    useEffect(() => {
        fetch("./Team.JSON")
            .then(res => res.json())
            .then(data => setMembers(data))
    }, []);

    return (
        <div>


            {/* ..............................................
            ..............Team page start here............
            .............................................. */}

            <div className="container">
                <h1 className='d-flex justify-content-center text-success p-2'>Meet Our Instractors</h1>
                <div className="row row-cols-1 row-cols-md-3 g-4">

                    {
                        members.map(instractor =>
                            <div className="col">
                                <div className="card h-100 bg">
                                    <img src={instractor.image} className="card-img-top" height='300' width='200' alt="" />
                                    <div class="card-body">
                                        <h5 class="card-title">{instractor.name}</h5>
                                        <p class="card-text">{instractor.designation}</p>
                                        <button className='btn btn-success'>Details</button>
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

export default Team;