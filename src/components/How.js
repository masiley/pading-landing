import React from 'react';
import padingapp from '../img/padingapp.mp4';
import './_How.scss';


export default function How() {
    return (
        <div className="wrapper">
            <div className="how-to-use-it">
                <div className="how-to-use-it-title">
                    <h2>How to plan my trip ?</h2>
                </div>
                <div className="how-to-use-it-content">

                    <div className="how-to-use-it-content-card">           
                        <div className="how-to-use-it-number">
                            <h2>1</h2>
                        </div>
                        <div className="how-to-use-it-details">
                            <h3>Select your travel dates</h3>
                            <p><b>Fill in your travel dates, one-way/return</b></p>
                        </div>
                    </div>
                    <div className="how-to-use-it-content-card">
                        <div className="how-to-use-it-number">
                            <h2>2</h2>
                        </div>
                        <div className="how-to-use-it-details">
                            <h3>Tell us where your journey begins</h3>
                            <p><b>Enter all departure cities you and your friends/family are coming from</b></p>
                        </div>
                    </div>
                    <div className="how-to-use-it-content-card">
                        <div className="how-to-use-it-number">
                            <h2>3</h2>
                        </div>
                        <div className="how-to-use-it-details">
                            <h3>Explore all destinations</h3>
                            <p><b>Explore all common destinations that match your own departure cities</b></p>
                        </div>
                    </div>
                </div>
                <div className="how-to-use-it-video">
                    <video className="videoapp" autoPlay="autoplay" loop muted playsInline>
                        <source src={padingapp} />
                    </video>
                </div>
            </div>
        </div>
    )
}