import './App.css'
import Dock from './components/Dock.jsx'
import { VscHome, VscAccount, VscBriefcase, VscFolderOpened } from 'react-icons/vsc'

function App() {

  const items = [
    { icon: <VscHome size={18} />, label: 'Home', onClick: () => alert('Home!') },
    { icon: <VscAccount size={18} />, label: 'About me', onClick: () => alert('About me!') },
    { icon: <VscBriefcase size={18} />, label: 'Experiences', onClick: () => alert('Experiences!') },
    { icon: <VscFolderOpened size={18} />, label: 'Projects', onClick: () => alert('Projects!') }
  ];

  console.log(items)

  return (
    <>
      <h1>test</h1>
      <Dock
        items={items}
        panelHeight={68}
        baseItemSize={50}
        magnification={70}
      />
    </>
  )
}

export default App;
