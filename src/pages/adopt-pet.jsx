/** @format */

import Layout from "@/Components/Layout";
import { Form, Input, message } from "antd";
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import PrimaryButton from "../Components/PrimaryButton";

const EnquireNow = () => {
  const [adoptForm] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { petId, title, image, age, description , breed, gender, species} = router.query;

  const onFinish = async (values) => {
    try {
      setIsLoading(true);

      const response = await axios.post(
        "http://localhost:3000/form/adoptionForm",
        {
          ...values,
          petId: petId,
          userId: localStorage.getItem("userId"),
        },
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response) {
        message.destroy();
        setIsLoading(false);
        message.success(response.data?.message);
        adoptForm.resetFields();
      } else {
        setIsLoading(false);
        message.destroy();
        toast.error("Something went wrong");
      }
    } catch (error) {
      setIsLoading(false);
      message.destroy();
      message.error("Something went wrong");
      //   dispatch(HideLoading());
      console.log(error);
    }
  };
  return (
    <>
      <Head>
        <title>Adopt Pet</title>
      </Head>
      <Layout>
        <section>
          <div className="bg_enquiry pt-50 pb-50">
            <div className="container text-center">
              <img
                src={`http://localhost:3000/uploads/${image}`}
                alt=""
                width="100px"
              />
              <h1 className="fw-bold " style={{ fontSize: "55px" }}>
                {title}
              </h1>
              <p style={{margin:"0"}}>
                Age: {age}
              </p>
              <p style={{margin:"0"}}>
                 breed: {breed}

              </p>
               <p style={{margin:"0"}}>
                 description: {description}

              </p>
               <p style={{margin:"0"}}>
                 gender: {gender}

              </p>
              
             
 <p style={{margin:"0"}}>
                 species: {species}

              </p>
              <div className="bbb-wrapper fl-wrap text-start">
                <div className="subcribe-form fl-wrap">
                  <Form
                    onFinish={onFinish}
                    layout={"vertical"}
                    form={adoptForm}
                  >
                    <div className="row gx-4 gy-3 align-items-center justify-content-center">
                      <div className="col-md-7">
                        <div className="row g-2">
                          <div className="col-md-12">
                            <Form.Item
                              label="Full Name"
                              name="fullName"
                              rules={[
                                {
                                  required: true,
                                  message: "Please input your Full Name",
                                },
                              ]}
                            >
                              <Input
                                className="form-control border"
                                placeholder="Full Name"
                              />
                            </Form.Item>
                          </div>
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
                                placeholder="Please enter your Email"
                              />
                            </Form.Item>
                          </div>
                          <div className="col-md-12">
                            <Form.Item
                              name="phone"
                              rules={[
                                {
                                  required: true,
                                  message: "Please input your Phone",
                                },
                              ]}
                            >
                              <Input
                                className="form-control border"
                                placeholder="Please enter your Phone"
                              />
                            </Form.Item>
                          </div>
                          <div className="col-md-12">
                            <Form.Item
                              label="Address"
                              name="address"
                              rules={[
                                {
                                  required: true,
                                  message: "Please input your Address",
                                },
                              ]}
                            >
                              <Input
                                className="form-control border"
                                placeholder="Please enter your Address"
                              />
                            </Form.Item>
                          </div>
                          <div className="col-md-12">
                            <PrimaryButton
                              width="30%"
                              loading={isLoading}
                              htmlType="submit"
                              text={`Adopt ${title}`} 
                            ></PrimaryButton>
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

export default EnquireNow;
