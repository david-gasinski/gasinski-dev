export interface ProjectObject {
    title: string,
    github: string,
    demo: string,
    demoImage: string,
    desciption: String
}

export const projects: Array<ProjectObject> = [
    {
        title: "MiniPlayArena",
        github: "https://github.com/MiniPlayArena",
        demo: "https://miniplayarena.gasinski.dev/",
        demoImage: "path to image",
        desciption: "A project created in 24hrs."
    }   
]