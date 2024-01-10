import React from "react"

export interface ProjectObject {
    title: string,
    github: string,
    demo: string,
    demoImage: string,
    // array<String> to allow multiple lines. Can be replaced with React.ReactNode to use JSX objects
    desciption: Array<String | React.ReactNode>
}

export const projects: Array<ProjectObject> = [
    {
        title: "MiniPlayArena | HackSheffield 8",
        github: "https://github.com/MiniPlayArena",
        demo: "https://miniplayarena.gasinski.dev/",
        demoImage: "https://media.licdn.com/dms/image/D4E22AQHgBKqH7rrBog/feedshare-shrink_2048_1536/0/1704710224691?e=1707955200&v=beta&t=TMNwJ-q5LOyVO1-CLGn453IRy8BudJ-vQ3xn1BHGGj8",
        desciption: [
           "MiniPlayArena is a web app created by me and 3 other fellow students during a university hackathon.",   ,
           "Our vision was to create an interactive, fully fledged application which allows users to form parties and play classic board games with their friends.",
           "We used NextJS for the frontend, utilizing Chakra-ui for the user interface and kaboom.js for the board games themselves.",
            "All game logic and party management is handled on the Python backend. To ensure real-time and seamless communication between both sides, we utilized WebSockets which proved to be quite a challenge to get working properly!"

        ]
    },
    {
        title: "Leetcode Stats Card",
        github: "https://github.com/david-gasinski/leetcode-stats",
        demo: "https://leetcode.gasinski.dev/",
        demoImage: "./images/leetcode.png",
        desciption: [
          "A web app which allows you to dynamically render SVGs with stats from your leetcode profile! Fully customisable with multiple different themes. The stats are updated in realtime and re-rendered on every update.",
          "The SVGs can be pasted into your github README.md, and seen on your profile!",
          "Made in Python and Flask. Hosted on a VPS using Nginx as a reverse proxy for a uWSGI web server."
        ]
    },
    {
        title: "Porfolio Website",
        github: "https://github.com/david-gasinski/gasinski-dev",
        demo: "https://gasinski.dev/",
        demoImage: "./images/portfolio.png",
        desciption: [
          "Custom portfolio website to show off my projects and skills.",
          "Entirely made in Next.JS using TypeScript, with Chakra-ui and framer motion used to provide a better user experience.",
          "Check out the repo below and feel free to clone and customise it for yourself."
        ]
    }   
]