import { useState } from "react";
import { Button, Modal, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";

export default function PostModal({ open, setOpen }) {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
  };

  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <Modal
      title="Nova pergunta"
      open={open}
      onOk={() => form.submit()}
      centered
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
    >
      <Form
        name="formPergunta"
        onFinish={onFinish}
        layout="vertical"
        form={form}
      >
        <Form.Item
          label="Titulo da pergunta"
          name="titulo"
          rules={[
            {
              required: true,
              message: "Defina o titulo da pergunta",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Descrição da pergunta"
          name="descricao"
          rules={[
            {
              required: true,
              message: "Uma desctição é requerida para a sua pergunta",
            },
          ]}
        >
          <Input.TextArea placeholder="Descrição" rows={10} />
        </Form.Item>
      </Form>
    </Modal>
  );
}
