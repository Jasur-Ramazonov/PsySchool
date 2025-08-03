import { useState } from "react";
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
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
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
              },
            },
            {
              key: "2",
              icon: <StatisticLogo />,
              label: "Statistika",
            },
            {
              key: "3",
              icon: <Resultslogo />,
              label: "Natijalar",
            },
            {
              key: "4",
              icon: <CategoriesLogo />,
              label: "Kategoriyalar",
            },
            {
              key: "5",
              icon: <TestsLogo />,
              label: "Testlar",
            },
            {
              key: "6",
              icon: <LessonsLogo />,
              label: "Darslar",
            },
            {
              key: "7",
              icon: <AdsLogo />,
              label: "Reklamalar",
            },
            {
              key: "8",
              icon: <RegionsLogo />,
              label: "Viloyatlar",
            },
            {
              key: "9",
              icon: <SignOutLogo />,
              label: "Chiqish",
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
          Content
        </Content>
      </Layout>
    </Layout>
  );
};
export default Mainpage;
