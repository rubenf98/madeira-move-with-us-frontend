import React, { useEffect } from "react";
import styled from "styled-components";
import Row from "antd/es/row";
import Form from "antd/es/form";
import Input from "antd/es/input";
import Col from "antd/es/col";
import { dimensions } from "../helpers";
// import axios from "axios";
import { colors, PrimaryButton, SectionContainer } from "../styles";
import TextArea from "antd/es/input/TextArea";

const Container = styled(SectionContainer)`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-wrap: wrap;
  position: relative;
`;

const ContactForm = styled(Form)`
  width: 100%;
`;

const FormContainer = styled(Row)`
  width: 40%;

  .ant-col {
    width: 100%;
  }
`;

const Title = styled.div`
  width: 60%;

  h1 {
    font-weight: 500;
    font-size: clamp(30px, 4vw, 50px);
    margin-top: 0px;

    span {
      font-weight: 900;
      color: ${(props) => props.underlineColor};
    }
  }

  p {
    font-size: 18px;
    margin: 0px 0px 5px 0px;

    a {
      text-decoration: none;
      color: inherit;
    }
  }
`;

const InfoContainer = styled.div`
  width: 100%;
  position: absolute;
  justify-content: flex-end;
  bottom: 20px;
  display: flex;
  flex-wrap: wrap;

  h3 {
    font-weight: bold;
    font-size: 1.6em;
    margin: 0px;
  }

  @media (max-width: ${dimensions.md}) {
    display: none;
  }
`;

const Logo = styled.a`
  width: 40px;
  height: 40px;
  margin-left: 10px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:first-child {
    margin: 0px;
  }

  img {
    width: 100%;
  }
`;

const ButtonContainer = styled.div`
  margin: 20px 0px;
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const rules = {
  name: [
    {
      required: true,
      message: "Por favor introduza o seu nome!",
    },
  ],
  email: [
    {
      required: true,
      message: "Por favor introduza o seu email!",
    },
    {
      type: "email",
      message: "O email não é válido",
    },
  ],
  message: [
    {
      required: true,
      message: "Por favor introduza a sua mensagem!",
    },
  ],
};

function Contact() {
  const [form] = Form.useForm();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onFinish = () => {
    form
      .validateFields()
      .then((values) => {
        // axios.post(`${window.location.origin}/api/contact`, values);

        setTimeout(() => {
          form.resetFields();
        }, 300);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Container>
        <Title underlineColor={colors.primary}>
          <h1>
            <span>Coloque as suas questões.</span> <br />
            Responderemos o mais brevemente possível
          </h1>

          <div>
            <p>Tel. +351 123 123 123</p>
            <p>
              <a href="mailto:geral@madeiramovewithus.com">
                geral@madeiramovewithus.com
              </a>
            </p>
          </div>
        </Title>
        <FormContainer type="flex" justify="space-between" align="middle">
          <ContactForm
            requiredMark={false}
            name="basic"
            layout="vertical"
            form={form}
          >
            <Row gutter={16}>
              <Col md={24}>
                <Form.Item name="name" rules={rules.name}>
                  <Input placeholder="Nome" size="large" />
                </Form.Item>
              </Col>
              <Col md={24}>
                <Form.Item name="email" rules={rules.email}>
                  <Input placeholder="Endereço de email" size="large" />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item name="message" rules={rules.message}>
              <TextArea
                placeholder="Escreva aqui a sua mensagem..."
                size="large"
                maxLength={180}
              />
            </Form.Item>
          </ContactForm>

          <ButtonContainer>
            <PrimaryButton onClick={onFinish}>
              <span>Submit</span>
            </PrimaryButton>
          </ButtonContainer>
        </FormContainer>
      </Container>
    </>
  );
}

export default Contact;
