import { UploadOutlined } from "@ant-design/icons";
import { Button, Input, Modal, Form, Upload } from "antd";
import { useState } from "react";
import "./AuthModal.css";

export default function AuthModal({ open, setOpen }) {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [form] = Form.useForm();
  const [changeForm, setChangeForm] = useState(1);

  const handleSetLoginForm = () => {
    setChangeForm(1);
  };

  const handleSetRegisterForm = () => {
    setChangeForm(2);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleSubmitForm = async (values) => {
    console.log(values);
  };

  return (
    <Modal
      title={
        <span style={{ color: "#1C1C1C" }}>
          {changeForm === 1 ? "Login de usuario" : "Cadastro de usuario"}
        </span>
      }
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
        {changeForm === 1 && (
          <>
            <Form.Item
              label="Usuario"
              name={"email"}
              rules={[
                {
                  required: true,
                  message: "O usuario é requerido",
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
              <Button type="link" onClick={handleSetRegisterForm}>
                Criar sua conta
              </Button>
            </p>
          </>
        )}

        {changeForm === 2 && (
          <>
            <Form.Item
              label="Nome conpleto"
              name={"name"}
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
              label="Usuario"
              name={"username"}
              rules={[
                {
                  required: true,
                  message: "O usuario é requerido",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item label="Foto do perfil" name="foto">
              <Upload listType="picture" name="foto">
                <Button icon={<UploadOutlined />}>Subir a foto</Button>
              </Upload>
            </Form.Item>
            <Form.Item
              label="Email"
              name={"email"}
              rules={[
                {
                  required: true,
                  message: "O Email é requerido",
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
              J&aacute; tem uma conta?
              <Button type="link" onClick={handleSetLoginForm}>
                Entre
              </Button>
            </p>
          </>
        )}
      </Form>
    </Modal>
  );
}
