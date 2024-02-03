/** @format */

import Layout from "@/Components/Layout";
import { Form, Input, message } from "antd";
import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import PrimaryButton from "../Components/PrimaryButton";

const Login = () => {
  const router = useRouter();

  const [loginForm] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);

  const onFinish = async (values) => {
    try {
      setIsLoading(true);
      const response = await axios.post(
        "http://localhost:3000/auth/login",
        values
      );

      if (response) {
        console.log("response", response);
        message.success("Login Successful");
        if (typeof window !== "undefined") {
          localStorage.setItem("token", response.data?.token);
          localStorage.setItem("email", values.email);
          localStorage.setItem("userId", response.data?.userId);
        }

        setIsLoading(false);
        setTimeout(() => {
          router.push("/");
        }, 1000);
      } else {
        setIsLoading(false);
        message.destroy();
        toast.error("Something went wrong");
      }
    } catch (error) {
      setIsLoading(false);
      message.destroy();
      message.error(error.response?.data?.message);
      //   dispatch(HideLoading());
      console.log(error);
    }
  };

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Layout>
        <section>
          <div className="bg_enquiry pt-50 pb-50">
            <div className="container text-center">
              <div className="bbb-wrapper fl-wrap text-start">
                <div className="subcribe-form fl-wrap">
                  {/* <p class="text-center text-dark fs-6 fw-bold">Please Send us email for more details, we will contact you:

                  </p> */}
                  <Form
                    onFinish={onFinish}
                    layout={"vertical"}
                    form={loginForm}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <h1 style={{ marginBottom: "9px", fontSize: "32px" }}>
                        Please Enter Your Credentials !
                      </h1>
                    </div>
                    <div className="row gx-4 gy-3 align-items-center justify-content-center">
                      <div className="col-md-7">
                        <div className="row g-2">
                          <div className="col-md-12">
                            <Form.Item
                              label="Email"
                              name="email"
                              rules={[
                                {
                                  required: true,
                                  message: "Please input your Email",
                                },
                              ]}
                            >
                              <Input
                                className="form-control border"
                                placeholder="Please Enter Your Email"
                              />
                            </Form.Item>
                          </div>
                          <div className="col-md-12">
                            <Form.Item
                              label="Password"
                              name="password"
                              rules={[
                                {
                                  required: true,
                                  message: "Please input your Password",
                                },
                              ]}
                            >
                              <Input.Password
                                style={{ height: "44px" }}
                                className="f border"
                                placeholder="Please enter your Password"
                              />
                            </Form.Item>
                          </div>

                          <div className="col-md-12">
                            <PrimaryButton
                              width="30%"
                              loading={isLoading}
                              htmlType="submit"
                              text="Login"
                            ></PrimaryButton>
                          </div>
                          <div
                            style={{ display: "flex", justifyContent: "end" }}
                          >
                            {" "}
                            Dont have an account ?{"  "}
                            <Link href="/register" style={{ color: "red" }}>
                              {" "}
                              Register now!
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Login;
