import { Col, Row, Container } from "react-bootstrap";
import React , { Component }  from 'react';
import './contact.css';


class Contact_component extends Component {
  render() {
    return(
            
      <div className="contact-section">
        <Container>
          <Row>
            <Col>
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
              <div className="button  mb-5"><input type="submit"  value="Submit"></input></div>
            </form>
            </Col>

            <Col>
              <div className="maps-container mt-4">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.1735365256773!2d85.33061589382801!3d27.71192776434097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb196de5da5741%3A0x652792640c70ede9!2sHerald%20College%20Kathmandu!5e0!3m2!1sen!2snp!4v1630053640026!5m2!1sen!2snp" width="600" height="450" styleName="border:0" allowfullscreen="" loading="lazy"></iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Contact_component;


{/* <div class="container">
  
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
    <div class="column">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.1735365256773!2d85.33061589382801!3d27.71192776434097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb196de5da5741%3A0x652792640c70ede9!2sHerald%20College%20Kathmandu!5e0!3m2!1sen!2snp!4v1630053640026!5m2!1sen!2snp" width="600" height="450" styleName="border:0;" allowfullscreen="" loading="lazy"></iframe>
    </div>              
  </div>
</div> */}
