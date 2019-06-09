import React from 'react';
import Swiper from 'react-id-swiper';
import "react-id-swiper/src/styles/css/swiper.css";
import { Pagination, Navigation, Autoplay } from "swiper/dist/js/swiper.esm";
import ScrollAnimation from 'react-animate-on-scroll';
import { rotateIn, fadeInRight } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    rotateIn: {
        animationName: rotateIn,
        animationDuration: '2s'
    },
    fadeInRight: {
        animationName: fadeInRight,
        animationDuration: '2s'
    },
})
const params = {
    modules: [Pagination, Navigation, Autoplay],
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    spaceBetween: 0,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
};
class Nosotros extends React.Component {
    state = {
        startAnimation: false
    }
    render() {
        return (
            <ScrollAnimation animateIn='fadeIn' duration={0} afterAnimatedIn={() => this.setState({ startAnimation: true })}>
                <div className="dx-box-1" id="about">
                    <div className="dx-box-decorated-dark-bot"></div>
                    <div className="container">
                        <div className="dx-about">
                            <div className="dx-about-img">
                                <div className={this.state.startAnimation ? css(styles.rotateIn) : undefined}>
                                    <img src="assets/images/about.png" className="dx-img" alt="" />
                                    <div className="dx-about-img-title h5">Nicholas Harper</div>
                                    <div className="dx-about-img-subtitle text-grey-2">Choreographer, Head of the school</div>
                                </div>
                            </div>
                            <div className="dx-about-cont">
                                <div className={this.state.startAnimation? css(styles.fadeInRight) : undefined} onAnimationEnd={()=>this.setState({startAnimation: false})}>
                                    <h2 className="mnt-10">About us</h2>
                                    <div className="dx-subtitle mb-40">Choose your dance style!</div>
                                    <p style={{textAlign: 'justify'}}>
                                        Earth likeness Wherein. Gathering you're hath multiply subdue gathering deep abundantly every
                                        won't won't Creeping, firmament yielding herb above spirit may female place had two.
                                    </p>
                                    <p className="mb-0" style={{textAlign: 'justify'}}>
                                        He two lights For over gathering yielding abundantly, fifth creepeth. Earth.
                                        Replenish don't hath Make greater stars god days so form let living land. From.
                                    </p>
                                    <div className="row vertical-gap mt-20">
                                        <div className="col-auto dx-gallery-video">
                                            <a href="https://www.youtube.com/watch?v=JVXjDaUnPbw"
                                                className="dx-btn dx-btn-circle dx-btn-gradient-2 dx-btn-gradient-3-hover dx-gallery-video-item">
                                                <span className="icon ion-md-play"></span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <Swiper {...params}>
                            <div className="">
                                <img src="assets/images/about-2.png" className="dx-img" alt="" />
                            </div>
                            <div className="">
                                <img src="assets/images/about-1.png" className="dx-img" alt="" />
                            </div>
                            <div className="">
                                <img src="assets/images/about-3.png" className="dx-img" alt="" />
                            </div>
                        </Swiper>
                    </div>
                </div>
            </ScrollAnimation>
        );
    }
};

export default Nosotros;