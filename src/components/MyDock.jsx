import Dock from '../components/Dock'
import { VscHome, VscAccount, VscBriefcase, VscFolderOpened } from 'react-icons/vsc'
import { useNavigate } from 'react-router-dom';

function MyDock() {
    const navigate = useNavigate()

    const goToPage = (inputPath) => {
        navigate(inputPath)
    }

    const items = [
        { icon: <VscHome size={18} />, label: 'Home', onClick: () => goToPage('/') },
        { icon: <VscBriefcase size={18} />, label: 'Experiences', onClick: () =>  goToPage('/experiences') },
        { icon: <VscFolderOpened size={18} />, label: 'Projects', onClick: () => goToPage('/projects') },
        { icon: <VscAccount size={18} />, label: 'Contact Me', onClick: () => goToPage('/contactme') }
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