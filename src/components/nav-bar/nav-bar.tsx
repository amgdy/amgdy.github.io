import React, { Component } from 'react';
import './nav-bar.css'
import { FaLinkedin, FaGithub, FaHome, FaTwitter } from "react-icons/fa";

export class NavBar extends Component {
    render() {
        return (
            <div className="navbar">
                <div className="navbar-link">
                    <FaHome />
                    <a href="/"> Home</a>
                </div>
                <div className="navbar-link">
                    <FaLinkedin />
                    <a href="https://www.linkedin.com/in/ahmedmagdy"> LinkedIn</a>
                </div>
                <div className="navbar-link">
                    <FaGithub />
                    <a href="https://github.com/amgdy"> GitHub</a>
                </div>
                <div className="navbar-link">
                    <FaTwitter />
                    <a href="https://x.com/amgdy"> Twitter</a>
                </div>
            </div>
        );
    }
}