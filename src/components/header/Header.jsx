import React, { useState } from "react";
import "./Header.css";
import profile from "../../assets/user.svg";
import { LogoutOutlined, LoginOutlined } from "@ant-design/icons";
import AuthModal from "../modals/AuthModal";

export default function Header() {
  const [logged, setLogged] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpenAuthModal = () => {
    setOpen(true);
  };
  return (
    <header>
      <div className="logo">
        <h1>Forum</h1>
      </div>
      <div className="right">
        {/* <img src={profile} alt="User profile" />
        <div className="user-info">
          <span>Amikel Maxi</span>
          <p>@amikel14</p>
        </div>
        <div className="logout">
          <LogoutOutlined />
        </div> */}

        <div className="login" onClick={handleOpenAuthModal}>
          <LoginOutlined /> <span>Login</span>
        </div>
      </div>
      <AuthModal open={open} setOpen={setOpen} />
    </header>
  );
}
