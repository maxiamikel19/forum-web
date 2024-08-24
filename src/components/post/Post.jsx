import React from "react";
import { EditOutlined, CommentOutlined } from "@ant-design/icons";
import "./Post.css";
import avatar from "../../assets/user.png";
import { Link } from "react-router-dom";

export default function Post() {
  return (
    <div className="post">
      <h1>Post titulo</h1>
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
