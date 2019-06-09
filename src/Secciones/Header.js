import React from 'react';
import Caracteristicas from '../Componentes/Caracteristicas';
import ScrollAnimation from 'react-animate-on-scroll'
import { merge, bounceInRight, zoomInUp, rotateIn } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';
const rotate_zoom = merge(zoomInUp, rotateIn);
const styles = StyleSheet.create({
    bounceInRight: {
        animationName: bounceInRight,
        animationDuration: '3s'
    },
    zoomInUp: {
        animationName: rotate_zoom,
        animationDuration: '3s'
    }
})
class Header extends React.Component {
    state = {
        isMount: false,
        startAnimation: false
    }
    componentDidMount() {
        setTimeout(() => this.setState({ isMount: true }), 1300);
    }
    render() {
        return (
            <div>
                <ScrollAnimation animateIn='bounceInRight' afterAnimatedIn={() => { this.setState({ startAnimation: true })}} duration={0}>
                    <div className="dx-header dx-box-fullscreen dx-box-bg-light">
                        <div className="dx-box-decorated-dark-bot"></div>
                        <div className="bg-image bg-image-parallax">
                            <div className={(this.state.startAnimation && this.state.isMount) ? css(styles.bounceInRight) : undefined}>
                                <img src="assets/images/header.png" className="jarallax-img" alt="" />
                            </div>
                        </div>
                        <div className="container">
                            <div className="row justify-content-between align-items-center">
                                <div className="col-12 col-sm-9 col-md-8 col-lg-6">
                                    <div className={(this.state.startAnimation && this.state.isMount) ? css(styles.zoomInUp) : undefined} onAnimationEnd={()=>this.setState({startAnimation:false})}>
                                        <h1>Dance Studio</h1>
                                        <div className="dx-subtitle">School of modern dance, your style!</div>
                                        <p className="mb-0 text-grey-2">To dance is to be outside yourself, bigger, stronger, more beautiful. In the dance - power, in the dance - the greatness of the Earth, it is yours - take it all.</p>
                                        <a href="#subscriptions" className="dx-btn dx-btn-md dx-btn-gradient-1 dx-btn-gradient-2-hover mt-50 dx-anchor"><span>Trial Lesson</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="#feature" className="dx-icon-down dx-anchor">
                            <span className="icon ion-ios-arrow-down"></span>
                            <span className="icon ion-ios-arrow-down"></span>
                            <span className="icon ion-ios-arrow-down"></span>
                        </a>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn='bounceInRight' afterAnimatedIn={() => { }} duration={1}>
                    <Caracteristicas />
                </ScrollAnimation>
            </div>
        );
    }
}

export default Header;