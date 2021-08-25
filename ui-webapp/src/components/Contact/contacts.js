import React , { Component }  from 'react';
//import GoogleMapReact from 'google-map-react'
import './contact.css';



class Contact_component extends Component {
    render() {
    return (
        <div class="container">
   
            <div >
                <h2>Contact Us</h2>
                <p>leave us a message:</p>

            </div>
            <div class="row">

<div class="column">
      <form action="/action_page.php">
        <label for="fname">Full Name</label>
        <input type="text" id="fname" name="fullname" placeholder="Your Name.."></input>
        <label for="Email">Email</label>
        <input type="text" id="Email" name="Email" placeholder="Your Email.."></input>
        <label for="Gender">Gender</label>
        <select id="gender" name="gender">
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="others">others</option>
        </select>
        <label for="subject">Message</label>
        <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
        <input type="submit"  value="Submit"></input>
      </form>
      </div>
    
</div>
{/* <div className="map">


    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: '<div class="mapouter"><div class="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=herald%20college&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.whatismyip-address.com/divi-discount/"></a><br><style>.mapouter{position:relative;text-align:right;height:500px;width:600px;}</style><a href="https://www.embedgooglemap.net">embedded google maps in website</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}</style></div></div>' }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
</div> */}
</div>

    )
}
}

export default Contact_component;
