import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCopy,
  faPaperPlane,
  faCreditCard,
  faCircleUp,
  faGem,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-regular-svg-icons";
import "../Internal.css";
import profilePic from "../assets/internal_profilePic.jpg";
import cardData from "../cardData";
import { CSSTransition, TransitionGroup } from "react-transition-group";
function Internal() {
  const [activeCard, changeActive] = useState(0);
  const [loading, setLoading] =useState(false);
  const [cardInfo, changeCardInfo] = useState({ seeCVC: false });
  const [messageOpened, openMessage] = useState(false);
  const [messageInfo, setMessageInfo] = useState({
      name: "",
      product: "",
      message: ''});
  const [isMessageSent, setSendMessage] = useState(false)
    const [contactMessageOpened, openContactMessage] = useState(false);
    const [contactMessageInfo, setContactMessageInfo] = useState({
      name: "",
    });
    const [isContactMessageSent, setContactSendMessage] = useState(false);

  function formatCardNr(nr) {
    return nr.toString().replace(/\B(?=(\d{4})+(?!\d))/g, " ");
  }

  function seeCVC() {
    let info = !cardInfo.seeCVC;
    changeCardInfo({ ...cardInfo, seeCVC: info });
  }

  function formatPercentAmount() {
    return (
      Math.round(
        (cardData[activeCard].spent / cardData[activeCard].total) * 100
      ) + "%"
    );
  }

  function getEstimatedAmount() {
    return (
      Math.round(cardData[activeCard].total / 6.342) +
      cardData[activeCard].total
    );
  }

  function sendMessage(name, product){
    console.log('a')
    openMessage(true)

    setMessageInfo({
        name: name,
        product: "About " + product,
        message:
          "Dear " +
          name +
          ",\n \nFintory is writing to you about " +
          product,
      },

    );
  }

  function closeInternalMessageBox(){
    openMessage(false)
  }

  function changeUser(key, input){
    let temp = {...messageInfo };
    if(key === 'name'){
      temp.name=input
    }
    if(key === 'product'){
      temp.product = 'About'+input
    }
    if(key === 'message'){
      temp.message= input

    }
      
        setMessageInfo(temp);
  }


  function sendMessageAfterPage(){

    setSendMessage(true)
    setSendMessage(true);
        setTimeout(() => {
          openMessage(false)
          setSendMessage(false)
          
        }, 1000);


  }




  function sendContactMessage(name, period) {
    openContactMessage(true);

    setContactMessageInfo({
      name: name,
      message:
         'I want to know more about...'
    });
  }

  function closeContactInternalMessageBox() {
    openContactMessage(false);
  }

  function changeContactUser(key, input) {
    let temp = { ...contactMessageInfo };
    if (key === "message") {
      temp.message = input;
    }

    setContactMessageInfo(temp);
  }

  function sendContactMessageAfterPage() {
    setContactSendMessage(true);
    setContactSendMessage(true);
    setTimeout(() => {
      openContactMessage(false);
      setContactSendMessage(false);
    }, 1000);
  }

  // mock loading function
  function changeActiveCard(index){
    changeActive(index);
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000);

  }



  // https://dribbble.com/shots/16867110-Fintory-SaaS-management-tool
  return (
    <div className="internalWrapper">
      <div className="sideMenu">
        <div>
          <div className="logo">
            <FontAwesomeIcon className="logoIcon" icon={faCreditCard} />
            <span>Fintory</span>
          </div>

          <div className="sideMenuChoices">
            <button>Home</button>
            <button>Accounts</button>
            <button>Cards</button>
            <button>Payments</button>
            <button>Team</button>
            <button>Settings</button>
          </div>
        </div>

        <div>
          <div className="sideMenuChoices">
            <button>Help</button>
            <button>Log Out</button>
          </div>
          <div className="sideMenuProfile">
            <img src={profilePic}></img>
            <div>
              <p>Edward Baldwin</p>
              <p>eld.baldwin@nasa.com</p>
            </div>
          </div>
        </div>
      </div>

      {messageOpened && (
        <div className="messageDiv"> 
            <div className={isMessageSent ? "internalMessageBox disabledBox" : "internalMessageBox"}>
              <button
                className="closeInternalMessageBox"
                onClick={() => closeInternalMessageBox()}
              >
                {" "}
                +{" "}
              </button>
              <p>
                <span>to:</span>{" "}
                <input
                  type="text"
                  value={messageInfo.name}
                  onChange={(e) => changeUser("name", e.target.value)}
                ></input>
              </p>
              <p>
                <span>subject:</span>{" "}
                <input
                  type="text"
                  value={messageInfo.product}
                  onChange={(e) => changeUser("product", e.target.value)}
                ></input>
              </p>

              <div className="internalMessageBoxMessage">
                <textarea
                  value={messageInfo.message}
                  onChange={(e) => changeUser("message", e.target.value)}
                ></textarea>
                <button
                  className="messageIcon"
                  onClick={() => sendMessageAfterPage()}
                >
                  <span>Send</span>
                  <FontAwesomeIcon icon={faPaperPlane} />
                </button>
              </div>
            </div>
          
        </div>
      )}

            {contactMessageOpened && (
        <div className="messageDiv"> 
            <div className={isContactMessageSent ? "internalMessageBox disabledBox" : "internalMessageBox"}>
              <button
                className="closeInternalMessageBox"
                onClick={() => closeContactInternalMessageBox()}
              >
                {" "}
                +{" "}
              </button>
              <p>
                <span>Contact Fintory</span>{" "}

              </p>
              <p>
                <span>subject: {contactMessageInfo.name} subscription</span>
              </p>

              <div className="internalMessageBoxMessage">
                <textarea
                  value={contactMessageInfo.message}
                  onChange={(e) => changeContactUser("message", e.target.value)}
                ></textarea>
                <button
                  className="messageIcon"
                  onClick={() => sendContactMessageAfterPage()}
                >
                  <span>Send</span>
                  <FontAwesomeIcon icon={faPaperPlane} />
                </button>
              </div>
            </div>
          
        </div>
      )}



      <div className="subMenu">
        <p className="subMenuTitle">
          <span>Cards list</span>
          <span>
            <button>
              <FontAwesomeIcon icon={faCircleUp} />
            </button>
            <button> + </button>
          </span>
        </p>

        {cardData.map((data, index) => {
          return (
            <div
              className={
                index == activeCard
                  ? "subMenuCard subMenuCardDark"
                  : "subMenuCard"
              }
              onClick={() => changeActiveCard(index)}
            >
              <div>
                <p className="subMenuCardTitle">{data.name}</p>
                <p>
                  <div className="subMenuActiveSpan"></div>
                  {data.status.toLocaleUpperCase()}
                </p>
                <p>
                  Issued access
                  <span className="issuedAccessBadge">{data.issuedAccess}</span>
                </p>
              </div>

              <div className="subMenuCardArt">
                <div className="subMenuCardArtDetail"></div>
                <div>{data.number}</div>
              </div>
            </div>
          );
        })}
      </div>

      {loading ? (
        <div className="details loadingWrapper">
          <p>
            <span>Loading, please wait... </span>
            <div className="loader"></div>
          </p>
        </div>
      ) : (
        <div className="details">
          <p className="detailsHeader">
            <div className="detailsLogo"></div>
            <span>Software Subscriptions</span>
            <button>Manage ...</button>
          </p>

          <p className="detailsBase">
            <div>
              <p>Card Number</p>
              <p className="baseInfo">
                {formatCardNr(cardData[activeCard].cNumber)}
                <button
                  className="copyIcon"
                  onClick={() => {
                    navigator.clipboard.writeText(cardData[activeCard].cNumber);
                  }}
                >
                  <FontAwesomeIcon icon={faCopy} />
                </button>
              </p>
            </div>
            <div>
              <p>Expired Date</p>
              <p className="baseInfo">{cardData[activeCard].expire}</p>
            </div>

            <div>
              <p>CVC</p>

              <p className="baseInfo cvcText">
                {cardInfo.seeCVC ? (
                  <div>{cardData[activeCard].cvc}</div>
                ) : (
                  <div className="cvcHidden">✸✸✸</div>
                )}
                <button onClick={() => seeCVC()}>
                  {cardInfo.seeCVC ? (
                    <FontAwesomeIcon icon={faEyeSlash} />
                  ) : (
                    <FontAwesomeIcon icon={faEye} />
                  )}
                </button>
              </p>
            </div>
            <div>
              <p>Status</p>
              <p className="baseInfo">
                {cardData[activeCard].virtual ? "virtual" : "physical"}
              </p>
            </div>
          </p>

          <div className="generalAmount">
            <div className="generalAmountLimits">
              <p className="detailsSubtitle"> Spending limits</p>
              <div>
                <p>Daily Transactions Limit</p>
                <div className="amountLimitsBar">
                  <div
                    style={{ width: formatPercentAmount() }}
                    className="amountLimitsFullBar"
                  ></div>
                </div>
                <p className="amountLimitsInfo">
                  <span>
                    ${cardData[activeCard].spent} spent out of $
                    {cardData[activeCard].total}
                  </span>
                  <span>{formatPercentAmount()}</span>
                </p>
              </div>
            </div>
            <div className="generalAmountEstimations">
              <p>Estimated amount for this month:</p>
              <p>
                <div>${getEstimatedAmount()}</div>
                <span className="amountEstimationsIcon">
                  <FontAwesomeIcon icon={faGem} />
                </span>
              </p>
            </div>
          </div>

          <div className="issuedDetails">
            <p className="detailsSubtitle">
              Issued Access
              <span className="issuedAccessBadge">
                {cardData[activeCard].issuedAccess}
              </span>{" "}
            </p>
            {cardData[activeCard].issuedAccessPeople.map((data) => {
              return (
                <div className="issuedWrapper">
                  <p className="issuedSubtitle"> {data.name} </p>
                  <p>{data.product}</p>
                  <p className="issuedSubtitle">
                    ${data.amount} / {data.period}
                    <button
                      className="messageIcon"
                      onClick={() => sendMessage(data.name, data.product)}
                    >
                      <FontAwesomeIcon icon={faPaperPlane} />
                    </button>
                  </p>
                </div>
              );
            })}
          </div>

          <div className="transactions">
            <p className="detailsSubtitle">
              Recent Transactions
              <span className="issuedAccessBadge">
                {cardData[activeCard].recentTransactions.length}
              </span>
            </p>
            {cardData[activeCard].recentTransactions.map((data) => {
              return (
                <div className="issuedWrapper">
                  <p className="issuedSubtitle"> {data.company} </p>
                  <p>
                    {data.date}{" "}
                    <span className="issuedBadge">{data.period}</span>
                  </p>
                  <p className="issuedSubtitle">
                    -${data.sold}
                    <button
                      className="messageIcon"
                      onClick={() => sendContactMessage(data.company, data.period)}
                    >
                      <FontAwesomeIcon icon={faPaperPlane} />
                    </button>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default Internal;
