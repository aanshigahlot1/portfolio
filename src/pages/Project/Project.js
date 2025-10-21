import React from 'react';
import './Project.css';

const Project = () => {
    return (
        <>
            <div className="container project">
                <h2 className="col-12 mt-3 mb-1 text-center text-uppercase"> Top Recents Projects</h2>
                <hr />
                <p className="pb-3 text-center">
                    Here are a few projects I've worked on recently. Want to see more?
                </p>
            </div>

            {/* Static Project Card Section */}
            <div className="container">
                <div className="row" id="ads">
                    
                    {/* Hardcoded Card 1 (like in the image) */}
                    <div className="col-md-4">
                        <div className="card rounded">
                            
                            {/* Card Image and Notify Badge */}
                            <div className="card-image">
                                <span className="card-notify-badge">Full Stack</span>
                                <img
                                    src="https://search.brave.com/images?q=e+comm+website+images&context=W3sic3JjIjoiaHR0cHM6Ly9yZXBvc2l0b3J5LWltYWdlcy5naXRodWJ1c2VyY29udGVudC5jb20vMjg1ODU2MDQwLzY5MTgwODgwLTIxMzgtMTFlYi04YjA2LTAzZGIzZWYxYWJhZCIsInRleHQiOiJNRVJOX1N0YWNrX1Byb2plY3RfRWNvbW1lcmNlX0hheXJvbyIsInBhZ2VfdXJsIjoiaHR0cHM6Ly9naXRodWIuY29tL3RvcGljcy9lY29tbWVyY2Utd2Vic2l0ZSJ9XQ%3D%3D&sig=65ae911fdef7ad0d3329aa88e188be785f07b09db535fe91fb76f6a658d46917&nonce=0a2ad0b90b7d849cd3251075d2162866&source=imageCluster"
                                    alt="project1"
                                />
                            </div>

                            {/* Tech Stack Overlays */}
                            <div className="card-image-overly m-auto">
                                <span className="card-detail-badge">Node</span>
                                <span className="card-detail-badge">Express</span>
                                <span className="card-detail-badge">react</span>
                                <span className="card-detail-badge">Mongodb</span>
                            </div>

                            {/* Card Body with Title and Button */}
                            <div className="card-body text-center">
                                <h5 className="ad-title text-uppercase">
                                    Techinfoyt Shopping Website
                                </h5>
                                <a className="ad-btn" href="#">
                                    View
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    {/* If you wanted more static cards, you would duplicate the 'div className="col-md-4"' block here */}
                
                </div>
            </div>
        </>
    );
};

export default Project;