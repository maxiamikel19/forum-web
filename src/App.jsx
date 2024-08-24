import React, { useState } from "react";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import { KeyOutlined, LockOutlined } from "@ant-design/icons";

export default function App() {
  const [isLogged, setIsLogged] = useState(true);
  return (
    <>
      <Header />

      <main>
        {isLogged ? (
          <>
            <Navbar />
            <div className="main-views">
              <Outlet />
            </div>
          </>
        ) : (
          <div className="welcome">
            <div className="box">
              <LockOutlined />
            </div>
          </div>
        )}
      </main>
    </>
  );
}
