"use client";
import { Button, Layout, Menu, ConfigProvider, Drawer } from "antd";
import { useState } from "react";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { HiMenuAlt3 } from "react-icons/hi"; // Mobile menu icon

const { Header, Content, Footer } = Layout;

export default function AppHeader({ children }) {
  const [mode, setMode] = useState("light");
  const [menuOpen, setMenuOpen] = useState(false);

  const items = [
    { key: "1", label: "Home" },
    { key: "2", label: "About" },
    { key: "3", label: "Work" },
    { key: "4", label: "Skills" },
    { key: "5", label: "Contact" },
  ];

  const themeConfig = {
    token: {
      colorPrimary: "#7e3beb",
    },
  };

  return (
    <ConfigProvider theme={themeConfig}>
      <Layout className="min-h-screen flex flex-col">
        <Header
          className="flex items-center justify-between px-4 md:px-8 lg:px-16"
          style={{
            position: "sticky",
            top: 0,
            zIndex: 10,
            width: "100%",
            background: "white !important",
          }}
        >
          {/* Left: Brand Name */}
          <div className="text-2xl font-bold">Portfolio</div>

          {/* Desktop Menu */}
          <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            items={items}
            style={{ borderBottom: "none !important" }}
            className="hidden md:flex flex-1 justify-end"
          />

          {/* Right: Theme Toggle & CV Button (Hidden on Mobile) */}
          <div className="hidden md:flex items-center gap-4">
            {mode === "light" ? (
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

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-8">
            {mode === "light" ? (
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
            <HiMenuAlt3
              size={28}
              className="cursor-pointer"
              onClick={() => setMenuOpen(true)}
            />
          </div>
        </Header>

        {/* Mobile Drawer Menu */}
        <Drawer
          title="Menu"
          placement="right"
          onClose={() => setMenuOpen(false)}
          open={menuOpen}
        >
          <Menu
            theme="light"
            mode="vertical"
            defaultSelectedKeys={["1"]}
            items={items}
            onClick={() => setMenuOpen(false)}
          />
          <Button type="primary" size="middle" className="mt-2">
            Download CV
          </Button>
        </Drawer>

        {/* Page Content */}
        <Content className="flex-1 flex flex-col justify-start">
          <div className="bg-white">{children}</div>
        </Content>

        {/* Footer */}
        <Footer className="md:text-center">
          <span className="ml-2">© 2023 | </span>
          <span className="underline ml-2 mr-1">Designed</span> and{" "}
          <span className="underline ml-1 mr-1">coded</span> by Divya Chinthala
        </Footer>
      </Layout>
    </ConfigProvider>
  );
}
