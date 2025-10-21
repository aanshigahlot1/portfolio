import React,{useState} from 'react'
import Home from '../../pages/Home/Home';
import { MdKeyboardDoubleArrowLeft ,MdKeyboardDoubleArrowRight } from "react-icons/md";
import './Layout.css';
import Menus from '../Menus/Menus';
const Layout = () => {

  const[toggle,setToggle]=useState(true);

  const handleToggle=()=>{
    setToggle(!toggle);
  };
  return (
    <>
      <div className="sidebar-section">
      <div className={toggle ?"sidebar-toggle":"sidebar"}>
      <div className="sidebar-toggle-icons">
        <Menus toggle={toggle}/>
      <p onClick={handleToggle}>
  {toggle ? (
    <MdKeyboardDoubleArrowRight size={30} color="#100f0fff" />
  ) : (
    <MdKeyboardDoubleArrowLeft size={30} color="#100f0fff" />
  )}
</p>

      </div>    
      </div>
      <div className="container">
        <Home/>
        </div>
        </div>
     </>
  )
}

export default Layout
