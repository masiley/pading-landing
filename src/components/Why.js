import React from 'react';
import happycats from '../img/happycats.mp4';
import './_Why.scss';


export default function Why() {
    return (
        <div className="wrapper">
            <div className="why-to-use-it">
                <div className="why-to-use-it-gif">
                    <video className="why-to-use-it-video" autoPlay="autoplay" loop muted playsInline>
                        <source src={happycats} />
                    </video>
                </div>
                <div className="why-to-use-it-text" id="why">
                    <div className="why-to-use-it-title">
                        <h2>Why use pading ?</h2>
                    </div>
                    <div className="why-to-use-it-content">
                        <div className="why-to-use-it-content-card">           
                            <div className="why-to-use-it-number">
                                <h2>1</h2>
                            </div>
                            <div className="why-to-use-it-details">
                                <h3>Save Time</h3>
                                <p><b className="focus-text"><span className="underline"></span>In just one search</b>, you and your team can find your next common destination</p>
                            </div>
                        </div>
                        <div className="why-to-use-it-content-card">
                            <div className="why-to-use-it-number">
                                <h2>2</h2>
                            </div>
                            <div className="why-to-use-it-details">
                                <h3>Save Money</h3>
                                <p>Explore the <b className="focus-text"><span className="underline"></span>cheapest destinations</b> with people you plan to meet</p>
                            </div>
                        </div>
                        <div className="why-to-use-it-content-card">
                            <div className="why-to-use-it-number">
                                <h2>3</h2>
                            </div>
                            <div className="why-to-use-it-details">
                                <h3>Book Easily</h3>
                                <p>Share trip details with your team, <b className="focus-text"><span className="underline"></span>book easily</b>... travel and meet</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}