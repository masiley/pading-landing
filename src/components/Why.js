import React from 'react';
import happycats from '../img/happycats.mp4';
import './_Why.scss';


export default function Why() {
    return (
        <div className="wrapper">
            <div className="why-to-use-it">
                <div className="why-to-use-it-gif">
                    <video className="why-to-use-it-video" autoPlay="autoplay" loop muted playsInLine>
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
                                <p><div className="focus-text"><span className="underline"></span>In just one search</div>, you and your team can find your next common destination</p>
                            </div>
                        </div>
                        <div className="why-to-use-it-content-card">
                            <div className="why-to-use-it-number">
                                <h2>2</h2>
                            </div>
                            <div className="why-to-use-it-details">
                                <h3>Save Money</h3>
                                <p><div className="focus-text"><span className="underline"></span>Explore the cheapest destinations</div> with people you plan to meet</p>
                            </div>
                        </div>
                        <div className="why-to-use-it-content-card">
                            <div className="why-to-use-it-number">
                                <h2>3</h2>
                            </div>
                            <div className="why-to-use-it-details">
                                <h3>Book Easily</h3>
                                <p>Share trip details <div className="focus-text"><span className="underline"></span>with your team</div>,book easily... travel and meet</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}