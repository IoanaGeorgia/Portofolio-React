import {useState} from 'react'
import { useRef } from "react";
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faGem, faUser, faCreditCard, faMessage} from '@fortawesome/free-regular-svg-icons'
import '../Eccommerce.css'
import logo2 from '../assets/val1.png';
import logo1 from '../assets/logo1.png';
import logo3 from '../assets/logo3.jpg';
import { CSSTransition, TransitionGroup } from "react-transition-group";
function Eccomerce(){

    const [isOpen1, toggleDescription1] = useState(false);
    const [isOpen2, toggleDescription2] = useState(false);
    const [isOpen3, toggleDescription3] = useState(false);

    const [index, changeIndex] = useState(2);
    const [logo, changeLogo] = useState(logo2)
    

    const productInfo = {
      perfume1: {
        name:'Soft Rose',
        description:
          "The scent of meadows in spring",
        reviews: [
          { Albert: "This is what spring at my childhood home smelt like" },
          { Marine: "I wear this all day long, I feel like a real fairy" },
        ],
        productFaq: [
          ["Can this product be recycled?", "This product is 100% recyclable"],
          [
            "Is this product cruelty free?",
            "Yes, it is a cruelty free product",
          ],
        ],
      },
      perfume2: {
        name:'Trending Feels',
        description:
          "A rich, oriental smell, from the deepest parts of Arabia.",
        reviews: [
          { Julie: "I feel transported to 1001 Nights" },
          { Laure: "Exquisite, one of my favourite" },
        ],
        productFaq: [
          ["Is this product edible?", "No, it is not edible"],
          [
            "Is this product cruelty free?",
            "Yes, it is a cruelty free product",
          ],
        ],
      },
      perfume3: {
        name:'Dark Royalty',
        description:
          "A soft, royal scent, meant to make you feel like royalty.",
        reviews: [
          { Margaret: "This is what heaven smells like" },
          { Elon: "My wife loves this more than me" },
          { Anne: "I feel like a princess wearing this" },
        ],
        productFaq: [
          [
            "Is this product cruelty free?",
            "Yes, it is a cruelty free product",
          ],
          [
            "Does this product contain allergens?",
            "No, this product is allergen free",
          ],
        ],
      },
    };


    function hoverBackground(event){
      if(!window.matchMedia('(max-width:900px').matches)
        {
     event.target.classList.add('hoverableAreaClass')
     let walk = 50
         const width = event.target.offsetWidth;
         const height = event.target.offsetHeight;
         const clientX= event.clientX
         const clientY = event.clientY

             const xWalk = Math.round((clientX / width) * walk - walk / 2);
             const yWalk = Math.round((clientY / height) * walk - walk / 2);
        event.target.style.marginLeft = xWalk + 'px'
        event.target.style.marginTop = yWalk + 'px'
        
    }
  }

    function hoverBackgroundOut(event){
            if(!window.matchMedia('(max-width:900px').matches)
        {
      event.target.style.transitionDuration = '0.1s'
                event.target.style.marginLeft = "0px";
                event.target.style.marginTop = "0px";
    }
  }


    const [perfumeInfo, changePerfumeInfo] = useState(productInfo.perfume2);

    function changePic(nr){
      changeIndex(nr)
      switch (nr){
         case 1:
           changeLogo(logo1)
           changePerfumeInfo(productInfo.perfume1)
           return
        case 2:
          changeLogo(logo2)
           changePerfumeInfo(productInfo.perfume2);

          return
        case 3:
          changeLogo(logo3)
          changePerfumeInfo(productInfo.perfume3);

          return
      }

      
    }
  
    
    // https://dribbble.com/shots/23281401-Perfume-Shopify-Product-Design-Web-Design-Ecommerce-UI
    

    return (
      <div className="mainWrapper">
        <div className="header">
          <div className="ecc_logo">
            <span>
              <FontAwesomeIcon icon={faGem} />
            </span>
            <span className="logoText">Valentino</span>
          </div>

          <ol>
            <li>Home</li>
            <li>Products</li>
            <li>About</li>
            <li>Contact us</li>
          </ol>

          <ol>
            <li>
              <FontAwesomeIcon icon={faUser} />
            </li>
            <li>
              <FontAwesomeIcon icon={faCreditCard} />
            </li>
            <li>
              <FontAwesomeIcon icon={faMessage} />
            </li>
          </ol>
        </div>

        <div className="mainArea">
          <div className="mainText">
            <div className="title">
              <p className="titleColor">Trending</p>
              <p>Best Perfumes</p>
              <p>Collections</p>
              <p className="mainAreaYear">2024</p>
            </div>

            <div className="info">
              <div className="infoNumber" key={index}>
                {index}
              </div>
              <p>{perfumeInfo.name}</p>
              <p>Valentino</p>
            </div>
          </div>

          <TransitionGroup className="pictureArea">
            <div
              className="mainPicture"
              onMouseMove={(e) => hoverBackground(e)}
              onMouseOut={(e) => hoverBackgroundOut(e)}
            ></div>
            <CSSTransition
              in={true}
              appear={true}
              key={index}
              classNames="slide"
            >
              <img
                key={index}
                src={logo}
                onMouseOver={(e) => e.stopPropagation()}
              ></img>
            </CSSTransition>
          </TransitionGroup>

          <div className="mainDescription">
            <div
              className={
                isOpen1 ? "descriptionDetail openWide" : "descriptionDetail"
              }
            >
              <div>
                <span>Description</span>
                <button
                  onClick={() => toggleDescription1(!isOpen1)}
                  className={isOpen1 ? "closeDescription" : ""}
                >
                  +
                </button>
              </div>
              <TransitionGroup>
                <CSSTransition
                  in={true}
                  appear={true}
                  key={isOpen1}
                  classNames="slideText"
                >
                  <>
                    {isOpen1 && (
                      <div className="descriptionOpen">
                        {perfumeInfo.description}
                      </div>
                    )}
                  </>
                </CSSTransition>
              </TransitionGroup>
            </div>

            <div
              className={
                isOpen2 ? "descriptionDetail openWide" : "descriptionDetail"
              }
            >
              <div>
                <span>Reviews</span>
                <button
                  onClick={() => toggleDescription2(!isOpen2)}
                  className={isOpen2 ? "closeDescription" : ""}
                >
                  +
                </button>
              </div>
              <TransitionGroup>
                <CSSTransition
                  in={true}
                  appear={true}
                  key={isOpen2}
                  classNames="slideText"
                >
                  <>
                    {isOpen2 && (
                      <div className="descriptionOpen">
                        {perfumeInfo.reviews.map(function (data) {
                          return (
                            <div key={Object.keys(data)}>
                              {Object.values(data)} - <i>{Object.keys(data)}</i>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </>
                </CSSTransition>
              </TransitionGroup>
            </div>

            <div
              className={
                isOpen3 ? "descriptionDetail openWide" : "descriptionDetail"
              }
            >
              <div>
                <span>Product faq</span>
                <button
                  onClick={() => toggleDescription3(!isOpen3)}
                  className={isOpen3 ? "closeDescription" : ""}
                >
                  +
                </button>
              </div>
              <TransitionGroup>
                <CSSTransition
                  in={true}
                  appear={true}
                  key={isOpen3}
                  classNames="slideText"
                >
                  <>
                    {isOpen3 && (
                      <div className="descriptionOpen">
                        {perfumeInfo.productFaq.map(function (data) {
                          return (
                            <div key={data[0]}>
                              <b>{data[0]}</b>
                              <div>{data[1]} </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </>
                </CSSTransition>
              </TransitionGroup>
            </div>

            <h2>Start from $160</h2>
            <button className="buyButton">Buy now</button>
          </div>

          {/* 
           <div className="mainDescription">
            <div className="descriptionDetail">
              <div>
                <span>Description</span>
                <button
                  onClick={() => toggleDescription1(!isOpen1)}
                  className={isOpen1 ? "closeDescription" : ""}
                >
                  +
                </button>
              </div>
              <TransitionGroup>
                <CSSTransition
                  in={true}
                  appear={true}
                  key={isOpen1}
                  classNames="slideText"
                >
                  <>
                    {isOpen1 && (
                      <div className="descriptionOpen">
                        {perfumeInfo.description}
                      </div>
                    )}
                  </>
                </CSSTransition>
              </TransitionGroup>
            </div>

            <div className="descriptionDetail">
              <div>
                <span>Reviews</span>
                <button
                  onClick={() => toggleDescription2(!isOpen2)}
                  className={isOpen2 ? "closeDescription" : ""}
                >
                  +
                </button>
              </div>
              <TransitionGroup>
                <CSSTransition
                  in={true}
                  appear={true}
                  key={isOpen2}
                  classNames="slideText"
                >
                  <>
                    {isOpen2 && (
                      <div className="descriptionOpen">
                        {perfumeInfo.reviews.map(function (data) {
                          return (
                            <div key={Object.keys(data)}>
                              {Object.values(data)} - <i>{Object.keys(data)}</i>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </>
                </CSSTransition>
              </TransitionGroup>
            </div>

            <div className="descriptionDetail">
              <div>
                <span>Product faq</span>
                <button
                  onClick={() => toggleDescription3(!isOpen3)}
                  className={isOpen3 ? "closeDescription" : ""}
                >
                  +
                </button>
              </div>
              <TransitionGroup>
                <CSSTransition
                  in={true}
                  appear={true}
                  key={isOpen3}
                  classNames="slideText"
                >
                  <>
                    {isOpen3 && (
                      <div className="descriptionOpen">
                        {perfumeInfo.productFaq.map(function (data) {
                          return (
                            <div key={data[0]}>
                              <b>{data[0]}</b>
                              <div>{data[1]} </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </>
                </CSSTransition>
              </TransitionGroup>
            </div>

            <h2>Start from $160</h2>
            <button className="buyButton">Buy now</button>
          </div> */}
        </div>

        <div className="footer">
          <div className="footerCarousel">
            <button
              className={index === 1 ? "highlightCarousel" : ""}
              onClick={() => changePic(1)}
            >
              Oriental
            </button>
            <button
              className={index === 2 ? "highlightCarousel" : ""}
              onClick={() => changePic(2)}
            >
              Floral
            </button>
            <button
              className={index === 3 ? "highlightCarousel" : ""}
              onClick={() => changePic(3)}
            >
              Woody
            </button>
          </div>


        </div>
      </div>
    );
}

export default Eccomerce