import { Fragment, useState } from "react";
import AnimatedText from "./AnimatedText";
import AboutPopup from "./popup/AboutPopup";

const aboutData = {
  firstName: "Melih",
  lastName: "Ünver",
  bithday: "04.12.1995",
  address: "Hamburg/Germany",
  phn: "+49 172 874 2767",
  email: "uenvermelih@gmail.com",
  serviceLists: [
    "Website Development",
    "Blockchain Development",
    "Blender Modeling",
    "Finite Element Analysis",
  ],
  skills: {
    programming: [
      { name: "JavaScript", value: "95" },
      { name: "React.js", value: "80" },
      { name: "Three.js", value: "80" },
    ],
    language: [
      { name: "English", value: "91" },
      { name: "Turkish", value: "99" },
      { name: "German", value: "91" },
    ],
  },
  education: [
    { year: "2015 - 2019", unv: "Istanbul Technical University", degree: "Bachelor Degree" },
  ],
  working: [
    {
      year: "2023 - running",
      company: "UEN Technologies",
      deg: "CEO",
    },
    { year: "2020 - 2022", company: "AutomotiveSupplier", deg: "R&D Engineer" },
    { year: "2019 - 2020", company: "Turkish Airlines", deg: "Maintenance Engineer" },
  ],
  partnersLogos: [
    "img/partners/1.png",
    "img/partners/2.png",
    "img/partners/3.png",
    "img/partners/4.png",
  ],
};

const About = () => {
  const [popup, setPopup] = useState(false);
  return (
    <Fragment>
      <AboutPopup
        open={popup}
        close={() => setPopup(false)}
        aboutData={aboutData}
      />
      <div className="edrea_tm_section hidden animated" id="about">
        <div className="section_inner">
          <div className="edrea_tm_about">
            <div className="left">
              <div className="image">
                <img src="img/thumbs/1-1.jpg" alt="" />
                <div className="main" data-img-url="img/about/1.jpg" />
              </div>
            </div>
            <div className="right">
              <div className="short">
                <h3 className="name">
                  {aboutData.firstName}{" "}
                  <span className="coloring">{aboutData.lastName}</span>
                </h3>
                <h3 className="job">
                  <AnimatedText />
                </h3>
              </div>
              <div className="text">
                <p>
                  My name is <span>Melih Ünver.</span> I am a web3 developer and graphic designer
                
                </p>
              </div>
              <div className="edrea_tm_button">
                <a href="#" onClick={() => setPopup(true)}>
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default About;
