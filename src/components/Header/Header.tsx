import React from "react";
import './Header.css'
import logo from '../../assets/ac-logo.png'
import { Link } from "react-router-dom";

export interface IAppProps {
}

const Header = (props: IAppProps) => {
  return (
    <div className="header">
      <Link to="/">
        <img className="logo" src={logo} />
      </Link>
      <h1 className="">Villager Finder</h1>
    </div>
  );
}

export default Header