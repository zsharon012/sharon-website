import MyDock from '../components/MyDock';
import TextType from '../components/TextType';
import ProfileImg from '../assets/profile.png';
import SplashCursor from '../components/SplashCursor';

export default function Home() {

    const quickBlurb = "A computer science student at\
                        Northwestern University who loves building\
                        ,experiencing new things, and\
                        exploring my creativity. I'm inspired to make an impact\
                        through my work and hope to continue to create with passion and empathy."

    return (
        <div className='home-items'>
            <img className='profile-pic' src={ProfileImg} alt='profile picture'/>
            <div className='intro'>
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
            <SplashCursor />
        </div>
    );
}