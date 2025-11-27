import MyDock from '../components/myDock';
import { VscMail, VscGithubAlt } from "react-icons/vsc";
import { FiLinkedin } from "react-icons/fi";

export default function ContactMe() {

    return (
        <div className='contacts'>
            <h1>Contact Me</h1>
            <a href="mailto: zsharon012@gmail.com">
                <VscMail size={40}/>
                <h3>zsharon012@gmail.com</h3>
            </a>
            <a href="https://www.linkedin.com/in/zsharon012/">
                <FiLinkedin size={40} />
                <h3>www.linkedin.com/in/zsharon012</h3>
            </a>
            <a href="https://github.com/zsharon012">
                <VscGithubAlt size={40} />
                <h3>www.github.com/zsharon012</h3>
            </a>
            <MyDock />
        </div>
    );
}