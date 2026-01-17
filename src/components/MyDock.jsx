import Dock from '../components/Dock';
import { VscHome, VscBriefcase, VscFolderOpened } from 'react-icons/vsc';
import { PiMoonStarsLight, PiCloudSunLight } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function MyDock() {
    const navigate = useNavigate()

    const goToPage = (inputPath) => {
        navigate(inputPath)
    }

    const [darkmode, setDarkMode] = useState(() => {
        return localStorage.getItem('theme') === 'dark';
    });

    useEffect(() => {
        document.body.classList.toggle('dark', darkmode);
        localStorage.setItem('theme', darkmode ? 'dark' : 'light');
    }, [darkmode]);

    const ModeIcon = darkmode ? PiCloudSunLight : PiMoonStarsLight;
    const modeLabel = darkmode ? "Light Mode" : "Dark Mode";

    const items = [
        { icon: <VscHome size={18} />, label: 'Home', onClick: () => goToPage('/') },
        { icon: <VscBriefcase size={18} />, label: 'Experiences', onClick: () =>  goToPage('/experiences') },
        { icon: <VscFolderOpened size={18} />, label: 'Projects', onClick: () => goToPage('/projects') },
        { icon: <ModeIcon size={23} />, label: modeLabel, onClick: () => setDarkMode(prev => !prev) }
    ];
    
    return (
        <>
            <Dock
                items={items}
                panelHeight={68}
                baseItemSize={50}
                magnification={70}
            />
        </>
    );
}

export default MyDock;