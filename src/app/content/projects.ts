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
        title: "MiniPlayArena | HackSheffield 7",
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
        title: "MiniPlayArena | HackSheffield 5",
        github: "https://github.com/MiniPlayArena",
        demo: "https://miniplayarena.gasinski.dev/",
        demoImage: "https://media.licdn.com/dms/image/D4E22AQHgBKqH7rrBog/feedshare-shrink_2048_1536/0/1704710224691?e=1707955200&v=beta&t=TMNwJ-q5LOyVO1-CLGn453IRy8BudJ-vQ3xn1BHGGj8",
        desciption: [
           "MiniPlayArena is a web app created by me and 3 other fellow students during a university hackathon.",   ,
           "Our vision was to create an interactive, fully fledged application which allows users to form parties and play classic board games with their friends.",
           "We used NextJS for the frontend, utilizing Chakra-ui for the user interface and kaboom.js for the board games themselves.",
            "All game logic and party management is handled on the Python backend. To ensure real-time and seamless communication between both sides, we utilized WebSockets which proved to be quite a challenge to get working properly!"

        ]
    }   
]