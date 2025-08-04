import "../utils/LoginPage.css";
import { UserOutlined } from "@ant-design/icons";
import { Input, Button } from "antd";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleLogin = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://testpsyedu.limsa.uz/auth/login",
        {
          phone,
          password,
        }
      );

      const refreshToken = response.data?.refresh_token;

      if (refreshToken) {
        localStorage.setItem("TOKEN", refreshToken);
        alert("Login successful!");
        navigate("/");
      } else {
        alert("Refresh token yo'q");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-cont">
        <div className="user-icon">
          <UserOutlined style={{ fontSize: "48px", color: "#fff" }} />
        </div>

        <div style={{ textAlign: "center", color: "white", fontSize: 24 }}>
          Login
        </div>

        <div className="login-inputs">
          <label>
            <div style={{ color: "white", marginBottom: 10 }}>
              <span style={{ display: "block", marginBottom: 5 }}>
                Phone Number
              </span>
              <Input
                className="white-placeholder"
                size="large"
                placeholder="+998*********"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                style={{
                  width: 300,
                  height: 50,
                  backgroundColor: "transparent",
                  color: "white",
                }}
              />
            </div>
          </label>

          <label
            style={{
              color: "white",
              display: "block",
              marginBottom: 16,
              marginTop: 20,
            }}
          >
            <span style={{ display: "block", marginBottom: 6 }}>Password</span>
            <Input
              className="white-placeholder"
              id="password"
              type="password"
              size="large"
              placeholder="******"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: 300,
                height: 50,
                backgroundColor: "transparent",
                color: "white",
              }}
            />
          </label>

          <Button
            type="default"
            className="login-btn"
            size="large"
            onClick={handleLogin}
            loading={loading}
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
