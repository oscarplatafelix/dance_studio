/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
class Contacto extends React.Component {
    render() {
        return (
            <div className="dx-box-2 dx-box-bg-light" id="contacts">
                <div className="container">
                    <div className="row justify-content-between vertical-gap">
                        <div className="col-sm-auto col-md-12 col-lg-auto">
                            <a href="index-2.html" className="dx-logo d-md-flex d-lg-inline-flex">
                                <img src="assets/images/logo.svg" alt="" />
                                <div className="h3 mb-0">Dance Studio</div>
                            </a>
                        </div>
                        <div className="col-auto">
                            <p className="text-1 mnt-7"><strong>Address:</strong> USA, Los Angeles, Walnut str. 5</p>
                            <p className="mnb-10 text-1"><strong>Phone:</strong> <a href="#">+55 987 654 302</a></p>
                        </div>
                        <div className="col-auto">
                            <p className="text-1 mnt-7"><strong>Email:</strong> <a href="#">info@example.com</a></p>
                            <p className="mnb-8 text-1"><strong>Fax:</strong> <a href="#">+55 987 654 302</a></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Contacto;