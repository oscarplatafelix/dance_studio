import React from 'react';

const Caracteristicas = props => {
    return (
        <div className="dx-box-1 dx-box-bg-dark dx-anchor-content" id="feature">
            <div className="container">
                <div className="row vertical-gap justify-content-center">
                    <div className="col-md-6 col-lg-4">
                        <div className="dx-feature dx-feature-1 dx-feature-gradient-2">
                            <div className="dx-feature-cont">
                                <div className="dx-feature-icon">
                                    <span className="icon ion-md-flame"></span>
                                </div>
                                <div className="dx-feature-title h5">Professional techniques</div>
                                <div className="dx-feature-text">You will learn the most exquisite dance styles!</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="dx-feature dx-feature-1 dx-feature-gradient-1">
                            <div className="dx-feature-cont">
                                <div className="dx-feature-icon">
                                    <span className="icon ion-md-contacts"></span>
                                </div>
                                <div className="dx-feature-title h5">The best Teachers</div>
                                <div className="dx-feature-text">You will be taught by the best dancers on earth!</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="dx-feature dx-feature-1 dx-feature-gradient-3">
                            <div className="dx-feature-cont">
                                <div className="dx-feature-icon">
                                    <span className="icon ion-md-medal"></span>
                                </div>
                                <div className="dx-feature-title h5">1 places at concerts</div>
                                <div className="dx-feature-text">We travel to different cities to live dancing!</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Caracteristicas;