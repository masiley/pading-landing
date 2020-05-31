import React from 'react';
import './_Cards.scss';


export default function Cards() {
    return (
        <div className="wrapper">
            <div className="cards-trip">
                <div className="container">

                    <div className="row">

                        <div className="col-xs-12 col-md-4 col-lg-4">
                            <div className="card-trip">
                                <img src="https://www.guiajando.com/wp-content/uploads/2018/02/budapest_parlamento-1000x580.jpg" alt="booking tickets and traveling to budapest"/>
                                <div className="card-trip-infos">
                                    <div className="card-trip-city">
                                        <h4>Budapest</h4>
                                    </div>
                                    <div className="card-trip-pricing">
                                        <h4>140€</h4>
                                        <p>35€ / traveller</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
            
                        <div className="col-xs-12 col-md-4 col-lg-4">
                            <div className="card-trip">
                                <img src="https://res.cloudinary.com/hzekpb1cg/image/upload/c_fill,h_410,w_800,f_auto/s3/public/prod/s3fs-public/Italy_Napoli.jpg" alt="booking tickets and traveling to napoli"/>
                                <div className="card-trip-infos">
                                    <div className="card-trip-city">
                                        <h4>Napoli</h4>
                                    </div>
                                    <div className="card-trip-pricing">
                                        <h4>200€</h4>
                                        <p>50€ / traveller</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xs-12 col-md-4 col-lg-4">
                            <div className="card-trip">
                                <img src="https://cdn.getyourguide.com/img/tour_img-2266912-146.jpg" alt="booking tickets and traveling to bilbao"/>
                                <div className="card-trip-infos">
                                    <div className="card-trip-city">
                                        <h4>Bilbao</h4>
                                    </div>
                                    <div className="card-trip-pricing">
                                        <h4>220€</h4>
                                        <p>55€ / traveller</p>
                                    </div>
                                </div>
                            </div>
                        </div>
            
                        <div className="col-xs-12 col-md-4 col-lg-4">
                            <div className="card-trip">
                                <img src="http://img2.rtve.es/v/4881968/" alt="booking tickets and traveling to cordoba"/>
                                <div className="card-trip-infos">
                                    <div className="card-trip-city">
                                        <h4>Córdoba</h4>
                                    </div>
                                    <div className="card-trip-pricing">
                                        <h4>260€</h4>
                                        <p>65€ / traveller</p>
                                    </div>
                                </div>
                            </div>
                        </div>
            
                        <div className="col-xs-12 col-md-8 col-lg-8">
                            <div className="cards-trip-content">
                                <h2>Are you travelling alone?</h2>
                                <h3>Enjoy Pading to find the best travel offers!</h3>
              
              
                                <p>Let us show you some creative new ideas for your next trip</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}