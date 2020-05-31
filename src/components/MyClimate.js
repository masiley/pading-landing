import React from 'react';
import './_MyClimate.scss';


export default function Simple() {
    return (
        <div className="wrapper">
            <div className="myclimate">
                <div className="myclimate-content">
                    <h2>We love our planet</h2>
                    <p>If like us, you face inner conflict between your passion for travelling and your concerns for ecology, we can do something.</p>
                    <h3>Pading calculate the climate impact of each destination. You can compensate your Co2 emissions and we plant trees.</h3>
                </div>
                <div className="myclimate-img">
                <i className="fas fa-globe-europe fa-10x"></i>
                </div>
            </div>
        </div>
    )
}