import React, { useState } from "react";
import "./Navbar.css";
import { PlusOutlined } from "@ant-design/icons";
import { menu } from "../../views/menu";
import PostModal from "../modals/PostModal";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [open, setOpen] = useState(false);

  let handleSelectedMenu = (item) => {
    //console.log(id);
    setSelectedMenu(item.id);
    //console.log(item.id);
  };

  const handleOpenModal = () => {
    setOpen(true);
  };
  return (
    <nav className="main-nav">
      <div className="main-time">
        <span className="hrs">02</span>:<span className="mns">53</span>:
        <span className="sec">42</span>
      </div>
      <ul>
        <li className="btn-add" onClick={handleOpenModal}>
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
            <Link to={item.path}>
              <span className="icono">{item.icon}</span>
              <span className="menu-label">{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
      <PostModal open={open} setOpen={setOpen} />
    </nav>
  );
}
