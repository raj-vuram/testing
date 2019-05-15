import React, { Component } from "react";

import Header from "../../component/header/Header";
import FullWidthCard from "../../component/full_width_card/FullWidthCard";
import CheckBox from '../../component/ui_elements/checkbox/CheckBox';

import { FULL_WIDTH_CARD_STRING } from "./HomeStrings";

import { joinStyleClasses } from "../../utils/UtilityFunction";

import classes from './Home.css';
class Home extends Component {
  render() {
      let filter = <div className={classes.FilterContainer}>
        <CheckBox            
            name="checkbox"
            checked={true}
            content={"New"}            
          />
      </div>
    return (
      <div>
        <Header pageName="User Management" />
        <div className="container-fluid">
          <div className="col-3" >
            {filter}
          </div>
          <div className="col-9">
            <FullWidthCard
              labels={FULL_WIDTH_CARD_STRING.LABEL}
              data={FULL_WIDTH_CARD_STRING.DATA}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
