import React,{ useContext } from 'react'
import { BsFillPersonFill } from 'react-icons/bs';
import { AiFillStar } from "react-icons/ai";
import { IoDocumentTextSharp } from "react-icons/io5";
import { AppContext } from '../context/AppContext'

const Menu = () => {
  const { currentMenu, changeMenu} =useContext(AppContext)

  const menuHandler = (menu) =>{
    // console.log({menu});
    changeMenu(menu);
  }
  // const str = '${currentMenu === "customer" ? "-selected" : "-notselected"}'

  return (
    <div className="menu">
        <div className={`menu-item ${(currentMenu === "customers") ? " menu-selected ":" menu-notselected "}`} onClick={()=>menuHandler("customers")}>
            <p><BsFillPersonFill/> &emsp; Customers</p>
        </div>
        <div className={`menu-item menu${currentMenu === "items" ? "menu-selected" : "menu-notselected"}`} onClick={()=>menuHandler("items")}>
            <p><AiFillStar/> &emsp; Items</p>
        </div>
        <div className={'menu-item menu${currentMenu === "customers" ? "menu-selected" : "menu-notselected"}'} onClick={()=>menuHandler("customers")}>
            <p><IoDocumentTextSharp/> &emsp; Invoices</p>
        </div>
    </div>
  )
}

export default Menu