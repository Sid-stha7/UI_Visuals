import React, { Component } from "react";
import "./event-style.css";
import NavComponent from '../Navbar/navbar';
import main_icon from "./main-icon.png";
import upcoming_icon from "./upcoming-icon.png";
import past_icon from "./past-icon.png";
import gallery_icon from "./gallery-icon.png"
import postman from "./postman.jpg";
import calender_icon from "./calender.png";
import heart_red_icon from "./heart-red.png";
import comment_icon from "./comment.png";
import share_icon from "./share.png";
import poster from "./poster.png"


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
                        <li><img src={main_icon} alt="main-icon" />Events Page</li>
                        <li><img src={upcoming_icon} alt="upcoming-icon" />Upcoming Events</li>
                        <li><img src={past_icon} alt="past-icon" />Past Events</li>
                    </ul>     
                </div>   
                
                <hr className="sidebar-segment" />

                <div className="sidebar-header">
                    Library
                </div>
                <div className="sidebar-content">                     
                    <ul>
                        <li><img src={main_icon} alt="main-icon" />What's New?</li>
                        <li><img src={gallery_icon} alt="gallery-icon" />Gallery</li>
                    </ul>     
                </div>     
            </div>
            {/* <!-- End of Sidebar Area --> */}
        


            {/* <!-- Start of Event Content Area --> */}
            <div className="events-container">
                <div className="events-content">

                    <div className="person-details">
                        <img src={postman} alt="post-man" />
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
                            <img src={calender_icon} alt="calender" />
                            <div className="img-date">20</div>
                        </div>  
                        <div className="event-details-right">
                            <div className="specify-date">Aug. 24th</div>
                            <div className="specify-time">1:00 PM - 3:00 PM</div>
                        </div> 
                    </div>

                    <div className="event-poster">
                        <img src={poster} alt="event-poster" />
                    </div>

                    <div className="post-interactions">
                        <ul>
                            <li><img src={heart_red_icon} alt="like" /></li>
                            <li><img src={comment_icon} alt="comment" /></li>
                            <li><img src={share_icon} alt="share" /></li>
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