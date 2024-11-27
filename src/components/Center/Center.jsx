import React from "react";
import "./Center.css";
import { FaTimes } from "react-icons/fa";
import { GoFileMedia } from "react-icons/go";
import { SlCalender } from "react-icons/sl";
import { BsNewspaper } from "react-icons/bs";
import { RiArrowDownSFill } from "react-icons/ri";


const Center = ({ setedit, datas }) => {
  return (
    <div className="CenterHolder">
      <div className="CenterHolderTopHold">
        <div className="CenterHolderTop">
          <div className="CenterHolderTopReal">
            <div className="CenterHolderTopInner">
              <h2 className="MiddleTopH2"> Get ahead with Premium </h2>
              <FaTimes />
            </div>

            <div className="CenterHolderTopRealTwo">
              <div className="CenterBottomRound"></div>
              <h2 className="CenterBottomH2"> Looking for Your next role? </h2>
              <p className="CenterBottomP">
                {" "}
                Premium Users are 2.6x more likely to get hired on average{" "}
              </p>
              <button className="CenterBottomBtn"> Get Premium now </button>
            </div>
          </div>

          <div className="CenterBottomDown">
            <div className="CenterBottomDownInner">
              <div className="CenterBottomDownInnerImg"></div>

              <button onClick={() => setedit(true)} className="ButtonInput">
                Start a post, try writing with AI
              </button>
            </div>

            <div className="CenterBottomDownBottom">
              <div className="CenterBottomDownMedia">
                <GoFileMedia size={20} />
                <p className="CenterBottomMedia">Media</p>
              </div>
              <div className="CenterBottomDownMedia">
                <SlCalender size={20} />
                <p className="CenterBottomMedia">Events</p>
              </div>
              <div className="CenterBottomDownArticleHolder">
                <BsNewspaper size={20} />

                <p className="CenterBottomArticle">Write Article</p>
              </div>
            </div>
          </div>
        </div>
        <div className="LineHolder"> 
            <div className="LineGanGan"> </div>
            <div className="RoundSort"> sort by: <span> Top <RiArrowDownSFill />
            </span> </div>
        </div>

      </div>

      
      {datas.map((e, i) => (
          <div className="postDatas" key={i}>
            <div className="PostDatasText">
            <div className="RoundImgNameHolders">
                <div className="RoundPics"> </div>   
                <div className="NameHolders"> 
                    <h2 className="NameBold"> Ebuka Nweje  </h2>
                    <p className="NameComment"> made a post  and 1K people commented </p>
                    </div> 
            </div>
            <div className="PostTextReal">
            <p>{e.text}</p>
            </div>
            </div>

            <div className="PostDataImgHolders">
            <img className="PostDataImg"
              src={e.img}
              alt=""
            //   style={{ width: "100%", height: "100px" }}
            />
            </div>
          </div>
        ))}
        {/* <input type="file" /> */}
    </div>
  );
};

export default Center