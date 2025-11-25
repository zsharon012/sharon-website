import Dock from '../components/Dock'
import { VscHome, VscAccount, VscBriefcase, VscFolderOpened } from 'react-icons/vsc'

function MyDock() {
    const items = [
        { icon: <VscHome size={18} />, label: 'Home', onClick: () => alert('Home!') },
        { icon: <VscAccount size={18} />, label: 'About me', onClick: () => alert('About me!') },
        { icon: <VscBriefcase size={18} />, label: 'Experiences', onClick: () => alert('Experiences!') },
        { icon: <VscFolderOpened size={18} />, label: 'Projects', onClick: () => alert('Projects!') }
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