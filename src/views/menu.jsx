import {
  PlusOutlined,
  MessageOutlined,
  SisternodeOutlined,
  WechatFilled,
  QuestionOutlined,
} from "@ant-design/icons";

export const menu = [
  {
    id: 1,
    title: "Todas as perguntas",
    icon: <QuestionOutlined />,
    path: "/",
  },
  {
    id: 2,
    title: "Minhas perguntas",
    icon: <SisternodeOutlined />,
    path: "/minhas-perguntas",
  },
  {
    id: 3,
    title: "Minhas respostas",
    icon: <MessageOutlined />,
    path: "/minhas-respostas",
  },
];
