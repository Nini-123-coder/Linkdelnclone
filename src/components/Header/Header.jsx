import React from "react";
import "./Header.css";
import Heart from "../../assets/Heart.png"
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { FaPeopleCarryBox } from "react-icons/fa6";

// import { PiNetworkBold } from "react-icons/pi";
import { FcWorkflow } from "react-icons/fc";
import { IoBriefcase } from "react-icons/io5";
import { AiFillMessage } from "react-icons/ai";
import { IoNotificationsSharp } from "react-icons/io5";
import { RiArrowDropDownFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";


import { MdBusiness } from "react-icons/md";

const Header = () => {
  return (
    <div className="HeaderHolder">
      <div className="HeaderMain">
        <div className="HeaderLeft">
          {/* <img src={Heart} alt="" className=''/> */}
          <IoLogoLinkedin color="blue" size={40} />

          <FaSearch
            style={{ position: "absolute", left: "285px" }}
            color="black"
            size={13}
          />
          <input type="text" className="inP" placeholder="Search" />
        </div>

        <div className="HeaderRight">
          <div className="HeaderRightLeft">
            <div className="Home">
              <AiFillHome size={20} />
              <h6> Home </h6>
            </div>

            <div className="Home">
              {/* <PiNetworkBold /> */}
              <FaPeopleCarryBox size={20} />

              {/* <FcWorkflow color="white" size={20} /> */}
              <h6> My Network </h6>
            </div>

            <div className="Home">
              <IoBriefcase size={20} />
              <h6> Jobs </h6>
            </div>

            <div className="Home">
              <AiFillMessage size={20} />
              <h6> Messaging </h6>
            </div>

            <div className="Home">
              <IoNotificationsSharp size={20} />
              <h6> Notifications </h6>
            </div>

            <div className="Home">
                {/* <img src={Heart} alt="" className="Img"/> */}
                <CgProfile size={24}/>

              {/* <div className="ImgHolder"> </div> */}
              <div className="MeArrowHolder">
                <h6> Me </h6>
                <RiArrowDropDownFill size={20} />
              </div>
            </div>
          </div>

          <div className="HeaderRightRight">
            <div className="HeaderRightHold">
              <MdBusiness size={25} />
              <div className="BusinessHold">
                <h6> Business </h6>
                <RiArrowDropDownFill size={20} />
              </div>
            </div>

            <a href="" className="AHold"> Don't miss Premium for $250 </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
