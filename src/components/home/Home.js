import React from 'react'
import "./Home.css";
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from "../../components/feed/Feed";
import Widgets from "../../components/widgets/Widgets";
import Login from "../../components/login/Login";
import { useStateValue } from "../../StateProvider";


function Home() {
    const [{ user }, dispatch] = useStateValue();

  return (
    <div className="Home">

      {!user ? (
        <Login />
      ) : (
        <>
      {/* Header */}
   <Header />

     {/* App Body */}
     <div className="Home__body">
       
      {/* Sidebar */}
      <Sidebar />
      
          {/* Feed */}
          <Feed />
          {/* Widgets */}
          <Widgets />
     </div>
     </>
  )}
        
    </div>
  );
}

export default Home