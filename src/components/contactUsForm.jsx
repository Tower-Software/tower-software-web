import React, { useState, useRef } from 'react'
import { Form, Button, Select, Input, Spin, Result } from 'antd'
import { LoadingOutlined } from '@ant-design/icons';
import TextArea from 'antd/es/input/TextArea';
import { EMAIL_SERVICE_ID, EMAIL_SERVICE_TEMPLATE, EMAIL_SERVICE_PUBLIC_KEY } from '../config/app.config';
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import '../styles/contactUsForm.scss';

const { Option } = Select;

const ContactUsForm = () => {
  const [loading, setLoading] = useState(false);
  const [emailSendedOk, setEmailSendedOk] = useState(null);
  const [recaptcha, setRecaptcha] = useState(null);
  const refCaptcha = useRef();

  const onFinish = ({ name, email, service, message }) => {
    setLoading(true);
    
    const subject = `${name} for ${service}`
    
    const sendMessage = async () => {
      try {
        const params = {
          'g-recaptcha-response': recaptcha,
          from_name: subject,
          message: 
          `
            ${message} 
            
            EMAIL: ${email}
          `,
        }

        await emailjs.send(EMAIL_SERVICE_ID, EMAIL_SERVICE_TEMPLATE, params, EMAIL_SERVICE_PUBLIC_KEY);    
        refCaptcha.current.reset();
        setRecaptcha(null);
        setEmailSendedOk(true);
      } catch (_) {
        setEmailSendedOk(false);
      } finally {
        setLoading(false);
      }
    }
    
    sendMessage();
  }

  return (
    <>
      {
      emailSendedOk === false &&
        <Result 
          status="error" 
          title="An error ocurred trying to send this message, please try later."
          extra={[ <Button children="Try again" onClick={() => setEmailSendedOk(null)}/> ]}
        /> 
      }
      {emailSendedOk === true && <Result status="success" title="Message sent successfully." />}
      <Spin tip="Sending message..." indicator={<LoadingOutlined />} spinning={loading} className="formSpin">
        <Form
          hidden={emailSendedOk !== null}
          name="contactUs"
          className="contactUsForm"
          onFinish={(values) => onFinish(values)}
        >
          <Form.Item 
            name="name"
            rules={[ { required: true, message: 'Please input your full name.' } ]}
          >
            <Input placeholder="Full Name" size="large" />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[
              { required: true, message: 'Please input your email.' },
              { type: "email", message: "Please input a valid email." }
            ]}
          >
            <Input placeholder="Email" size="large" />
          </Form.Item>

          <Form.Item name="service" rules={[ { required: true, message: 'Please input the service.' } ]}>
            <Select placeholder="Service" size="large">
              <Option value="App Development" />
              <Option value="Software Development" />
              <Option value="Web Development" />
              <Option value="Business Inteligence" disabled/>
            </Select>
          </Form.Item>

          <Form.Item name="message">
            <TextArea placeholder="Message" size="large" />
          </Form.Item>

          <Form.Item 
            extra={[ <Input value={recaptcha} style={{ display: "none" }} /> ]} 
            name="recaptcha" 
            rules={[ { required: true, message: 'Solve the recaptcha.' } ]}
          >
            <ReCAPTCHA
              ref={refCaptcha}
              sitekey="6LcIsvQnAAAAAEYMdTiAxzTIwsMDu0H9bDWQwSA8"
              onChange={token => setRecaptcha(token)}
            />
          </Form.Item>

          <Form.Item>
            <Button htmlType="submit">Send</Button>
          </Form.Item>
          
        </Form>
      </Spin>
    </>
  );
};

export default ContactUsForm