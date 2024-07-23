import "../gallery.css";
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCaretDown, faUser } from "@fortawesome/free-regular-svg-icons";
import galleryBg from "../assets/marsLandingPage.jpg";
function Gallery() {
  const [mainPlanet, setMainPlanet] = useState(false);
  const [mobileMenu, openMobileMenu] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isTouchScreenDevice, setDevice] = useState(false);
  const [error, setError] = useState(false);
  const [loadedImg, setLoadedImg] = useState(false)

  const galleryInfo = useRef(null);

  function isTouch() {
    if (window.innerWidth < 720) {
      setDevice(true);
    } else {
      setDevice(false);
    }
  }

  let planets = [
    "Mercury",
    "Venus",
    "Terra",
    "Mars",
    "Jupiter",
    "Saturn",
    "Uranus",
    "Neptune",
  ];

  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "b76b4ba35dmsha240b8489a01307p184d1bjsna2cc4175f02f",
      "x-rapidapi-host": "planets-info-by-newbapi.p.rapidapi.com",
    },
  };

  let emptyData = {
    name: "",
    mass: "",
    volume: "",
    description: "",
    img: "",
    imgDesc: "",
  };

  function changePlanet(index) {
    setMainPlanet(emptyData);
    callToPlanetAPI(index + 1);
    galleryInfo.current.scrollIntoView({ behavior: "smooth" });
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function computeDesc(text) {
    if (text) {
      let tempSplit = text.replace(".", ".??");
      let split = tempSplit.split("??");
      return split;
    } else {
      return "";
    }
  }

  async function callToPlanetAPI(index) {
    setError(false)
    setLoading(true)
    try {
      const planetData = await fetch(
        `https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planets/${index}`,
        options
      );
      if(planetData.ok){
          
      let temp = await planetData.json();
      let tempData = {
        name: temp.name,
        mass: temp.basicDetails.mass,
        volume: temp.basicDetails.volume,
        description: temp.description,
        img: temp.imgSrc.img,
        imgDesc: temp.imgSrc.imgDescription,
      };
      setMainPlanet(tempData);
      setLoading(false)
    }else{
      setError(true)
    }
    } catch (e) {
      console.log(e);
      setError(true)
    }
  }

  useEffect(() => {
    callToPlanetAPI(1);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", isTouch);
  }, []); //run only once, but for testing purposes, will be used without parameters

  return (
    <div
      className={
        isTouchScreenDevice
          ? mobileMenu
            ? "galleryWrapper classForMobileMainWrapper"
            : "galleryWrapper"
          : "galleryWrapper"
      }
    >
      <div className="galleryLandingMain">
        <img src={galleryBg} placeholder="blur"></img>
        <div className="galleryLandingInfo">
          <header>
            <div className="logo">CLUSTRO</div>

            {isTouchScreenDevice ? (
              <button
                className="galleryMobileMenuBtn"
                onClick={() => openMobileMenu(true)}
              >
                ...
              </button>
            ) : (
              <ul>
                <li>About us</li>
                <li>Contact</li>
              </ul>
            )}
          </header>
          <main>
            <p>
              Interstellar<div>Space Travel</div>
            </p>
            {isTouchScreenDevice ? (
              <>
                {mobileMenu && (
                  <div className="gallerySocialsMobile">
                    <ul>
                      <button onClick={() => openMobileMenu(false)}>+</button>
                      <li>
                        <span>About us</span>
                      </li>
                      <li>
                        <span>Contact</span>
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faSquareCaretDown}
                        ></FontAwesomeIcon>
                        <span>Twitter</span>
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faSquareCaretDown}
                        ></FontAwesomeIcon>
                        <span>Instagram</span>
                      </li>{" "}
                      <li>
                        <FontAwesomeIcon
                          icon={faSquareCaretDown}
                        ></FontAwesomeIcon>
                        <span>Tumblr</span>
                      </li>{" "}
                      <li>
                        <FontAwesomeIcon
                          icon={faSquareCaretDown}
                        ></FontAwesomeIcon>
                        <span>Facebook</span>
                      </li>
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <ul className="gallerySocials">
                <li>
                  <FontAwesomeIcon icon={faSquareCaretDown}></FontAwesomeIcon>
                  <span>Twitter</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faSquareCaretDown}></FontAwesomeIcon>
                  <span>Instagram</span>
                </li>{" "}
                <li>
                  <FontAwesomeIcon icon={faSquareCaretDown}></FontAwesomeIcon>
                  <span>Tumblr</span>
                </li>{" "}
                <li>
                  <FontAwesomeIcon icon={faSquareCaretDown}></FontAwesomeIcon>
                  <span>Facebook</span>
                </li>
              </ul>
            )}
          </main>
        </div>
      </div>

      <div className="galleryAdvertisement">
        <ul>
          {planets.map((item, index) => (
            <li onClick={() => changePlanet(index)} key={index+'gallery'}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="galleryInformationLoadingTemp" ref={galleryInfo}></div>

      {error ? (
        <div className="galleryError">
          An error has occured. Please try again later.
        </div>
      ) : (
        <>
          {isLoading ? (
            <div className="galleryInformationLoading">
              <div>... loading</div>
            </div>
          ) : (
            <>
              <div className="galleryInformationTitle">{mainPlanet.name}</div>

              <div className="galleryInformation">
                <div className="galleryInformationTourists">
                  <div>
                    <span>Mass: </span>
                    <p>{mainPlanet.mass}</p>
                  </div>
                  <div>
                    <span>Volume: </span>
                    <p>{mainPlanet.volume}</p>
                  </div>
                  <div>
                    <span>Picture: </span>
                    <p>{mainPlanet.imgDesc}</p>
                  </div>
                </div>

                <span className="galleryInformationImage">
      <img
        style={loadedImg ? {} : { display: 'none' }}
        src={mainPlanet.img}
        onLoad={() => setLoadedImg(true)}
      />


                </span>
                <div className="galleryInformationTourists">
                  <div className="galleryInformationTouristsDesc">
                    <span>Description: </span>
                    {computeDesc(mainPlanet.description) ? (
                      computeDesc(mainPlanet.description).map((text) => (
                        <p>{text}</p>
                      ))
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
                <div></div>
              </div>
            </>
          )}
        </>
      )}

      <div className="galleryCallToAction">
        <p>Book now and explore new horizons!</p>
        <button>Book now</button>

        <div className="galleryScrollTop" onClick={() => scrollToTop()}>
          ∟
        </div>
      </div>

      <div className="galleryFooter">
        <div>
          <p>
            Deserunt culpa dolore mollit aliquip. Tempor mollit consequat eu
            amet cillum id Lorem ullamco velit consequat qui. Pariatur sunt enim
            eiusmod ipsum ullamco cillum do. Anim in labore ex dolore nulla
            fugiat tempor adipisicing cillum dolore magna.
          </p>
          <p>
            Lorem est do excepteur consectetur ullamco duis anim exercitation
            anim sit incididunt duis consectetur laborum. Nulla proident aute et
            deserunt nostrud. Aliqua id mollit eiusmod consequat sunt magna ad
            aliquip incididunt. Consequat ad magna id Lorem in officia non enim.
            Ea laboris consectetur cillum non cillum. Veniam eiusmod ut ad quis
            nostrud minim aliqua elit aute elit. Dolor nulla anim excepteur
            dolore Lorem adipisicing adipisicing irure.
          </p>
        </div>
        <div>
          <a>Contact us</a>
          <a>Our partners</a>
          <a>Safety hasards</a>
          <a>Legal concerns</a>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
