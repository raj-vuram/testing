import React from "react";

import globalClasses from "../../App.css";
import { joinStyleClasses } from "../../utils/UtilityFunction";

import classes from "./Header.css";

import logo from "../../assets/logo.svg";

let currentPageContainer = joinStyleClasses([
  "container-fluid",
  classes.CurrentPageContainer
]);
let InnerContainer = joinStyleClasses([
  classes.LowerContainer,
  "container",
  "position-relative"
]);
let orgNameClass = joinStyleClasses([globalClasses.Grey24]);
let pageTitlteClass = joinStyleClasses([globalClasses.White48, classes.PageTitle]);

const Header = props => {  

  console.log("classes", classes.Header);
  

  return (
    <div className={classes.Header}>
      <div className={InnerContainer}>
        <img
          src={props.logo}
          className={classes.OrgImage}
          alt="orgImage"
        />
        <span className={classes.OrgDetailsContainer}>
          <div className={orgNameClass}>{props.adminName}</div>
          <div className={pageTitlteClass}>{props.pageName}</div>
        </span>
      </div>
    </div>
  );
};



export default Header;
Header.defaultProps = {
    logo : logo,    
    pageName : "Check"
}
