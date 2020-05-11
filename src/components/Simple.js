import React from 'react';
import catsbasket from '../img/catsbasket.mp4';
import './_Simple.scss';


export default function Simple() {
    return (
        <div className="wrapper">
            <div className="simple-solution">
                <div className="simple-solution-gif">
                    <video className="catsbasket" autoPlay="autoplay" loop width="350px">
                    {
                        setTimeout(function(){
                            document.querySelector(".catsbasket").pause()
                          }, 11500)
                    }
                        <source src={catsbasket} />
                    </video>
                </div>
                <div className="simple-solution-content">
                    <h3>Simple solutions for complexed connections!</h3>
                    <br/>
                    <p>Planning an Erasmus meeting, joining friends living abroad, gathering with family.</p><h4> Pading is as simple solution built to bring you closer with your friends and family</h4>
                </div>
            </div>
            
        </div>
    )
}