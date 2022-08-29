import React,{ useState } from 'react'
import { BsFillPersonFill } from 'react-icons/bs';
import { AiFillStar } from "react-icons/ai";
import { IoDocumentTextSharp } from "react-icons/io5";
import { AppContext } from '../context/AppContext'
import { useNavigate } from "react-router-dom";

const Menu = () => {
  // const { currentMenu, changeMenu} =useContext(AppContext)
  let navigate = useNavigate();
  let linkLocation= window.location.href.slice(22,);
  // var currentMenu='invoices';

  var section='customers';
  if (linkLocation=='view-customer' || linkLocation=='add-customer'){
    section='customers';
  }else if (linkLocation=='view-item' || linkLocation=='add-item' ){
    section='items';
  }else if (linkLocation=='view-invoice' || linkLocation=='add-invoice'){
    section='invoices';
  }
  const [currentMenu, changeMenu] = useState(section)
  // console.log("Link of Page ",linkLocation);

  const menuHandler = (menu) =>{
    // console.log({menu});
    changeMenu(menu);
    switch (menu){
      case "customers":
        navigate("/view-customer")
        break;
      case "items":
        navigate("/view-item")
        break;
      case "invoices":
        navigate("/view-invoice")
        break;
      default :
        alert("Error while accessing menu.")
    }
  }
  // const str = '${currentMenu === "customer" ? "-selected" : "-notselected"}'

  return (
    <div className="menu">
      <div  className={`menu-item ${(currentMenu === "customers") ? " menu-selected ":" menu-notselected "}`} onClick={()=>menuHandler("customers")}>
            <p><BsFillPersonFill/> &emsp; Customers</p>

      </div>
      <div className={`menu-item ${currentMenu === "items" ? " menu-selected " : " menu-notselected "}`} onClick={()=>menuHandler("items")}>
            <p><AiFillStar/> &emsp; Items</p>
      </div>
      <div  className={`menu-item ${currentMenu === "invoices" ? " menu-selected " : " menu-notselected "}`} onClick={()=>menuHandler("invoices")}>
            <p><IoDocumentTextSharp/> &emsp; Invoices</p>
      </div>
    </div>
  )
}

export default Menu