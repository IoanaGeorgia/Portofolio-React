import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGem, faUser, faCopy } from "@fortawesome/free-regular-svg-icons";
import "../PlantShop.css";
import plant_landing from "../assets/plant_landing.PNG";
import plant_info from "../assets/plant_info.PNG";
import plantData from "../plantData";
import plant1 from "../assets/plant1.PNG";
import plant2 from "../assets/plant2.PNG";
import plant3 from "../assets/plant3.PNG";
import plant4 from "../assets/plant4.PNG";
import plant5 from "../assets/plant5.PNG";
import plant6 from "../assets/plant6.PNG";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function PlantShop() {
  const [shoppingCart, setShoppingCart] = useState([]);
  const [isOpenCart, openCart] = useState(false);
  const [isAlert, openAlert] = useState(false);
  const [isSameProduct, setSameProduct] = useState(false);

  //dribbble.com/shots/22189563-Shop-Website-Design
  let plantImages = [plant1, plant2, plant3, plant4, plant5, plant6];

  function scrollToDiv(id) {
    const targetElement = document.getElementById(id); // Get the target element
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" }); // Scroll to the target element
    }
  }

  function eliminateItem(data) {
    let tempElimArr = shoppingCart.filter(function (el) {
      return el.name != data.name;
    });
    setShoppingCart(tempElimArr);
  }

  function addToCart(data) {
    openAlert(true);

    setTimeout(() => {
      openAlert(false);
    }, 3000);

    if (shoppingCart.length === 0) {
      setShoppingCart([data]);
    }
    if (shoppingCart.length > 0) {
      const isDuplicate = shoppingCart.some((item) => item.name === data.name);

      if (!isDuplicate) {
        setSameProduct(false);
        setShoppingCart([...shoppingCart, data]);
      } else {
        setShoppingCart([...shoppingCart]);
        setSameProduct(true);
      }
    }
  }

  function copyMyVase(info, e) {
    navigator.clipboard.writeText(info);

    e.target.classList.add("ps_myVaseCopyActive");

    const tooltip = document.createElement("span");
    tooltip.classList.add("tooltip");
    tooltip.textContent = "Copied !";
    const targetRect = e.target.getBoundingClientRect();
    e.target.parentNode.insertBefore(tooltip, e.target.nextSibling);
      e.target.style.pointerEvents = "none";
    setTimeout(() => {
      e.target.classList.remove("ps_myVaseCopyActive");
       e.target.parentNode.removeChild(tooltip);
    }, 1500);

        setTimeout(() => {
          e.target.style.pointerEvents = "auto";
        }, 1500);
  }

  return (
    <div className="ps_mainWrapper">
      {isOpenCart ? (
        <TransitionGroup className="ps_cart">
          {/* <CSSTransition in={isOpenCart}   classNames="ps_slide">  */}

          <CSSTransition
            in={isOpenCart}
            timeout={300}
            classNames="content"
            unmountOnExit
          >
            <div>
              <button onClick={() => openCart(false)} className="ps_cartClose">
                x
              </button>
              <p className="ps_cartTitle">
                Dear A., you cart contains the following items:
              </p>
              {shoppingCart.length ? (
                <div>
                  {shoppingCart.map((data, index) => {
                    return (
                      <div key={index} className="ps_cartProduct">
                        <span>
                          <img
                            src={
                              plantImages[
                                plantData.findIndex((x) => x.name === data.name)
                              ]
                            }
                          />
                          <div>{index + 1}</div>
                          <div>{data.name}</div>
                        </span>
                        <span>
                          <div>${data.price}</div>
                          <input
                            type="number"
                            placeholder="1"
                            value={1}
                          ></input>
                          <button onClick={() => eliminateItem(data)}>x</button>
                        </span>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="ps_cartEmpty">Your cart is empty.</div>
              )}
              <div className="ps_cartFooter">
                <p>Number of items: {shoppingCart.length}</p>
                <button>Order</button>
              </div>
            </div>
          </CSSTransition>
        </TransitionGroup>
      ) : (
        <>
          {isAlert ? (
            <div className="ps_alert">
              {isSameProduct ? (
                <>Already added to cart.</>
              ) : (
                <>
                  One <b>{shoppingCart[shoppingCart.length - 1].name}</b> added
                  to cart!
                </>
              )}{" "}
            </div>
          ) : (
            ""
          )}
        </>
      )}
      <div className="ps_wrapper">
        <div className="ps_landing">
          <div className="ps_header">
            <div className="ps_logo">
              <FontAwesomeIcon icon={faGem} />
            </div>
            <span>
              <a>Home</a>
              <a onClick={() => scrollToDiv("ps_product")}>Product</a>
              <a onClick={() => scrollToDiv("ps_myVase")}>My Vase</a>
              <a onClick={() => scrollToDiv("ps_aboutUs")}>About Us</a>
              <button onClick={() => openCart(true)}>
                <FontAwesomeIcon icon={faUser} />
              </button>
            </span>
          </div>

          <div className="ps_mainLanding">
            <div>
              <div className="ps_mainLandingPic">
                <img src={plant_landing} />
              </div>
            </div>
            <div>
              <p className="ps_mainTitle">
                <span>S</span>epidor
              </p>
              <p>
                We design and create elegant and modern vases, perfect for any
                espace.
              </p>
            </div>
          </div>
        </div>

        <div id="ps_product" className="ps_info">
          <p className="ps_infoSubtitle">Product</p>
          <div className="ps_infoContent">
            <p>
              A vase that is one of a kind, that will bring elegance to your
              office, promote focus and well-being, all while giving a modern
              feeling to your space. Your perfect vase is just one click away!
            </p>
            <div>
              <img src={plant_info} />
            </div>
          </div>
        </div>
        <div className="ps_productArea">
          <p className="ps_defaultLimit">Products</p>
          <div className="ps_products">
            {plantData.map((data, index) => {
              return (
                <div key={index} className="ps_product">
                  <div>
                    <img src={`${plantImages[index]}`} />
                  </div>
                  <p>
                    {data.name} <span>${data.price}</span>
                  </p>

                  <div className="ps_productTags">
                    {data.tags.map((tag) => (
                      <div key={tag} className="ps_productTag">
                        {tag}
                      </div>
                    ))}
                  </div>
                  <div className="ps_productTags">
                    <button onClick={() => addToCart(data)}> Buy </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div id="ps_myVase" className="ps_myVase">
          <p className="ps_infoSubtitle">My Vase</p>
          <div className="ps_myVaseText">
            <div className="ps_myVaseImage"></div>
            <p>
              If you already have a vase design in mind, you can contact one of
              your sellers and together, bring the concept of your ideal vase to
              life.
            </p>
          </div>
          <p className="ps_defaultLimit">My Vase</p>
          <div className="ps_myVaseContact">
            <div>
              <p>Program</p>
              <p>L-V 8:00 - 18:00</p>
            </div>
            <div>
              <p>
                Email: <span>myperfectvase@yahoo.com</span>{" "}
                <FontAwesomeIcon
                  className="ps_myVaseCopy"
                  icon={faCopy}
                  onClick={(e) => {
                    copyMyVase("myperfectvase@yahoo.com", e);
                  }}
                />
              </p>
              <p>
                Phone Number: <span> + 08 995 664 355 </span>{" "}
                <FontAwesomeIcon
                  className="ps_myVaseCopy"
                  icon={faCopy}
                  onClick={(e) => {
                    copyMyVase("08 995 664 355", e);
                  }}
                />
              </p>
              {/* <form>
                <label>
                  E-mail Address:
                  <input type="mail"></input>
                </label>
                <label>
                  Phone Number:
                  <input type="text"></input>
                </label>
                <button>S</button>
              </form> */}
            </div>
          </div>
        </div>
        <div className="ps_footer" id="ps_aboutUs">
          <div>
            Sepidor is a German company founded by Jeanne Mary-James.
            Established in 2010, it has since came to have customers all over
            the world. Our mission is to provide beautiful vases for our
            customers.
          </div>
          <span>
            <p>Instagram</p>
            <p>LinkedIn</p>
            <p>Facebook</p>
            <p>Discord</p>
            <p>Custom Protection Regulations</p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default PlantShop;
