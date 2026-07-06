import MyDock from '../components/MyDock';
import ExplodingKittens from '../assets/exploding_kittens.png';
import Finances from '../assets/finances.png';
import Python from '../assets/python.png';
import TripPlanner from '../assets/trip-planner.png';
import CSBBS from '../assets/csbbs.png'

export default function Projects() {

    const projects = [
        {
            name: "Clark Street Beach Bird Sanctuary",
            blurb: "A website that helps volunteers input and track plant data with an interactive map and data table",
            skills: "React, Tailwind, Figma, JavaScript",
            link: "https://bird-plant-tracker-frontend.vercel.app/map",
            img: CSBBS
        },
        {
            name: "Exploding Kittens",
            blurb: "A fun game of the card game Exploding Kittens that can be played with friends, with additional cards and win conditions",
            skills: "Java, JUnit, Gradle, Cucumber/BDD, CI/CD",
            link: "https://github.com/nu-cs-sqe/course-project-20252603-team-06-20252603",
            img: ExplodingKittens
        },
        {
            name: "Python Debugger",
            blurb: "A python debugger that executes python code and shows state of memory",
            skills: "C, C++",
            link: "https://github.com/zsharon012",
            img: Python
        },
        {
            name: "Financial Simulator",
            blurb: "An object oriented simulation that shows a realistic 40-year model of savings and debt",
            skills: "Python",
            link: "https://github.com/zsharon012",
            img: Finances
        },
        {
            name: "Trip Planner",
            blurb: "A program that helps users to plan routes and trips",
            skills: "DSSL2",
            link: "https://github.com/zsharon012",
            img: TripPlanner
        }
    ]

    const displayProjects = projects.map((proj, idx) => (
        <a
            href={proj.link}
            key={idx}
            target="_blank"
            rel="noopener noreferrer"
            className='project-card'
        >
            <div className='project-box'>
                <div className='logo-container'>
                    <img className='logo' src={proj.img} alt={proj.name} />
                </div>
                <div className='project-info'>
                    <h2>{proj.name}</h2>
                    <p>{proj.blurb}</p>
                    <p className='skills'>{proj.skills}</p>
                </div>
            </div>
        </a>
    ))

    return (
        <>
            <h1 className='project-title'>Projects</h1>
            <div className='project-boxes'>{displayProjects}</div>
            <div className='more-space'></div>
            <MyDock />
        </>
    );
}