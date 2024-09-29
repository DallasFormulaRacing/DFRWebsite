"use client";
import { Space, Form, Input } from "antd";
const { TextArea } = Input;

type FormValues = {
  name: string;
  email: string;
  message: string;
};

export default function Page() {
  return (
    <main className="min-h-full bg-wh-900 flex flex-col justify-center items-center text-white text-center p-4 md:px-48">
      <Space direction="vertical" size="large">
        <h1 className="text-5xl sm:text-8xl font-bold">Get in Touch</h1>
        <div>
          <p className="text-xl">
            Want to learn more about Dallas Formula Racing? Interested in
            becoming a sponsor?
          </p>
          <p className="text-xl">We would love to hear from you!</p>
        </div>

        <p className="text-xl">Visit: ECSW 1.455</p>
        <p className="text-xl">Email: dallasformularacing@gmail.com</p>
      </Space>

      <Form className="w-full p-2 md:w-2/3 mt-16">
        <h2 className="text-xl font-bold text-white my-8">Message Us</h2>
        <div className="flex flex-col md:gap-24 md:flex-row">
          <Form.Item
            className="w-full md:w-1/2"
            name="name"
            rules={[
              {
                required: true,
                message: "Please enter your name",
              },
            ]}>
            <Input className="p-4" placeholder="Name" />
          </Form.Item>
          <Form.Item
            className="w-full md:w-1/2"
            name="email"
            rules={[
              {
                required: true,
                message: "Please enter your email",
              },
            ]}>
            <Input className="p-4" placeholder="Email" type="email" />
          </Form.Item>
        </div>
        <Form.Item name="message">
          <TextArea rows={8} allowClear placeholder="Message" />
        </Form.Item>
        <button className="bg-accent-green text-wh-0 text-xl font-semibold w-40 h-12 rounded-md mt-8">
          Send
        </button>
      </Form>
    </main>
  );
}
