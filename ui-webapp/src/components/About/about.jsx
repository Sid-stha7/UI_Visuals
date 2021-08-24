import React from "react";
import "./about.css";

const About = () => {
  return (
    <section className="aboutSection">
      <div className="aboutImage">
        <img src="../Images/about.png" alt="ui visuals" />
      </div>
      <div className="aboutContent">
        <div className="aboutDesc">
          <h1>About UI Visuals Community</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            totam amet magnam perferendis culpa, magni, in eum tenetur, pariatur
            nesciunt consequuntur dolor molestias. Rerum alias, illum harum quos
            aliquid veritatis ipsum dolor sit amet consectetur adipisicing elit.
            totam amet magnam perferendis culpa, magni, in eum tenetur, pariatur
            nesciunt consequuntur dolor molestias. Rerum alias, illum harum quos
            aliquid veritatis!
          </p>
        </div>
        <div className="aboutSocial">
          <h2>Join Us Now</h2>
          <div>
            <a href="https://www.facebook.com/groups/440546053340638">
              <img src="../Images/facebook.png" alt="facebook" />
            </a>
            <a href="https://discord.gg/wQCeqjQsUG">
              <img src="../Images/discord.png" alt="discord" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
