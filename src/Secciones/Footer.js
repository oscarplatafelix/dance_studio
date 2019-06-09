/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
class Footer extends React.Component {
    render() {
        return(
            <footer className="dx-footer dx-box-2 text-center" style={{backgroundColor: '#202020'}}>
            <div className="dx-box-decorated-light-top"></div>
            <div className="container mnt-6 mnb-8">
                <ul className="dx-social-links dx-social-links-white dx-footer-icons">
                    <li><a href="#" className="dx-social-googleplus"><span className="icon ion-logo-googleplus"></span></a></li>
                    <li><a href="#" className="dx-social-facebook"><span className="icon ion-logo-facebook"></span></a></li>
                    <li><a href="#" className="dx-social-twitter"><span className="icon ion-logo-twitter"></span></a></li>
                    <li><a href="#" className="dx-social-instagram"><span className="icon ion-logo-instagram"></span></a></li>
                </ul>
                <p className="mb-0 text-white op-5">© 2019 Dance Studio. All rights reserved. Code by NovaCode.</p>
            </div>
        </footer>
        );
    }
}

export default Footer;