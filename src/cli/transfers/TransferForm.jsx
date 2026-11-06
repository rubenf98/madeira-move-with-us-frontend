import React, { useState } from "react";
import styled from "styled-components";
import { colors, PrimaryButton, SectionContainer } from "../../styles";
import {
  Button,
  Row,
  Col,
  Form,
  Input,
  Space,
  Select,
  InputNumber,
  DatePicker,
  TimePicker,
} from "antd";

const Container = styled(SectionContainer)`
  position: relative;
  padding: 50px 0px 0px 0px;
  box-sizing: border-box;
  .background {
    position: absolute;
    top: 0;
    left: -1000px;
    z-index: -1;
    width: 300vw;
    height: 100%;
    background-color: ${colors.lightPrimary};
  }
`;

const Contact = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  h3 {
    font-size: clamp(20px, 3vw, 30px);
    margin-bottom: 5px;
  }

  p {
    margin-bottom: 0px;
  }

  button {
    border-radius: 12px;
    color: ${colors.primary};
    background-color: ${colors.lightPrimary};

    box-sizing: border-box;
    font-weight: bold;
    border: 2px solid ${colors.primary};
    padding: 10px 20px;
    box-shadow: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    font-size: clamp(16px, 3vw, 18px);
    font-weight: bold;

    img {
      height: 20px;
    }
  }
`;

export const FormContainer = styled.section`
  margin-top: 100px;
  background-color: #f9faf5;
  padding: 50px;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;

  h3 {
    font-size: clamp(28px, 3vw, 50px);
    text-align: center;
  }

  button {
    border: 0px;
    background-color: transparent;
    box-shadow: 0px;
    cursor: pointer;

    img {
      height: 100%;
    }
  }
`;
const PhoneInput = ({ id, value = {}, onChange }) => {
  const [prefix, setPrefix] = useState("86");
  const [phone, setPhone] = useState("");
  const triggerChange = (changedValue) => {
    onChange?.({ ...value, ...changedValue });
  };
  const onPrefixChange = (newPrefix) => {
    if (!("prefix" in value)) {
      setPrefix(newPrefix);
    }
    triggerChange({ prefix: newPrefix });
  };
  const onPhoneChange = (e) => {
    const newPhone = e.target.value;
    if (!("phone" in value)) {
      setPhone(newPhone);
    }
    triggerChange({ phone: newPhone });
  };
  return (
    <span id={id}>
      <Space.Compact block>
        <Select
          value={value.prefix || prefix}
          onChange={onPrefixChange}
          style={{ width: 100 }}
          options={[
            { label: "+86", value: "86" },
            { label: "+351", value: "351" },
          ]}
        />
        <Input
          value={value.phone || phone}
          onChange={onPhoneChange}
          style={{ width: "100%" }}
        />
      </Space.Compact>
    </span>
  );
};
function TransferForm() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const timeOptions = Array.from({ length: 96 }, (_, i) => {
    const hours = String(Math.floor(i / 4)).padStart(2, "0");
    const minutes = String((i % 4) * 15).padStart(2, "0");
    const time = `${hours}:${minutes}`;

    return { label: time, value: time };
  });

  return (
    <Container>
      <div className="background" />

      <Contact>
        <div>
          <h3>Other destinations?</h3>
          <p>Talk with us for custom transfers anywhere on the island</p>
        </div>
        <PrimaryButton>
          Book now
          <img src="/icons/arrow.svg" alt="arrow"></img>
        </PrimaryButton>
      </Contact>

      <FormContainer>
        <h3>Reserve your transfer Today</h3>

        <Form
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          initialValues={{
            phone: { prefix: "351" },
            time: "09:00",
          }}
          variant="outlined"
          layout="vertical"
        >
          <Row gutter={16}>
            <Col span={8}>
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: "Please input your name!" }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
              >
                <Input type="email" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                name="phone"
                label="Phone Number"
                rules={[
                  {
                    required: true,
                    message: "Please input your phone number!",
                  },
                ]}
              >
                <PhoneInput />
              </Form.Item>
            </Col>

            <Col span={8}>
              <Form.Item
                label="Pickup Address"
                name="pickup"
                rules={[
                  {
                    required: true,
                    message: "Please input your pickup address!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Destination Address"
                name="destination"
                rules={[{ required: true, message: "Please input your name!" }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Number Of Passengers"
                name="passengers"
                rules={[{ required: true, message: "Please input your name!" }]}
              >
                <InputNumber min={1} style={{ width: "100%" }} />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Transfer Date"
                name="date"
                rules={[{ required: true, message: "Please input your name!" }]}
              >
                <DatePicker style={{ width: "100%" }} />
              </Form.Item>
            </Col>

            <Col span={8}>
              <Form.Item
                label="Transfer Time"
                name="time"
                rules={[{ required: true, message: "Please input your name!" }]}
              >
                <Select options={timeOptions} style={{ width: "100%" }} />
              </Form.Item>
            </Col>
          </Row>

          <Row justify="end">
            <Form.Item label={null}>
              <button htmlType="submit">
                <img
                  className="arrow"
                  src="/icons/primary_arrow.svg"
                  alt="arrow"
                />
              </button>
            </Form.Item>
          </Row>
        </Form>
      </FormContainer>
    </Container>
  );
}

export default TransferForm;
