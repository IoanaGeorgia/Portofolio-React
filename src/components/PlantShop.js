import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGem, faUser } from "@fortawesome/free-regular-svg-icons";
import "../PlantShop.css";
import plant_landing from "../assets/plant_landing.PNG";
import plant_info from "../assets/plant_info.PNG";
import plantData from "../plantData";
import plant1 from '../assets/plant1.PNG'
import plant2 from '../assets/plant2.PNG'
import plant3 from '../assets/plant3.PNG'
import plant4 from '../assets/plant4.PNG'
import plant5 from '../assets/plant5.PNG'
import plant6 from "../assets/plant6.PNG";
import { CSSTransition, TransitionGroup } from "react-transition-group";
function PlantShop() {
  const [shoppingCart, setShoppingCart] = useState([]);
  const [isOpenCart, openCart] = useState(false);

  //dribbble.com/shots/22189563-Shop-Website-Design
  let plantImages=  [plant1, plant2, plant3, plant4, plant5, plant6]


  function eliminateItem(data){
    let tempElimArr = shoppingCart.filter(function (el) {
      return el.name != data.name;
    }); 
    setShoppingCart(tempElimArr)
  }

  function addToCart(data){
    
    if(shoppingCart.length === 0){
      setShoppingCart([data])
    }
    if(shoppingCart.length > 0){

       const isDuplicate = shoppingCart.some((item) => item.name === data.name);
       

          if(!isDuplicate){
            setShoppingCart([...shoppingCart, data]);
          }
          else{
            setShoppingCart([...shoppingCart])
          }
    } 

     
  }


  return (
    <div className="ps_mainWrapper">
      {isOpenCart ? <div className="ps_cart">
       <p className="ps_cartTitle">Dear A., you cart contains the following items:</p>
        {
          shoppingCart.length ? <div>
            
            {shoppingCart.map((data, index) => {
              return (
                  <div key={index} className="ps_cartProduct">
                    <span>
                      <div>{index}</div>
                      <div>{data.name}</div>
                      </span>
                      <span>
                        <div>${data.price}</div>
                        <input type='number' placeholder='1' value={1}></input>
                        <button onClick={()=>eliminateItem(data)}>x</button>
                      </span>
                    </div>
                    
              )
            })}


          </div> : <div className="ps_cartEmpty">Your cart is empty.</div>
        }
        <div className='ps_cartFooter'>
          <p>Number of items: {shoppingCart.length}</p>
          <button>Order</button>
        </div>
      </div> : ""}
      <div className="ps_wrapper">
        <div className="ps_landing">
          <div className="ps_header">
            <div className="ps_logo">
              <FontAwesomeIcon icon={faGem} />
            </div>
            <span>
              <a>Home</a>
              <a>Product</a>
              <a>My Vase</a>
              <a>About Us</a>
              <button>
                <FontAwesomeIcon onClick={() => openCart(true)} icon={faUser} />
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

        <div className="ps_info">
          <p>Product</p>
          <div className="ps_infoContent">
            <p>
              A vase that is one of a kind, that will bring elegance to your
              office, promote focus and well-being, all while giving a modern
              feeling to your space.
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
      </div>
     
    </div>
  );
}

export default PlantShop;
