import MyDock from '../components/MyDock';
import NUCS from '../assets/nu_cs.png';
import CSBBS from '../assets/csbbs.png';
import iEmbrace from '../assets/iembrace.png';
import YWCA from '../assets/ywca_evanston.png';
import Collins from '../assets/collins_aero.png';

export default function Experiences() {

    const experiences = [
        {
            name: "Collins Aerospace",
            role: "Software Engineer Intern",
            dates: "Jun 2026 - Present",
            blurb: "",
            skills: "",
            img: Collins
        },
        {
            name: "YWCA Evanston/North Shore",
            role: "Software Engineer Intern",
            dates: "Jan 2026 - Jun 2026",
            blurb: "📊 Created a full-stack web application that automated email schedule-sending with visual representations of outreach data",
            skills: "React.js, JavaScript, AWS RDS, AWS S3, Firebase",
            img: YWCA
        },
        {
            name: "Data Structures & Algorithms Northwestern University",
            role: "Teaching Assistant",
            dates: "Sep 2025 - Present",
            blurb: "📚 Mentoring students on class content and homework by hosting office hours and grading exams",
            skills: "DSSL2 (similar to Python)",
            img: NUCS
        },
        {
            name: "Qualitative Reasoning Group Northwestern University",
            role: "Undergraduate Research Intern",
            dates: "Jun 2025 - Sep 2025",
            blurb: "🧠 Designed an interactive knowledge-capture game to help the AI SocialBot learn social norms and human reasoning",
            skills: "Microsoft Adaptive Cards, UTM VM, Docker",
            img: NUCS
        },
        {
            name: "Clark Street Beach Bird Sanctuary",
            role: "Software Developer Intern",
            dates: "Jan 2025 - Jun 2025",
            blurb: "🌿 Developed a full-stack web application that helped with\
                   inputting and tracking plants for a non-profit organization",
            skills: "React.js, Tailwind CSS, Figma, JavaScript",
            img: CSBBS
        },
        {
            name: "iEmbrace",
            role: "Software Engineer Intern",
            dates: "Jan 2025 - May 2025",
            blurb: "🌅 Improved landing page for a meditation startup to\
                    help users stay connected with upcoming updates",
            skills: "JavaScript, Figma",
            img: iEmbrace
        }
    ]

    const displayExperiences = experiences.map((exp, idx) => (
        <div className='experience-item' key={idx}>
            <div className='experience-blurb'>
                <div className='logo-container'>
                    <img className='logo' src={exp.img} alt={exp.name} />
                </div>
                <div>
                    <h2>{exp.role}</h2>
                    <h3>{exp.name}</h3>
                    <p className='dates'>{exp.dates}</p>
                    <p>{exp.blurb}</p>
                    <p className='skills'>{exp.skills}</p>
                </div>
            </div>
        </div>
    ))

    return (
        <>
            <h1>Experiences</h1>
            <div className='experience-boxes'>{displayExperiences}</div>
            <div className='more-space'></div>
            <MyDock />
        </>
    );
}