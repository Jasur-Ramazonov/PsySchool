import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { MoonFilled, SunFilled } from "@ant-design/icons";
import { Button, Layout, theme } from "antd";
import { HiOutlineMenu, HiOutlineArrowRight } from "react-icons/hi";
import Statistika from "./Statistika";
import Natijalar from "./Natijalar";
import Category from "./Category";
import Lessons from "./Lessons";
import Test from "./Test";
import Adds from "./Adds";
import Viloyatlar from "./Viloyatlar";
import LogOut from "./LogOut";
import Sidebar from "../components/Sidebar";

const { Header, Content } = Layout;

const Mainpage = () => {
  const [sun, setSun] = useState(false);
  const [collapsed, setCollapsed] = useState(false); // sidebar collapse

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar componentga collapsed prop jo‘natiladi */}
      <Sidebar collapsed={collapsed} />

      <Layout style={{ flex: 1 }}>
        <Header
          style={{
            background: colorBgContainer,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingInline: "20px",
          }}
        >
          {/* Collapse button */}
          <Button
            type="text"
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "25px",
              transition: "transform 0.3s ease",
              transform: collapsed ? "rotate(0deg)" : "rotate(180deg)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {collapsed ? <HiOutlineMenu /> : <HiOutlineArrowRight />}
          </Button>

          {/* Theme toggle button */}
          <Button
            onClick={() => setSun(!sun)}
            type="text"
            style={{ fontSize: "22px" }}
            icon={
              sun ? <MoonFilled style={{ color: "black" }} /> : <SunFilled />
            }
          />
        </Header>

        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            overflowY: "auto",
          }}
        >
          <Routes>
            <Route path="/statistika" element={<Statistika />} />
            <Route path="/natijalar" element={<Natijalar />} />
            <Route path="/categories" element={<Category />} />
            <Route path="/lessons" element={<Lessons />} />
            <Route path="/tests" element={<Test />} />
            <Route path="/reklamalar" element={<Adds />} />
            <Route path="/viloyatlar" element={<Viloyatlar />} />
            <Route path="/log-out" element={<LogOut />} />
          </Routes>
        </Content>
      </Layout>
    </div>
  );
};

export default Mainpage;
