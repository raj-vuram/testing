/**
 * @author Akshaya Rangesh
 * @email akshayagr@vuram.com
 * @create date 2019-02-06 09:44:59
 * @modify date 2019-02-06 09:44:59
 * @desc [description]
 */

import React from "react";

import { FULL_WIDTH_CARD_STRINGS } from "./FullWidthCardStrings";
import { joinStyleClasses } from "../../utils/UtilityFunction";

// import SAMPLE_IMG from "../../../assets/samplengoimage1.jpg";
import RIGHT_ARROW_ICON from "../../assets/rightArrow.png";

import classes from "./FullWidthCard.css";
import globalclasses from "../../App.css";

let cardStyle = joinStyleClasses([classes.FullWidthCard, "position-relative"]);
let labelStyle = joinStyleClasses([
  classes.LabelPadding,
  globalclasses.White14Lite
]);
let contentStyle = joinStyleClasses(["col-12 pr-0 ", classes.ContentPadding]);
let timeStyle = joinStyleClasses([
  "col-12 col-lg-3 col-sm-12 col-md-3 ",
  classes.Time
]);
let textContainer = joinStyleClasses([
  "col-6 col-sm-6 col-md-3 col-lg-3",
  globalclasses.MarginTop15,
  globalclasses.WordBreak
]);
let textContainer2 = joinStyleClasses([
  "d-sm-block d-lg-none d-md-none d-block"
]);


const fullWidthCard = props => {
 
  
 
  let statusContent = (
    <div className="row">
      <div className={textContainer}>
        <p className={globalclasses.White14Lite}>{props.labels.LABEL1}</p>
        <p className={globalclasses.Black16LiteV2}>{props.data.text1}</p>
        
      </div>
      <div className={textContainer}>
        <p className={labelStyle}>{props.labels.LABEL2}</p>
        <p className={globalclasses.Black16LiteV2}>{props.data.text2}</p>
      </div>
      <div className={textContainer}>
        <p className={labelStyle}>{props.labels.LABEL3}</p>
        <p className={globalclasses.Black16LiteV2}>{props.data.text3}</p>
      </div>      
    </div>
  );
  return (
    <div className={cardStyle} onClick={props.onClick}>
      <div className="media">
        <img src={props.data.img} alt={FULL_WIDTH_CARD_STRINGS.IMG_ALT_TEXT} />
        <div className="media-body">
          <div className="row">
            <div className={contentStyle}>
              {/*  details - Item name / person name */}
              <div className={"row"}>
                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                  <p className={globalclasses.Blue20BoldV1}>
                    {props.data.title}
                   
                  </p>
                  
                </div>
                <div className={timeStyle}>
                  <p className={globalclasses.White14V2}> {props.data.time}</p>
                
                </div>
              </div>
              <span className="d-sm-none d-lg-block d-md-block d-none">
                {statusContent}
              </span>
              {/*  details with col - item details / person details */}
            </div>
          </div>
        </div>
      </div>
      <div className={textContainer2}>{statusContent}</div>
      <img
        className={classes.Icon}
        src={RIGHT_ARROW_ICON}
        alt={FULL_WIDTH_CARD_STRINGS.IMG_ALT_TEXT}
      />
    </div>
  );
};

export default fullWidthCard;
