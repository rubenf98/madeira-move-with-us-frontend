import React from "react";
import { useParams } from "react-router-dom";
import { colors, SectionContainer } from "../../styles";
import styled from "styled-components";
import ServiceHeader from "../common/ServiceHeader";
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
import PhoneInput from "../common/PhoneInput";

const Container = styled(SectionContainer)`
  position: relative;
  display: flex;
  justify-content: space-between;
  gap: 50px;

  .info-container {
    width: 60%;
  }

  .form-container {
    width: 40%;
    position: sticky;
    top: 0;
    background-color: ${colors.lightPrimary};
    padding: 30px;
    box-sizing: border-box;
    border-radius: 20px;
  }
`;

const transfer = {
  id: 1,
  image: "/Rectangle 19.png",
  title: "Aeroporto - Funchal",
  price: 30,
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. ",
};

function TransferProduct() {
  const { id } = useParams();

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
    <div>
      <ServiceHeader images={[transfer.image]} />
      <Container>
        <div className="info-container">
          <div>saljdh</div>
        </div>

        <div className="form-container">
          <h3>Book Your Transfer</h3>
          <p>
            Experience the pinnacle of luxury and innovation at Madeira Island
          </p>

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
              <Col span={24}>
                <Form.Item
                  name="name"
                  rules={[
                    { required: true, message: "Please input your name!" },
                  ]}
                >
                  <Input size="large" placeholder="Name" />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: "Please input your email!" },
                  ]}
                >
                  <Input size="large" type="email" placeholder="Email" />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item
                  name="phone"
                  rules={[
                    {
                      required: true,
                      message: "Please input your phone number!",
                    },
                  ]}
                >
                  <PhoneInput size="large" placeholder="Phone Number" />
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item
                  name="pickup"
                  rules={[
                    {
                      required: true,
                      message: "Please input your pickup address!",
                    },
                  ]}
                >
                  <Input size="large" placeholder="Pickup Address" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="destination"
                  rules={[
                    { required: true, message: "Please input your name!" },
                  ]}
                >
                  <Input size="large" placeholder="Destination Address" />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item
                  name="passengers"
                  rules={[
                    { required: true, message: "Please input your name!" },
                  ]}
                >
                  <InputNumber
                    size="large"
                    placeholder="Number Of Passengers"
                    min={1}
                    style={{ width: "100%" }}
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="date"
                  rules={[
                    { required: true, message: "Please input your name!" },
                  ]}
                >
                  <DatePicker
                    size="large"
                    placeholder="Transfer Date"
                    style={{ width: "100%" }}
                  />
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item
                  name="time"
                  rules={[
                    { required: true, message: "Please input your name!" },
                  ]}
                >
                  <Select
                    size="large"
                    placeholder="Transfer Time"
                    options={timeOptions}
                    style={{ width: "100%" }}
                  />
                </Form.Item>
              </Col>
            </Row>

            <Row justify="end">
              <Form.Item placeholder={null}>
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
        </div>
      </Container>
    </div>
  );
}

export default TransferProduct;
