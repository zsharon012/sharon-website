import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";

export default function ContactMe() {

    return (
        <div className='contacts'>
            <a
                href="mailto: zsharon012@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                <BiLogoGmail size={23}/>
                <p>zsharon012@gmail.com</p>
            </a>
            <a
                href="https://linkedin.com/in/zsharon012/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaLinkedin size={20} />
                <p>www.linkedin.com/in/zsharon012</p>
            </a>
            <a
                href="https://github.com/zsharon012"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaGithub size={20} />
                <p>www.github.com/zsharon012</p>
            </a>
        </div>
    );
}