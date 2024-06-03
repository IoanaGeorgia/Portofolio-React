import {useState} from 'react'
import {Link} from 'react-router-dom'

function Home(){

    const [isLight, changeThemeIcon] = useState(false);

    const changeTheme = () => {

    var storedTheme =
      localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? ""
        : "light");

    if (storedTheme)
      document.documentElement.setAttribute("data-theme", storedTheme);


   
      var currentTheme = document.documentElement.getAttribute("data-theme");
      var targetTheme = "light";

      if (currentTheme === "light") {
        targetTheme = "";
        changeThemeIcon(false)
      } else{ changeThemeIcon(true)}


      document.documentElement.setAttribute("data-theme", targetTheme);
      localStorage.setItem("theme", targetTheme);
    }

    return (
      <div className="homeWrapper">
        <p>
          <button
            onClick={changeTheme}
            className={isLight ? "moonIcon" : "sunIcon"}
          >
            {isLight ? "✧" : "☀︎"}
          </button>
        </p>
        <div className="homeWrapperMain">
          <div className="homeWrapperLinks">
            <p>Socials:</p>

            <div className="homeSocials">
              <a href="https://github.com/IoanaGeorgia" target="_blank">
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/ioana-pascu-b42091216/"
                target="_blank"
              >
                LinkedIn
              </a>
            </div>

            <p>In-App links:</p>

            <div className="homeSocials projects">
              <Link to="/eccomerce">E-Commerce </Link>
              <Link to="/internalTool">Internal Banking App</Link>
              <Link to="./blog">Blog</Link>
              <Link to="./plantShop">PlantShop</Link>
            </div>
          </div>

          <div className="homeWrapperText">
            <p>
              Hi! I'm <span className="highlight">Pascu Ioana-Georgia</span>
            </p>
            <p>
              and I'm a <span className="highlight">Front End Developer! </span>
              Writing code is my passion and I am always looking for new
              challenges.
            </p>
            <p>
              Here are some of my{" "}
              <span className="highlight">personal projects.</span>
            </p>
          </div>
        </div>

        <div className="homeWrapperSkills">
          <p>Skills</p>
          <ol>
            <li>Time Management</li>
            <li>Dedication</li>
            <li>Active listening</li>
            <li>Problem-solving</li>
            <li>Resilience</li>
            <li>Growth mindset</li>
          </ol>
        </div>

        <div className="homeWrapperSkills">
          <p>Coding Skills</p>
          <ol>
            <li>HTML</li>
            <li>CSS/SASS</li>
            <li>Javascript</li>
            <li>React</li>
            <li>Vue</li>
            <li>Git</li>
          </ol>
        </div>
      </div>
    );
}

export default Home