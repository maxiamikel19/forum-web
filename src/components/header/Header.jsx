import React, { useState } from "react";
import "./Header.css";
import profile from "../../assets/user.svg";
import { LogoutOutlined, LoginOutlined } from "@ant-design/icons";

export default function Header() {
  const [logged, setLogged] = useState(false);
  return (
    <header>
      <div className="logo">
        <h1>Forum</h1>
      </div>
      <div className="right">
        <img src={profile} alt="User profile" />
        <div className="user-info">
          <span>Amikel Maxi</span>
          <p>@amikel14</p>
        </div>
        <div className="logout">
          <LogoutOutlined />
        </div>

        {/* <div className="login">
          <LoginOutlined /> <span>Login</span>
        </div> */}
      </div>
    </header>
  );
}
