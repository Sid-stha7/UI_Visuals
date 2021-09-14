import React, { Component } from "react";
import "./team-style.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import member_1 from './member1.png'


class Team extends Component{
    render(){
        const settings = {
            dots: true,
            infinite: false,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [
                {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
                },
                {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
                },
                {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
                }
            ]
          };
        
        const memberInfo = [
            {image: "/member-images/pawana.png", name: "Pawana Shrestha", department: "Leader/Marketing", message:"Hello I'm the Hitler of this community."},
            {image: "/member-images/sushant.png", name: "Sushant Pokharel", department: "Co-Leader/Podcast", message:"Hello I'm the Co-Hitler of this community."},
            {image: "/member-images/saumya.png", name: "Saumya Bhandari", department: "Research/Steering", message:"Hi I'm Baumya Sandhari"},
            {image: "/member-images/saman.png", name: "Saman Tamrakar", department: "Design/Steering", message:"I'm a steering wheel"},
            {image: "/member-images/siddhartha.png", name: "Siddhartha Shrestha", department: "Development/Steering", message:""},
            {image: "/member-images/rohan-manandhar.png", name: "Rohan Manandhar", department: "Podcast", message:""},
            {image: "/member-images/sachin.png", name: "Sachin", department: "", message:""},
            {image: "/member-images/suman.png", name: "Suman", department: "", message:""},
            {image: "/member-images/rabins.png", name: "Rabins", department: "", message:""},
            {image: "/member-images/manjil.png", name: "Manjil", department: "", message:""},
            {image: "/member-images/kiran.png", name: "Kiran", department: "", message:""},
            {image: "/member-images/sugandhi.png", name: "Sugandhi", department: "", message:""},
            {image: "/member-images/kareena.png", name: "Kareena", department: "", message:""},
            {image: "/member-images/dristi.png", name: "Dristi", department: "", message:""},
            {image: "/member-images/.png", name: "Your Name", department: "", message:""},
        ]
        
        const renderMember = (member, index) => {
            return(
                <div className="member" key={index}>
                                <img src={member.image} alt="member"/>
                                <div className="member-name">   {member.name}   </div>
                                <p> {member.department} </p>
                                <div className="member-message">    {member.message}    </div>
                            </div>
            )
        }

        return(
            <div>
                <div className="our-members">
                    Meet Our Members
                </div>

                <Slider {...settings} className="team-container">                    
                            {memberInfo.map(renderMember)}                            
                </Slider>

            </div>
        );
    }
}
export default Team;