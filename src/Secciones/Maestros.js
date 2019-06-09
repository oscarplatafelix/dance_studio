/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Swiper from 'react-id-swiper';
import "react-id-swiper/src/styles/css/swiper.css";
import { Pagination, Navigation, Autoplay } from "swiper/dist/js/swiper.esm";
import ScrollAnimation from 'react-animate-on-scroll';
const params = {
    modules: [Pagination, Navigation, Autoplay], // Add nescessary modules here
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
    spaceBetween: 30,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
  };
class Maestros extends React.Component {
    render() {
        return (
        <ScrollAnimation animateIn='fadeIn' duration={3} afterAnimatedIn={()=>{console.log("MAESTROS");}}>
            <section className="dx-box-1" id="teachers">
                <div className="dx-box-decorated-dark-top"></div>
                <div className="container">
                    <h2 className="mnt-10 text-center">The Teachers</h2>
                    <div className="dx-subtitle text-center">We will teach you the style of dance!</div>
                    <div className="dx-swiper-teachers-arrows">
                        <div className="container"> </div>
                    </div>
                    <div className="">
                        <div className="">
                        <Swiper {...params}>
                            <div className="">
                                <div className="dx-teacher">
                                    <div className="dx-teacher-img"><img src="assets/images/teacher-1.png" className="dx-img"
                                        alt="" /></div>
                                    <div className="dx-teacher-cont">
                                        <div className="dx-teacher-title h4">Mary May</div>
                                        <div className="dx-teacher-subtitle dx-subtitle">Trainer on Break Dancing.</div>
                                        <ul className="dx-teacher-icons dx-social-links mnt-6">
                                            <li>
                                                <a href="#" className="dx-social-instagram"><span
                                                    className="icon ion-logo-instagram"></span></a>
                                            </li>
                                            <li>
                                                <a href="#" className="dx-social-twitter"><span
                                                    className="icon ion-logo-twitter"></span></a>
                                            </li>
                                            <li>
                                                <a href="#" className="dx-social-facebook"><span
                                                    className="icon ion-logo-facebook"></span></a>
                                            </li>
                                        </ul>
                                        <div className="dx-teacher-text">
                                            <p>Over seas. Moved fly give yielding. Fruitful. Him creepeth blessed from.
                                            She&#39;d them night lesser heaven night. Moveth first upon land above.</p>

                                            <p>Years also gathered air meat. Firmament image unto man rule brought fifth,
                                                above. Without i morning Said make very lights likeness midst fill land own.
                                            First third brought.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div className="dx-teacher">
                                    <div className="dx-teacher-img"><img src="assets/images/teacher-2.png" className="dx-img"
                                        alt="" /></div>
                                    <div className="dx-teacher-cont">
                                        <div className="dx-teacher-title h4">Rose Allen</div>
                                        <div className="dx-teacher-subtitle dx-subtitle">Trainer on Hip Hop.</div>
                                        <ul className="dx-teacher-icons dx-social-links mnt-6">
                                            <li>
                                                <a href="#" className="dx-social-instagram"><span
                                                    className="icon ion-logo-instagram"></span></a>
                                            </li>
                                            <li>
                                                <a href="#" className="dx-social-twitter"><span
                                                    className="icon ion-logo-twitter"></span></a>
                                            </li>
                                            <li>
                                                <a href="#" className="dx-social-facebook"><span
                                                    className="icon ion-logo-facebook"></span></a>
                                            </li>
                                        </ul>
                                        <div className="dx-teacher-text">
                                            <p>Over seas. Moved fly give yielding. Fruitful. Him creepeth blessed from.
                                            She&#39;d them night lesser heaven night. Moveth first upon land above.</p>

                                            <p>Years also gathered air meat. Firmament image unto man rule brought fifth,
                                                above. Without i morning Said make very lights likeness midst fill land own.
                                            First third brought.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div className="dx-teacher">
                                    <div className="dx-teacher-img"><img src="assets/images/teacher-3.png" className="dx-img"
                                        alt="" /></div>
                                    <div className="dx-teacher-cont">
                                        <div className="dx-teacher-title h4">Jane Miller</div>
                                        <div className="dx-teacher-subtitle dx-subtitle">Trainer on Eastern Dance.</div>
                                        <ul className="dx-teacher-icons dx-social-links mnt-6">
                                            <li>
                                                <a href="#" className="dx-social-instagram"><span
                                                    className="icon ion-logo-instagram"></span></a>
                                            </li>
                                            <li>
                                                <a href="#" className="dx-social-twitter"><span
                                                    className="icon ion-logo-twitter"></span></a>
                                            </li>
                                            <li>
                                                <a href="#" className="dx-social-facebook"><span
                                                    className="icon ion-logo-facebook"></span></a>
                                            </li>
                                        </ul>
                                        <div className="dx-teacher-text">
                                            <p>Over seas. Moved fly give yielding. Fruitful. Him creepeth blessed from.
                                            She&#39;d them night lesser heaven night. Moveth first upon land above.</p>

                                            <p>Years also gathered air meat. Firmament image unto man rule brought fifth,
                                                above. Without i morning Said make very lights likeness midst fill land own.
                                            First third brought.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div className="dx-teacher">
                                    <div className="dx-teacher-img"><img src="assets/images/teacher-4.png" className="dx-img"
                                        alt="" /></div>
                                    <div className="dx-teacher-cont">
                                        <div className="dx-teacher-title h4">Ann Owen</div>
                                        <div className="dx-teacher-subtitle dx-subtitle">Strip plastic trainer.</div>
                                        <ul className="dx-teacher-icons dx-social-links mnt-6">
                                            <li>
                                                <a href="#" className="dx-social-instagram"><span
                                                    className="icon ion-logo-instagram"></span></a>
                                            </li>
                                            <li>
                                                <a href="#" className="dx-social-twitter"><span
                                                    className="icon ion-logo-twitter"></span></a>
                                            </li>
                                            <li>
                                                <a href="#" className="dx-social-facebook"><span
                                                    className="icon ion-logo-facebook"></span></a>
                                            </li>
                                        </ul>
                                        <div className="dx-teacher-text">
                                            <p>Commodo Consectetuer, arcu, erat etiam sollicitudin volutpat integer
                                                phasellus suscipit sapien in cras orci netus pede pulvinar egestas pede
                                            proin magna.</p>
                                            <p>Nullam. Commodo montes lacus eros porta pede nunc. Semper Maecenas. Proin
                                            varius iaculis risus, sodales laoreet tristique. Lorem sagittis.</p>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </Swiper>
                        </div>
                    </div>
                </div >
            </section >
            </ScrollAnimation>
        );
    }
};

export default Maestros;