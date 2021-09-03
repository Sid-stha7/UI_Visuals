import React, { Component } from "react";
import "./event-style.css";
import NavComponent from '../Navbar/navbar';

const  Event = () => {
    return (  
        <div>
            <NavComponent />
            <div className="flex-container">



            {/* <!-- Start of Sidebar Area --> */}
            <div className="sidebar-container">
                <div className="sidebar-header">
                    Categories
                </div>
                <div className="sidebar-content">           
                
                    <ul>
                        <li><img src="main-icon.png" alt="main-icon" />Events Page</li>
                        <li><img src="upcoming-icon.png" alt="upcoming-icon" />Upcoming Events</li>
                        <li><img src="past-icon.png" alt="past-icon" />Past Events</li>
                    </ul>     
                </div>   
                
                <hr className="sidebar-segment" />

                <div className="sidebar-header">
                    Library
                </div>
                <div className="sidebar-content">                     
                    <ul>
                        <li><img src="main-icon.png" alt="main-icon" />What's New?</li>
                        <li><img src="gallery-icon.png" alt="" />Gallery</li>
                    </ul>     
                </div>     
            </div>
            {/* <!-- End of Sidebar Area --> */}
        


            {/* <!-- Start of Event Content Area --> */}
            <div className="events-container">
                <div className="events-content">

                    <div className="person-details">
                        <img src="postman.jpg" alt="" />
                        <div className="person-description">
                            <div className="person-name">Saman Bhandari</div>
                            <p>Member/Moderator</p>
                            <p>UI Visuals Community</p>
                        </div>
                    </div>

                    <div className="event-caption">
                        Caption for the event is kept here
                    </div>

                    <div className="event-details">
                        <div className="event-details-left">
                            <img src="calender.png" alt="calender" />
                            <div className="img-date">20</div>
                        </div>  
                        <div className="event-details-right">
                            <div className="specify-date">Aug. 24th</div>
                            <div className="specify-time">1:00 PM - 3:00 PM</div>
                        </div> 
                    </div>

                    <div className="event-poster">
                        <img src="poster.png" alt="event-poster" />
                    </div>

                    <div className="post-interactions">
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