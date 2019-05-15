import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink  
} from "reactstrap";

import logo from "../../assets/logo.svg";
import notificationIcon from '../../assets/notification.svg';
import classes from "./NavBar.css";

import { NAV_BAR_LIST_ANONYMOUS } from "./NavBarStrings";

class NavBar extends Component { 
  state={
    activeNotificationCount : 1
  }
    
  
  render() {
      console.log("classesss", classes.NavBarBrandImg);
      let notificationBadge = null, navNotification = null;
    let NavList = NAV_BAR_LIST_ANONYMOUS.map(data => {
        console.log("data", data);
      return (
        <NavItem>
          <NavLink href={data.path}>{data.title}</NavLink>
        </NavItem>
      );
    });
    if (this.state.activeNotificationCount !== 0) {
        notificationBadge = <div className={classes.NotificationBadge} />;
      }

      navNotification = (
        <div
          className={classes.NotificationContainer}
          onClick={this.showNotificationSlider}
        >
          <img src={notificationIcon} alt="notification" />
          {notificationBadge}
        </div>
      );
    
    return (
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">
          <img src={logo} className={classes.NavBarBrandImg} alt="Humane" />
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={true} navbar>
          <Nav className="ml-auto" navbar>
            {NavList}    
            {navNotification}
            {navNotification}
            {navNotification}
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
export default NavBar;
