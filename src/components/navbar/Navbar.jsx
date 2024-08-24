import React, { useState } from "react";
import "./Navbar.css";
import { PlusOutlined } from "@ant-design/icons";
import { menu } from "../../views/menu";
export default function Navbar() {
  const [selectedMenu, setSelectedMenu] = useState(null);

  let handleSelectedMenu = (item) => {
    //console.log(id);
    setSelectedMenu(item.id);
    console.log(item.id);
  };
  return (
    <nav className="main-nav">
      <div className="main-time">
        <span className="hrs">02</span>:<span className="mns">53</span>:
        <span className="sec">42</span>
      </div>
      <ul>
        <li className="btn-add">
          <span className="icono">
            <PlusOutlined />
          </span>
          <span>Nova pergunta</span>
        </li>

        {menu.map((item) => (
          <li
            key={item.id}
            onClick={() => handleSelectedMenu(item)}
            className={selectedMenu === item.id ? "active" : "menu"}
          >
            <span className="icono">{item.icon}</span>
            <span>{item.title}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}
