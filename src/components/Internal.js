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

  function formatCardNr(nr) {
    return nr.toString().replace(/\B(?=(\d{4})+(?!\d))/g, " ");
  }

  function seeCVC() {
    console.log("touched fucntion");
    let info = !cardInfo.seeCVC;
    changeCardInfo({ ...cardInfo, seeCVC: info });
    console.log("end funciton");
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

         {loading ? <div className='details loadingWrapper'>
          <p><span>Loading, please wait... </span>
            <div className='loader'></div>
          </p>
          </div> 
          :  
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
                  <span className="messageIcon">
                    <FontAwesomeIcon icon={faPaperPlane} />
                  </span>
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
                  {data.date} <span className="issuedBadge">{data.period}</span>
                </p>
                <p className="issuedSubtitle">
                  -${data.sold}
                  <span className="messageIcon">
                    <FontAwesomeIcon icon={faPaperPlane} />
                  </span>
                </p>
              </div>
            );
          })}
        </div>
      </div>
}
    </div>
        
  );
}

export default Internal;
