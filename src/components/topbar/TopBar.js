import React from "react";
import './topbar.css'
import  topImag from '../../Image/topImg.jpg'
import {Outlet,Link} from "react-router-dom"
export default function TopBar()
{
  const user=false;
    return(
        <div className="top"> 
              <div className="topLeft">
              <i className="topIcon bi bi-facebook"/>
              <i className="topIcon bi bi-twitter"></i>
              <i className="topIcon bi bi-pinterest"></i>
              <i className="topIcon bi bi-instagram"></i>
               
              </div>
              <div className="topCenter">
                <ul className="topList">
                   <Link to="/" className="topListItem">HOME</Link>
                   <Link to='' className="topListItem">ABOUT</Link>
                   <Link to=''className="topListItem">CONTACT</Link>
                   <Link to='write' className="topListItem">WRITE</Link>
                   <Link className="topListItem">{user && "LOGOUT"}</Link>
                </ul>
              </div>
              <div className="topRight">
                {user?(
                  <img className="topImg"
                  src={topImag}
                  alt="sorry"/>
                ):
                <ul className="topList">
                  <li className="topListItem">
                <Link className="link" to="/login">LOGIN</Link>
                </li>
                <li className="topListItem">
                <Link className="link" to="/register">REGISTER</Link>
                </li>
                </ul>
                }
                
                     <i className="topSearchIcon bi bi-search"></i>
                    
              </div>
              <Outlet/>
        </div>
    )
}