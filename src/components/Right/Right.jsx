import React from "react";
import "./Right.css";
import { FaPaintBrush } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";


const Right = () => {
  return (
    <div className="RightHolder">
      <div className="RightHolderInner">
        <div className="RightHolderInnerTop">
          <div className="RightHolderInnerTopHead">
            <div className="RightHolderTopAddFeed">
              <h2 className="RightHolderH2"> Add to your feed </h2>
              <div className="RightForHoldingTopBrush">
                <FaPaintBrush color="white" />
              </div>
            </div>

            <diiv className="RightHolderMiddle">
              <div className="RightHolderMiddleOne">
                <div className="RightHolderMiddleOneImgHolder">
                  <div className="RightHolderMiddleInnerImgRound"></div>
                  <div className="RightHolderMIddleTextHolder">
                    <h4 className="RightMiddleH4"> Esther Raji </h4>
                    <p className="RightHolderP">
                      {" "}
                      Helping You with your frontend gigs{" "}
                    </p>
                    <p className="RightHolderP2">
                      {" "}
                      Career | Frontend Dev - Dancer....{" "}
                    </p>
                  </div>
                </div>
                <div className="RightHolderMiddleOneBtnHolder">
                  <button className="RightMiddleFollowBtn"> + Follow </button>
                </div>
              </div>

              <div className="RightHolderMiddleTwo">
                <div className="RightHolderMiddleOneImgHolder">
                  <div className="RightHolderMiddleInnerImgRound"></div>
                  <div className="RightHolderMIddleTextHolder">
                    <h4 className="RightMiddleH4"> Oluchukwu Ezejioha </h4>
                    <p className="RightHolderP">
                      {" "}
                      Helping You with your frontend gigs{" "}
                    </p>
                    <p className="RightHolderP2">
                      {" "}
                      Career | Frontend Dev - Dancer....{" "}
                    </p>
                  </div>
                </div>

                <div className="RightHolderMiddleOneBtnHolder">
                  <button className="RightMiddleFollowBtn"> + Follow </button>
                </div>
              </div>

              <div className="RightHolderMiddleThird">
                <div className="RightHolderMiddleOneImgHolder">
                  <div className="RightHolderMiddleInnerImgRound"></div>
                  <div className="RightHolderMIddleTextHolder">
                    <h4 className="RightMiddleH4"> Chiamaka Juilet </h4>
                    <p className="RightHolderP">
                      {" "}
                      Helping You with your frontend gigs{" "}
                    </p>
                    <p className="RightHolderP2">
                      {" "}
                      Career | Frontend Dev - Dancer....{" "}
                    </p>
                  </div>
                </div>
                <div className="RightHolderMiddleOneBtnHolder">
                  <button className="RightMiddleFollowBtn"> + Follow </button>
                </div>
              </div>
            </diiv>

            <div className="RightTopBottomRecommended">
                View All Recommendation <FaArrowRight />
            </div>
          </div>

          <div className="RightBottomcontentHolder">
                <div className="RightBottomContentTop">
                    <div className="RightBottomContentPromoted"> Promoted ... </div>
                    <div className="RightBottomContentKey"> </div>
                </div>

                <div className="RightBottomContentBottom">
                    <div className="RightBottomcontetnBottomTop">
                        <h4 className="RightBottomContentH4"> Linkedin Premium </h4>
                        <p className="RightBottomContentP"> See who viewed Your profile in the last 500 days </p>
                    </div>

                    <div className="RightBottomContentBottomTopHead">
                        <div className="RightBottomContentBottomTopLeft">
                            <div className="RightBottomContentBottomLeftA"></div>
                            <div className="RightBottomContentBottomLeftB"></div>
                            <div className="RightBottomContentBottomLeftC"></div>
                        </div>
                        <div className="RightBottomContentBottomTopRight">
                            <p className="RightBottomContentBottomP"> Anita Ezejioha and 25 others connections also follow LinkedIn </p>
                        </div>

                    </div>

                    <div className="RightBottomContentBottomBtn"> 
                        <button className="RightBottomContentBtn"> Restart Trial </button>
                    </div>
                </div>

          </div>
        </div>

        
      
      </div>

      <div className="RightBottomontentBottomLast">
        <div className="RightBottomContentBottomLastTop">
            <div className="RightBottomContentBottomInnerTop">
                <div className="RightBottomContentBottomInnerOne"> 
                    <p> About </p>
                    <p>Accssibility</p>
                    <p>  Help Center </p>    
                </div>

                <div className="RightBottomContentBottomInnerTwo"> 
                    <p> Privacy & Terms </p>
                    <p>  Ad Choices </p>    
                </div>

                <div className="RightBottomContentBottomInnerThree"> 
                    <p> Advertising </p>
                    <p>  Business Services </p>    
                </div>

                <div className="RightBottomContentBottomInnerFour"> 
                    <p> Get the Linkedin App </p>
                    <p> More </p>    
                </div>
            </div>

            <div className="RightBottomContentLastLast">
                <h2 className="RightBottomContentLastH2"> LinkedIn </h2>
          <IoLogoLinkedin color="blue" size={15} />

                <p className="RightBottomContentLastP"> LinkedIn Corporation c 2024 </p>
            </div>
            </div> 

    
     </div>

    </div>
  );
};

export default Right;
