import React from 'react'
import './style.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTE } from "../../constants";
import { BsSearch } from "react-icons/bs";
import { AiFillHome, AiOutlinePlusSquare, AiOutlineHeart } from "react-icons/ai";
import { TbBrandMessenger } from "react-icons/tb";
import { TiCompass } from "react-icons/ti";



export const HeaderContainer = () => {
  const [isValue,setIsValue] =useState(true)
  const handleInput = (e) =>{
      if(e.target.value){
        setIsValue(false)
      }
      else{
        setIsValue(true)
      }
  }
  return (
    <header>
      <div className='header '>
        <div className="header-logo">
          <Link to={ROUTE.LOGIN}>
            <img src="https://clipart.info/images/ccovers/1522452762Instagram-logo-png-text.png" alt="" />
          </Link>

        </div>
        <div className="header-right">
          <div className="header-search">
           <input onChange={handleInput} type="text" id='search'/>
            < BsSearch className='icon-search'/>
            
          { isValue && <label htmlFor="search">Tìm kiếm</label>}
          </div>
          <div className="nav">
            <ul className='navbar'>
              <li className='navbar-item'>
                <AiFillHome className='icon-header' />
              </li>
              <li className='navbar-item'>
                <TbBrandMessenger className='icon-header' />
              </li>
              <li className='navbar-item'>
                <AiOutlinePlusSquare className='icon-header' />
              </li>
              <li className='navbar-item'>
                <TiCompass className='icon-header' />
              </li>
              <li className='navbar-item'>
                <AiOutlineHeart className='icon-header' />
              </li>
              <li className='navbar-item'>
                <img className='user-header' src={require(`../../img/user.jpg`)} alt="" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}
