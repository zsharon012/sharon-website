import MyDock from '../components/MyDock';
import TextType from '../components/TextType';
import ProfileImg from '../assets/profile.png';
import SplashCursor from '../components/SplashCursor';

export default function Home() {

    const quickBlurb = "A computer science student at\
                        Northwestern University. I love building\
                        things, getting new experiences, and\
                        exploring my creativity."

    return (
        <div className='home-items'>
            <img className='profile-pic' src={ProfileImg} alt='profile picture'/>
            <div>
                <h1>Hi, I'm Sharon Zheng!</h1>
                <TextType
                    text={["Welcome to my life", "A glimpse of me", "Enjoy!"]}
                    typingSpeed={75}
                    pauseDuration={1500}
                    showCursor={true}
                    cursorCharacter='|'
                    className='text'
                />
                <p className='quick-blurb'>{quickBlurb}</p>
                <MyDock />
            </div>
            {/* <SplashCursor /> */}
        </div>
    );
}