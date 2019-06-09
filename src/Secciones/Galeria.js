import React from 'react';
class Galeria extends React.Component {
    render() {
        return(
            <div className="dx-box-1" id="gallery">
            <div className="dx-box-decorated-dark-top"></div>
            <div className="dx-box-decorated-dark-bot"></div>
            <div className="container">
                <h2 className="mnt-10 text-center">Gallery</h2>
                <div className="row justify-content-center text-center">
                    <div className="col-lg-9">
                        <p className="mt-5 mb-0 text-3">Let, first brought made day he their all, beast lights light earth
                            seas first, replenish. Rule, divide was own great our. Unto i, face. Fowl fly own can't
                            lights. Seed.</p>
                    </div>
                </div>
                <div className="row vertical-gap dx-gallery dx-isotope-grid mt-20">
                    <div className="col-md-6 col-lg-4 dx-isotope-grid-item">
                        <a href="assets/images/gallery-1.png" className="dx-gallery-item"><img
                                src="assets/images/gallery-1-sm.png" alt="" className="dx-img"/></a>
                    </div>
                    <div className="col-md-6 col-lg-4 dx-isotope-grid-item">
                        <a href="assets/images/gallery-2.png" className="dx-gallery-item"><img
                                src="assets/images/gallery-2-sm.png" alt="" className="dx-img"/></a>
                    </div>
                    <div className="col-md-6 col-lg-4 dx-isotope-grid-item">
                        <a href="assets/images/gallery-3.png" className="dx-gallery-item"><img
                                src="assets/images/gallery-3-sm.png" alt="" className="dx-img"/></a>
                    </div>
                    <div className="col-md-6 col-lg-4 dx-isotope-grid-item">
                        <a href="assets/images/gallery-4.png" className="dx-gallery-item"><img
                                src="assets/images/gallery-4-sm.png" alt="" className="dx-img"/></a>
                    </div>
                    <div className="col-md-6 col-lg-4 dx-isotope-grid-item">
                        <a href="assets/images/gallery-5.png" className="dx-gallery-item"><img
                                src="assets/images/gallery-5-sm.png" alt="" className="dx-img"/></a>
                    </div>
                    <div className="col-md-6 col-lg-4 dx-isotope-grid-item">
                        <a href="assets/images/gallery-6.png" className="dx-gallery-item"><img
                                src="assets/images/gallery-6-sm.png" alt="" className="dx-img"/></a>
                    </div>
                </div>
            </div>
        </div>
        );
    }
};

export default Galeria;