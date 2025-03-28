"use client";
import { Button, Layout, Menu, ConfigProvider } from "antd";
import { useState } from "react";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";

const { Header, Content, Footer } = Layout;

export default function AppHeader({ children }) {
  const [mode, setMode] = useState("light");
  const items = [
    {
      key: "1",
      label: "About",
    },
    {
      key: "2",
      label: "Work",
    },
    {
      key: "3",
      label: "Skills",
    },
    {
      key: "4",
      label: "Contact",
    },
  ];
  const themeConfig = {
    token: {
      colorPrimary: "#7e3beb",
    },
  };
  return (
    <ConfigProvider theme={themeConfig}>
      <Layout>
        <Header
          style={{
            display: "flex",
            alignItems: "center",
            position: "sticky",
            top: 0,
            zIndex: 1,
            width: "100%",
          }}
        >
          <div className="text-2xl font-bold">Portfolio</div>
          <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            items={items}
            style={{ flex: 1 }}
            className="ml-auto flex justify-end mr-8"
          />
          <div className="flex items-center gap-6">
            {mode == "light" ? (
              <MdOutlineLightMode
                size={22}
                className="cursor-pointer"
                onClick={() => setMode("dark")}
              />
            ) : (
              <MdOutlineDarkMode
                size={22}
                className="cursor-pointer"
                onClick={() => setMode("light")}
              />
            )}
            <Button type="primary" size="middle">
              Download CV
            </Button>
          </div>
        </Header>
        <Content>
          <div
            className="h-screen"
            style={{
              background: "white",
            }}
          >
            {children}
          </div>
        </Content>
        <Footer
          className="flex items-center justify-center"
          style={{ textAlign: "center" }}
        >
          <span className="ml-2">© 2023 | </span>
          {"  "}
          <span className="underline ml-2 mr-1">Designed</span> and{" "}
          <span className="underline ml-1 mr-1">coded</span> by Divya Chinthala
        </Footer>
      </Layout>
    </ConfigProvider>
  );
}
