import { Layout, Menu, Breadcrumb, Card } from "antd";
import "antd/dist/antd.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const { Header, Content, Footer } = Layout;

export const Dashboard = () => {
  const [cond, setCond] = useState(false);
  const { job } = useSelector((store) => ({job : store.adminR.job}));
  console.log(job, "job");
  return (
    <>
      <Layout>
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
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
            {job.map((e) => {
              return (
                <Card
                  title={e.name}
               
                  style={{ width: 300 }}
                >
                  <p><b>Job-Title::</b>  {e.title}</p>
                  <p><b>Job-Type::</b>  {e.type}</p>
                  <p><b>Slary::</b>  Rs.{e.salary}</p>
                   <p><b>Location::</b>   {e.location}</p>
                   <p><b>Job-Descriptioin::</b>  {e.description}</p>
                  {cond ? (
                    <button>Applied</button>
                  ) : (
                    <button
                      onClick={() => {
                        setCond(true);
                      }}
                    >
                      Apply
                    </button>
                  )}
                </Card>
              );
            })}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </>
  );
};
