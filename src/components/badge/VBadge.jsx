import { useState } from "react";
import { Badge, Space, Avatar, FloatButton } from "antd";

import "./VBadge.css";
export default function Post() {
  const [show, setShow] = useState(true);
  return (
    <>
      <Badge
        className="site-badge-count-109"
        count={15}
        cstyle={{
          backgroundColor: "#52c41a",
        }}
      >
        <p className="comentary">Comentarios</p>
      </Badge>
    </>
  );
}
