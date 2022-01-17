import { Form, Input, InputNumber, Button } from "antd";
import "antd/dist/antd.css";
import { useDispatch, useSelector } from "react-redux";
import "../../../Components/styles.css";
import { addJob } from "./actions";

// export const AdminPage = () => {
//   const { job } = useSelector((store) => ({job : store.adminR.job}));
//   const dispatch = useDispatch();

//   const layout = {
//     labelCol: {
//       span: 8
//     },
//     wrapperCol: {
//       span: 16
//     }
//   };
//   /* eslint-disable no-template-curly-in-string */

//   const validateMessages = {
//     required: "${label} is required!",
//     types: {
//       email: "${label} is not a valid email!",
//       number: "${label} is not a valid number!"
//     },
//     number: {
//       range: "${label} must be between ${min} and ${max}"
//     }
//   };
//   /* eslint-enable no-template-curly-in-string */

//   // const Demo = () => {
//   const onFinish = (values) => {
//     console.log(values.job);
//     job.push(values.job)
//     const action = addJob(job);
//     dispatch(action);

//   };
//   // };

//   return (
//     <>
//       <div className="cont">
//         <Form
//           {...layout}
//           name="nest-messages"
//           onFinish={onFinish}
//           validateMessages={validateMessages}
//         >
//           <Form.Item
//             name={["job", "name"]}
//             label="Company Name"
//             rules={[
//               {
//                 required: true
//               }
//             ]}
//           >
//             <Input />
//           </Form.Item>
//           <Form.Item
//             name={["job", "title"]}
//             label="Job Title"
//             rules={[
//               {
//                 required: true
//               }
//             ]}
//           >
//             <Input />
//           </Form.Item>
//           <Form.Item
//             name={["job", "type"]}
//             label="Job Type"
//             rules={[
//               {
//                 required: true
//               }
//             ]}
//           >
//             <Input />
//           </Form.Item>
//           <Form.Item
//             name={["job", "email"]}
//             label="Email"
//             rules={[
//               {
//                 type: "email"
//               }
//             ]}
//           >
//             <Input />
//           </Form.Item>
//           <Form.Item
//             name={["job", "salary"]}
//             label="Salary"
//             rules={[
//               {
//                 type: "number"
//               }
//             ]}
//           >
//             <InputNumber />
//           </Form.Item>
//           <Form.Item name={["job", "location"]} label="location">
//             <Input />
//           </Form.Item>
//           <Form.Item name={["job", "description"]} label="Job Description">
//             <Input.TextArea />
//           </Form.Item>
//           <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
//             <Button type="primary" htmlType="submit">
//               Submit
//             </Button>
//           </Form.Item>
//         </Form>
//       </div>
//     </>
//   );
// };

import { Layout, Menu, Breadcrumb, Card } from "antd";
import "antd/dist/antd.css";
import { useState } from "react";
// import { useSelector } from "react-redux";
import { Link,useNavigate} from "react-router-dom";
const { Header, Content, Footer } = Layout;
// import {  } from "react-router-dom";
export const AdminPage = () => {
  const { job } = useSelector((store) => ({ job: store.adminR.job }));
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const layout = {
    labelCol: {
      span: 8
    },
    wrapperCol: {
      span: 16
    }
  };
  /* eslint-disable no-template-curly-in-string */

  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!"
    },
    number: {
      range: "${label} must be between ${min} and ${max}"
    }
  };
  /* eslint-enable no-template-curly-in-string */

  // const Demo = () => {
  const onFinish = (values) => {
    console.log(values.job);
    job.push(values.job);
    const action = addJob(job);
    dispatch(action);
    navigate(-1);
  };
  const handlen = () => {};
  // };

  return (
    <>
      <Layout>
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Link to={"/"}>
              <Menu.Item key="1" onClick={handlen}>
                Jobs
              </Menu.Item>
            </Link>
            {/* <Menu.Item key="2">nav 2</Menu.Item> */}
            <Link to={"/admin"}>
              <Menu.Item key="3">Post Job</Menu.Item>
            </Link>
          </Menu>
        </Header>
        <Content
          className="site-layout"
          style={{ padding: "0 50px", marginTop: 64 }}
        >
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 380 }}
          >
            <div className="cont">
              <Form
                {...layout}
                name="nest-messages"
                onFinish={onFinish}
                validateMessages={validateMessages}
              >
                <Form.Item
                  name={["job", "name"]}
                  label="Company Name"
                  rules={[
                    {
                      required: true
                    }
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name={["job", "title"]}
                  label="Job Title"
                  rules={[
                    {
                      required: true
                    }
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name={["job", "type"]}
                  label="Job Type"
                  rules={[
                    {
                      required: true
                    }
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name={["job", "email"]}
                  label="Email"
                  rules={[
                    {
                      type: "email"
                    }
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name={["job", "salary"]}
                  label="Salary"
                  rules={[
                    {
                      type: "number"
                    }
                  ]}
                >
                  <InputNumber />
                </Form.Item>
                <Form.Item name={["job", "location"]} label="location">
                  <Input />
                </Form.Item>
                <Form.Item
                  name={["job", "description"]}
                  label="Job Description"
                >
                  <Input.TextArea />
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </>
  );
};
