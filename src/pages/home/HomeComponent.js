import React from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";
import Experience from "../experience/Experience";
import Education from "../education/EducationComponent";
import Projects from "../projects/Projects"
import Contact from "../contact/ContactComponent"

function Home(props) {
  return (
    <div>
      <Header theme={props.theme} setTheme={props.setTheme} />
      <Greeting theme={props.theme} />
      <Skills theme={props.theme} />
      <Education
                newpage="false"
                theme={props.theme}
                setTheme={props.setTheme}
              />
      <Experience
          newpage="false"
          theme={props.theme}
          setTheme={props.setTheme}
        />
      <Projects
                newpage="false"
                theme={props.theme}
                setTheme={props.setTheme}
              />
      <Contact
                  newpage="false"
                  theme={props.theme}
                  setTheme={props.setTheme}
                />
      <Footer theme={props.theme} />
    </div>
  );
}

export default Home;
