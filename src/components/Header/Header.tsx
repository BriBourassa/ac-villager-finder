import React from "react";
import './Header.css'
import logo from '../../assets/ac-logo.png'

export interface IAppProps {
}

const Header = (props: IAppProps) => {
  return (
    <div className="header">
      <img className="logo" src={logo} />
      <h1 className="">Villager Finder</h1>
    </div>
  );
}

export default Header