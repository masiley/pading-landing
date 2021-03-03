import React from "react";
import { Link } from "react-router-dom";
import "./_Blog.scss";

export default function Blog() {
  return (
      <div className="blogposts">
          <div className="posts">
            <div className="row">
                <div className="col-xs-12 col-md-4">
                    <div className="post">
                        <img src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80" />
                        <h3>Travel with Pading and meet your friends!</h3>
                        <p>Pading is the first travel app and metasearch engine that allow you to travel with your friends from different cities to common destinations. It is like a multiorigin Google Flights by also including train journeys as well as air travel. Why did we decide to create this tool and why are we convinced it will change the way you are organizing your trip? Let's talk about it.</p>
                        <Link to="bookyourtripwithpading"><button className="btn-post">Read More</button></Link>
                    </div>
                </div>
                <div className="col-xs-12 col-md-4">
                    <div className="post">
                        <img src="https://cdn.pixabay.com/photo/2019/11/02/14/17/mostar-4596513_1280.jpg" />
                        <h3>Some little-known destinations that really deserve to be visited</h3>
                        <p>Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.</p>
                        <button className="btn-post">Read More</button>
                    </div>
                </div>
                <div className="col-xs-12 col-md-4">
                    <div className="post">
                        <img src="https://cdn.pixabay.com/photo/2020/09/27/17/37/children-5607307_1280.jpg" />
                        <h3>How to stay in touch with your remote friends</h3>
                        <p>Aenean sollicitudin, loremdfsdfdsfdsfdsfsdfdsfds quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.</p>
                        <button className="btn-post">Read More</button>
                    </div>
                </div>
                <div className="col-xs-12 col-md-4">
                    <div className="post">
                        <img src="https://cdn.pixabay.com/photo/2016/03/17/23/00/world-1264062_1280.jpg" />
                        <h3>The best connected cities (flights and trains) where to travel from multiple origins</h3>
                        <p>Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.</p>
                        <button className="btn-post">Read More</button>
                    </div>
                </div>
                <div className="col-xs-12 col-md-4">
                    <div className="post">
                        <img src="https://cdn.pixabay.com/photo/2014/08/12/00/01/santorini-416135_1280.jpg" />
                        <h3>What to expect about travel prices in spring and summer</h3>
                        <p>Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.</p>
                        <button className="btn-post">Read More</button>
                    </div>
                </div>
                <div className="col-xs-12 col-md-4">
                    <div className="post">
                        <img src="https://cdn.pixabay.com/photo/2018/07/14/15/27/cafe-3537801_1280.jpg" />
                        <h3>Some ideas to travel differently and enjoy even more</h3>
                        <p>Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.</p>
                        <button className="btn-post">Read More</button>
                    </div>
                </div>
            </div>
      </div>
    


        <button className="load-more-btn">Load More</button>
        
    </div>
  )
}