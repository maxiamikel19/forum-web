import React from "react";
import { EditOutlined, CommentOutlined } from "@ant-design/icons";
import "./Post.css";
import avatar from "../../assets/user.png";
import { Link } from "react-router-dom";
import VBadge from "../badge/VBadge";

export default function Post() {
  return (
    <div className="post">
      <div className="post-header">
        <h1>
          Post titulo Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Deleniti assumenda laudantium. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Deleniti assumenda laudantium
        </h1>
        <div className="header-metadata">
          <VBadge />
          <p>
            <span>Data:</span>
            <span>12/08/2024: 08:09:00</span>
          </p>
        </div>
      </div>

      <div className="user-perfil">
        <div className="user-foto">
          <img src={avatar} alt={"Amikel Maxi"} />
        </div>
        <div className="user-metadata">
          <p className="name">Amikel Maxi</p>
          <p className="username">@amikel-14</p>
        </div>
      </div>
      <div className="post-text">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
          debitis facereemque quidem? Delectus, temporibus!
        </p>
      </div>
      <div className="actions">
        <Link to={""}>
          <EditOutlined />
          <span>Editar</span>
        </Link>

        <Link>
          <CommentOutlined />
          <span>Comentar</span>
        </Link>
      </div>
    </div>
  );
}
