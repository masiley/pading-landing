import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/simple-logo.png";
import "./_BlogPost.scss";

export default function BlogPost1() {
  return (
      <div className="blogpost">
        <h1>Book your trip with Pading and meet your friends!</h1>
    
        <img src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"/>


        <div class="blogpost-signature">
          <img src={logo} className="avatar" />
          <div class="blogpost-signature-content">
            <p><b>Team Pading</b></p>
            <p><small>27th February</small></p>
          </div>
        </div>
        <div className="content">
          <div className="content-intro">
            <p>Pading is the first travel app and search engine that allow you to travel with your friends from different cities to common destinations. It is like a multiorigin Google Flights by also including train journeys as well as air travel. Here, we wanted to share with your our story and explain why we are convinced that Pading will change the way you are organizing your trips.</p>
          </div>
          <br />
          <div className="content-core">
            <p>We are three good friends. Each of us has had the chance to live abroad and meet awesome people in different places.
              For one of us, distance does not only mean adventure and discovery but also being far away from his loved ones.
              It is something that we finally all experienced after leaving a place and the people we met to move elsewhere.
              We were Erasmus students, we are now expats living in Manchester, Brussels and Córdoba.
             </p>
              <br />
              <p><b>How do we manage travel organization to meet each other when we are all coming from different places?</b></p>
              <br />
              <p>With my Erasmus friends, we plan to organize a reunion soon but we still do not know where.
                Andy is from Munich, Eilidh is from Glasgow, Filippo is from Perugia and I am from Brussels.
                The connections are not the same and the cheapest destinations for some are not the cheapest for others.
                To make our reunion happen, we have two choices:
               </p>
               <br />
               <p>
                <ul>
                  <li>Opening multi travel search platforms, comparing the different places we can easily go each and for not to much money. Spending hours before finally finding a compromise that might not be the best but still a compromise. </li>
                  <br />
                  <li>Using Pading. We select our travel dates and preferences, we fill in all the departure cities we are coming from and we let robots getting the job done.
                  Thus, in few clicks the <b className="focus-text"><span className="underline"></span>best common destinations</b> to meet each other are highlighted!
                  </li>
                </ul>
              </p>
              <br />
              <p><b>How is working Pading actually?</b></p>
              <br />
              <p>Pading is a <b className="focus-text"><span className="underline"></span>multi origins travel algorithm</b>. It searches for billion different route combinations of <b className="focus-text"><span className="underline"></span>flights and trains</b> to find for you all the cheapest common destinations where to meet.
                Among the many places that are proposed to you, you just have to select one, share it to the people you are traveling with and book your tickets. Of course, we guarantee you the <b className="focus-text"><span className="underline"></span>lowest prices</b> without any additional fee.
              </p>
              <br />
              <p><b>What if I want to travel alone or book a "simple" flight or train journey?</b></p>
              <br />
              <p>Who can do more can do less. Next to this multiorigin travel search, you can use the classic fligths and trains search.
                This way, you can also book tickets at the lowest fare for a specific destination or let yourself be surprised by the destinations available to you as a nomadic traveller.
              </p>
              <br />
              <p>No need to switch from one application to another anymore. <b className="focus-text"><span className="underline"></span>Everything is now done on Pading!</b>
              <br />
               Also, we want to go further by redesigning travel planning experience. We will tell you more later.
              </p>
          </div>
        </div>
      </div>
 
  )
}