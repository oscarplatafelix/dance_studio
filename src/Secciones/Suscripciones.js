import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { fadeInLeft } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    bounce: {
        animationName: fadeInLeft,
        animationDuration: '2s'
    }
})
class Suscripciones extends React.Component {
    state = {
        startAnimation: false
    }
    render() {
        return (
            <ScrollAnimation animateIn='fadeIn' duration={0} afterAnimatedIn={() => this.setState({ startAnimation: true })}>
                <div className="dx-box-1 dx-box-bg-light" id="subscriptions">
                    <div className="container">
                        <h2 className="mnt-10 text-center">Subscriptions</h2>
                        <div className="dx-subtitle text-center">For regular customers - 15% discount!</div>
                        <div className="row vertical-gap justify-content-center mnt-10">
                            <div className="col-md-6 col-lg-4">
                                <div className={this.state.startAnimation ? css(styles.bounce) : undefined} onAnimationEnd={()=>this.setState({ startAnimation: false })}>
                                    <div className="dx-feature dx-feature-2">
                                        <div className="dx-feature-head dx-feature-gradient-1">
                                            <div className="dx-feature-title h5">100 lessons</div>
                                            <div className="dx-feature-price h5">$30</div>
                                        </div>
                                        <div className="dx-feature-cont">
                                            <ul className="dx-feature-list">
                                                <li>Attend any group workouts.</li>
                                                <li>At any time, according to the schedule of the club.</li>
                                                <li>For 1 visit you can visit several group workouts.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className={this.state.startAnimation ? css(styles.bounce) : undefined}>
                                    <div className="dx-feature dx-feature-2">
                                        <div className="dx-feature-head dx-feature-gradient-2">
                                            <div className="dx-feature-title h5">30 lessons</div>
                                            <div className="dx-feature-price h5">$10</div>
                                        </div>
                                        <div className="dx-feature-cont">
                                            <ul className="dx-feature-list">
                                                <li>Attend any group workouts.</li>
                                                <li>In the morning and afternoon on weekdays.</li>
                                                <li>For 1 visit you can visit several group workouts.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4" >
                                <div className={this.state.startAnimation ? css(styles.bounce) : undefined}>
                                    <div className="dx-feature dx-feature-2">
                                        <div className="dx-feature-head dx-feature-gradient-3">
                                            <div className="dx-feature-title h5">10 lessons</div>
                                            <div className="dx-feature-price h5">$0</div>
                                        </div>
                                        <div className="dx-feature-cont">
                                            <ul className="dx-feature-list">
                                                <li>Attend any group workouts.</li>
                                                <li>In the morning and afternoon on weekdays.</li>
                                                <li>For 1 visit you can visit only one group training.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollAnimation>
        );
    }
}

export default Suscripciones;