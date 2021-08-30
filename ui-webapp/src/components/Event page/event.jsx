import React, { Component } from "react";
import "./event-style.css";
import NavComponent from './components/Navbar/navbar';

const  Event = () => {
    return (  
        <div>
            <NavComponent />
            <div class="flex-container">



            {/* <!-- Start of Sidebar Area --> */}
            <div class="sidebar-container">
                <div class="sidebar-header">
                    Categories
                </div>
                <div class="sidebar-content">           
                
                    <ul>
                        <li><img src="main-icon.png" alt="main-icon" />Events Page</li>
                        <li><img src="upcoming-icon.png" alt="upcoming-icon" />Upcoming Events</li>
                        <li><img src="past-icon.png" alt="past-icon" />Past Events</li>
                    </ul>     
                </div>   
                
                <hr class="sidebar-segment" />

                <div class="sidebar-header">
                    Library
                </div>
                <div class="sidebar-content">                     
                    <ul>
                        <li><img src="main-icon.png" alt="main-icon" />What's New?</li>
                        <li><img src="gallery-icon.png" alt="" />Gallery</li>
                    </ul>     
                </div>     
            </div>
            {/* <!-- End of Sidebar Area --> */}
        


            {/* <!-- Start of Event Content Area --> */}
            <div class="events-container">
                <div class="events-content">

                    <div class="person-details">
                        <img src="postman.jpg" alt="" />
                        <div class="person-description">
                            <div class="person-name">Saman Bhandari</div>
                            <p>Member/Moderator</p>
                            <p>UI Visuals Community</p>
                        </div>
                    </div>

                    <div class="event-caption">
                        Caption for the event is kept here
                    </div>

                    <div class="event-details">
                        <div class="event-details-left">
                            <img src="calender.png" alt="calender" />
                            <div class="img-date">20</div>
                        </div>  
                        <div class="event-details-right">
                            <div class="specify-date">Aug. 24th</div>
                            <div class="specify-time">1:00 PM - 3:00 PM</div>
                        </div> 
                    </div>

                    <div class="event-poster">
                        <img src="poster.png" alt="event-poster" />
                    </div>

                    <div class="post-interactions">
                        <ul>
                            <li><img src="heart-red.png" alt="like" /></li>
                            <li><img src="comment.png" alt="comment" /></li>
                            <li><img src="share.png" alt="share" /></li>
                        </ul>
                    </div>
                </div>
            </div> 
            {/* <!-- End of Event Content Area --> */}
        </div>
    </div>
    );
}
 
export default Event;