import { Button, Input, Modal, Form } from "antd";
import { useState } from "react";

export default function AuthModal({ open, setOpen }) {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [form] = Form.useForm();

  const handleCancel = () => {
    setOpen(false);
  };

  const handleSubmitForm = async (values) => {
    console.log(values);
  };

  return (
    <Modal
      title="User login"
      open={open}
      onOk={() => form.submit()}
      centered
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
      okText="Login"
      okButtonProps={{
        style: {
          backgroundColor: "#eee",
          borderColor: "#87cefa",
          color: "#000",
        },
      }}
    >
      <Form
        name="login"
        form={form}
        layout="vertical"
        autoComplete="off"
        onFinish={handleSubmitForm}
      >
        <Form.Item
          label="Usuario"
          name={"email"}
          rules={[
            {
              required: true,
              message: "O nome é requerido",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Senha"
          name={"password"}
          rules={[
            {
              required: true,
              message: "A senha é requerida",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <p>
          N&atilde;o tem conta?
          <Button type="link">Criar sua conta</Button>
        </p>
      </Form>
    </Modal>
  );
}
