import React from 'react'
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsOutlinedIcon from 
"@material-ui/icons/SubscriptionsOutlined";
import StorefrontOutlinedIcon from 
"@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleIcon from 
"@material-ui/icons/SupervisedUserCircle";
import { Avatar, IconButton } from 
"@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from 
"@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useStateValue } from "../../StateProvider";
import { 
  Link
 } from "react-router-dom"




function Header() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="header">
     
      <div className="header__left">
        <img 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKGHysrAK77B9pbXCoFfQ7zNGTR7Jq9QtRKA&usqp=CAU"
        alt="Logo" />

        <div className="header__input">
          <SearchIcon />
          <input type="text" placeholder="Search Facebook..." />
        </div>
      </div>
    
      <div className="header__middle">

        <div className="header__option
        header__option--active">
          <Link className="Nav" to="/">
            <HomeIcon className="MuiSvgIcon-root" fontSize="large" />
            </Link>
      </div>

      <div className="header__option ">
            <FlagIcon className="MuiSvgIcon-root" fontSize="large" />
      </div>


      <div className="header__option">
            <SubscriptionsOutlinedIcon className="MuiSvgIcon-root" fontSize="large" />
      </div>

      <div className="header__option">
            <StorefrontOutlinedIcon className="MuiSvgIcon-root" fontSize="large" />
      </div>


      <div className="header__option">
          {/* <Link className="Nav" to="/profiles"> */}
            <SupervisedUserCircleIcon className="MuiSvgIcon-root" fontSize="large" />
            {/* </Link> */}
              
      </div>
      </div>

      <div className="header__right">

        <div className="header__info">
        <Link className="Nav" id="profile__Link" to="/profiles">
          <Avatar src={user.photoURL} />
          <h4>{user.displayName}</h4>
          </Link>
        </div>

        <IconButton style={{color: "white",}}>
          <AddIcon />
        </IconButton>
        <IconButton style={{color: "white",}} >
          <ForumIcon />
        </IconButton>
        <IconButton style={{color: "white",}} >
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton style={{color: "white",}} >
          <ExpandMoreIcon />
        </IconButton>
      </div>
      
    



      
    </div>
    
  )
}

export default Header