import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  MoonFilled,
  SunFilled,
} from "@ant-design/icons";

import { Button, Layout, Menu, theme } from "antd";
import MenuLogo from "../components/MenuLogo";
import StatisticLogo from "../components/StatisticLogo";
import Resultslogo from "../components/Resultslogo";
import CategoriesLogo from "../components/CategoriesLogo";
import TestsLogo from "../components/TestsLogo";
import LessonsLogo from "../components/LessonsLogo";
import AdsLogo from "../components/AdsLogo";
import RegionsLogo from "../components/RegionsLogo";
import SignOutLogo from "../components/SignOutLogo";
import Statistika from "./Statistika";
import Natijalar from "./Natijalar";
import Category from "./Category";
import Lessons from "./Lessons";
import Test from "./Test";
import Adds from "./Adds";
import Viloyatlar from "./Viloyatlar";
import LogOut from "./LogOut";

const { Header, Sider, Content } = Layout;
//

//
const Mainpage = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [sun, setSun] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout
      style={{
        height: "100vh",
      }}
    >
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        width={240}
        style={{ background: "white" }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <MenuLogo />,
              label: "PsyEdu",
              style: {
                margin: 0,
                borderRadius: 0,
                background: "blue",
                color: "white",
                marginBottom: "20px",
              },
            },
            {
              key: "2",
              icon: <StatisticLogo />,
              label: <Link to="/statistika">Statistika</Link>,
              style: {
                marginBottom: "20px",
              },
            },
            {
              key: "3",
              icon: <Resultslogo />,
              label: (
                <Link
                  onClick={() => {
                    console.log("salom");
                  }}
                  to="/natijalar"
                >
                  Natijalar
                </Link>
              ),
              style: {
                marginBottom: "20px",
              },
            },
            {
              key: "4",
              icon: <CategoriesLogo />,
              label: <Link to="/categories">Kategoriyalar</Link>,
              style: {
                marginBottom: "20px",
              },
            },
            {
              key: "5",
              icon: <TestsLogo />,
              label: <Link to="/tests">Testlar</Link>,
              style: {
                marginBottom: "20px",
              },
            },
            {
              key: "6",
              icon: <LessonsLogo />,
              label: <Link to="/lessons">Darslar</Link>,
              style: {
                marginBottom: "20px",
              },
            },
            {
              key: "7",
              icon: <AdsLogo />,
              label: <Link to="/reklamalar">Reklamalar</Link>,
              style: {
                marginBottom: "20px",
              },
            },
            {
              key: "8",
              icon: <RegionsLogo />,
              label: <Link to="/viloyatlar">Viloyatlar</Link>,
              style: {
                marginBottom: "20px",
              },
            },
            {
              key: "9",
              icon: <SignOutLogo />,
              label: <Link to="/log-out">Chiqish</Link>,
              style: {
                marginBottom: "20px",
              },
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingBlock: "10px",
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <ArrowRightOutlined /> : <ArrowLeftOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <Button
            onClick={() => setSun(!sun)}
            type="text"
            style={{ fontSize: "22px", marginRight: "20px" }}
            icon={
              sun ? <MoonFilled style={{ color: "black" }} /> : <SunFilled />
            }
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
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
    </Layout>
  );
};
export default Mainpage;
