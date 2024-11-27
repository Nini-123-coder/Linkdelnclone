import React from "react";
import "../Left/Left.css";
import { TbBoxPadding } from "react-icons/tb";
import { BiSolidBookmark } from "react-icons/bi";
import { HiHashtag } from "react-icons/hi";
import { AiOutlineTeam } from "react-icons/ai";
import { RiArrowDownWideLine } from "react-icons/ri";
import { RiAddFill } from "react-icons/ri";

const Left = () => {
  return (
    <div className="LeftHolder">
      <div className="LeftTopHolder">
        <div className="LeftInner">
          <div className="LeftInnerTop">
            <div className="LeftRound"></div>
          </div>

          <div className="DownInner">
            <div className="DownInnerText">
              <h1 className="NameH1"> Anita Ezejioha </h1>
            </div>
            <div className="PHolder">
              <p className="PMain">
                {" "}
                Fullstack-Developer | React | Redux | Node | PHP | Ruby on Rails
                | Javascript | Python | SQL | Student Project | Reviewer at
                MicroVerse
              </p>
            </div>
            <div className="AnalyticText">
              <div className="HoldProfile">
                <p className="ProfileView"> Profile Viewers </p>
                <p className="ViewNum"> 120K </p>
              </div>

              <div className="AnalyticHold">
                <p className="Analytic">View all analytic</p>
              </div>
            </div>

            <div className="AchieveGoals">
              <p className="Achieve"> Achieve your goals with premium </p>

              <div className="RetryPremium">
                <TbBoxPadding />
                <p className="Retry"> Retry Premium for $250 </p>
              </div>
            </div>

            <div className="SavedItems">
              <div className="ItemsSaved">
                <BiSolidBookmark />
                <p>Saved Items</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="LeftBottom">
        <div className="LeftBottomInner">
          <div className="LeftBottomFirst">
            <div className="LeftBottomFirstA">
              <h2 className="LeftBottomH2">Recent</h2>
            </div>

            <div className="LeftBottomFirstB">
              <div className="LeftBottomFirstBOne">
                <HiHashtag />
                <p className="LeftPOne"> Hr </p>
              </div>

              <div className="LeftBottomFirstBOne">
                <AiOutlineTeam />
                <p className="LeftPTwo"> UI Designer and UI Developer </p>
              </div>

              <div className="LeftBottomFirstBOne">
                <HiHashtag />
                <p className="LeftPThree"> Sales </p>
              </div>

              <div className="LeftBottomFirstBOne">
                <HiHashtag />
                <p className="LeftPFour"> Linkedin </p>
              </div>

              <div className="LeftBottomFirstBOne">
                <HiHashtag />
                <p className="LeftPFive"> Hapiness </p>
              </div>
            </div>
          </div>

          <div className="LeftBottomSecond">
            <div className="LeftBottomSecondTop">
              <h2 className="LeftBottomSecondH2"> Groups </h2>
            </div>

            <div className="LeftBottomSecondBottom">
              <div className="LeftBottomSecondBottomInnerOne">
                <AiOutlineTeam />
                <p className="LeftBottomSecondBottomP">
                  {" "}
                  UI Designer and UI Developer
                </p>
              </div>
              <div className="LeftBottomSecondBottomInnerOne">
                <AiOutlineTeam />
                <p className="LeftBottomSecondBottomP">
                  Digital Marketing: Social Me....
                </p>
              </div>
              <div className="LeftBottomSecondBottomInnerOne">
                <AiOutlineTeam />
                <p className="LeftBottomSecondBottomP">
                  UI Designer and UI Developer
                </p>
              </div>

              <div className="LeftBottomShowMoreHold">
                <p className="LeftBottomShowMore">Show More</p>
                <RiArrowDownWideLine size={23} />
              </div>
            </div>
          </div>

          <div className="LeftBottomThird">
            <div className="LeftBottomThirdOne">
              <p className="LeftBottomThirdPEve"> Events </p>
              <RiAddFill size={18} />
            </div>
            <div className="LeftBottomThirdTWo">
              <p className="LeftBottomThirdPHash"> Followed Hashtags </p>
            </div>
            <div className="LeftBottomThirdThree">
              <div className="LeftBottomThirdThreeA">
                <HiHashtag />
                <p className="LeftBottomThirdP"> Hr </p>
              </div>
              <div className="LeftBottomThirdThreeA">
                <HiHashtag />
                <p className="LeftBottomThirdP"> Sales </p>
              </div>
              <div className="LeftBottomThirdThreeA">
                <HiHashtag />
                <p className="LeftBottomThirdP"> Linkedin </p>
              </div>
            </div>
            <div className="LeftBottomThirdFour">
                <div className="LeftBottomThirdHold">
              <p className="LeftBottomThirdShowMore">Show More</p>
              <RiArrowDownWideLine size={23} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Left;
