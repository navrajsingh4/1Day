import { Form, Input, message } from "antd";
import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setUser } from "./redux/actions";
import Navbar from "./navbar";

function LoginPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onFinish = (values) => {
        axios
        .post("http://localhost:3001/login", values)
        .then((result) => {
            dispatch(setUser(result.data));
            navigate("/users");
        })
        .catch((err) => {
            message.error("Invalid email or password");
        });
    };
    
    return (
        <>
        <Navbar />
        <div className="login-container">
            <div className="header-title">Login</div>
            <Form onFinish={onFinish}>
            <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: "Please input your email!" }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: "Please input your password!" }]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item>
                <button type="submit" className="create-guest-btn">
                Login
                </button>
            </Form.Item>
            <Form.Item>
                <Link to="/register">Register</Link>
            </Form.Item>
            </Form>
        </div>
        </>
    );
}
