import { Component } from 'react';
import './greetings.css';
import { FaMicrosoft } from "react-icons/fa";
import { SiMicrosoftazure } from "react-icons/si";


export class Greeting extends Component {
    render() {
        return (
            <div className="greeting">
                <img className="greeting-photo" alt='profile' src="https://avatars.githubusercontent.com/u/1763289?v=4" />
                <div className="greeting-heading">
                    مرحبا - Greetings! 👋
                </div>
                <div className="greeting-subheading">
                    My name is <b>Ahmed Magdy</b>.
                </div>
                <div className="greeting-body">
                    <p>Azure Technology Specialist <SiMicrosoftazure /> for Digial and App Innovation at <span><FaMicrosoft /></span> <a href="https://www.microsoft.com/"> Microsoft</a>.</p>
                    <p>I'm an Azure Technology Specialist and Cloud Solutions Architect with over 20 years of experience in software engineering, solution architecture, presales, and AI integration.
                        <br />
                        I help businesses use Microsoft Azure, AI, and DevOps tools to solve technical challenges. I'm passionate about innovation, problem-solving, and finding the best solutions to make work easier, smarter and faster.
                    </p>
                </div>
            </div>
        );
    }
}