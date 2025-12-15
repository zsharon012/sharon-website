import MyDock from '../components/myDock';

export default function Projects() {

    const projects = [
        {
            name: "Clark Street Beach Bird Sanctuary",
            blurb: "A website to input and track plant data with an interactive map and data table",
            skills: "React, Tailwind, Figma, JavaScript",
            link: "https://bird-plant-tracker-frontend.vercel.app/map",
            img: ""
        },
        {
            name: "Python Debugger",
            blurb: "A python debugger that executes python code and shows state of memory",
            skills: "C, C++",
            link: "https://github.com/zsharon012",
            img: ""
        },
        {
            name: "Financial Simulator",
            blurb: "An object oriented simulation modeling 40-year savings and debt",
            skills: "Python",
            link: "https://github.com/zsharon012",
            img: ""
        },
        {
            name: "Java Linter",
            blurb: "Given bytecode files, parses through to flag errors and stylistic issues",
            skills: "Java, PlantUML",
            link: "https://github.com/nu-cs-sw-design/project-20252601-snack_attack",
            img: ""
        },
        {
            name: "Trip Planner",
            blurb: "A program storing map data points used to help users plan routes and trips",
            skills: "DSSL2",
            link: "https://github.com/zsharon012",
            img: ""
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
            <div className='project-info'>
                <div>
                    <h2>{proj.name}</h2>
                    <p>{proj.blurb}</p>
                    <p className='skills'>{proj.skills}</p>
                </div>
            </div>
        </a>
    ))

    return (
        <>
            <h1>projects</h1>
            <div className='project-boxes'>{displayProjects}</div>
            <div className='more-space'></div>
            <MyDock />
        </>
    );
}