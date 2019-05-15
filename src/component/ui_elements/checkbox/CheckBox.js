/**
 * @author Asttle
 * @email asttlej@vuram.com
 * @create date 2018-11-27 17:34:14
 * @modify date 2018-11-27 17:34:14
 * @desc [description]
 */
import React from "react";
import { joinStyleClasses } from "../../../utils/UtilityFunctions";

import styles from "../../../App.css";
import classes from "./CheckBox.css";

const checkBoxComponent = props => {
  let checkBoxContainer = null;
  if (props.hasError) {
    checkBoxContainer = joinStyleClasses([
      props.pClassName,
      "position-relative",
      "d-table",
      styles.Black16,
      classes.LineHeight32,
      classes.Error
    ]);
  } else {
    checkBoxContainer = joinStyleClasses([
      props.pClassName,
      "position-relative",
      "d-table",
      styles.Black16,
      classes.LineHeight32
    ]);
  }
  let checkMarkClass = joinStyleClasses([classes.Checkmark, props.className]);

  return (
    <div className={checkBoxContainer}>
      <label htmlFor={props.id} className={classes.Container}>
        {props.content}
        <input
          type="checkbox"
          id={props.id}
          name={props.name}
          onChange={props.handleClick}
          checked={props.checked}
          readOnly
        />
        <span className={checkMarkClass}  />
      </label>
    </div>
  );
};
export default checkBoxComponent;
