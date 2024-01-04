import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
    styles: {
        global: {
            body: {
                bg: 'background.dracula'
            }
        }
    },
    colors: {
        background: {
            dracula: "#282a36"
        },
        highlight: {
            dracula: "#44475a"
        },
        text: {
            dracula: "#f8f8f2 "
        },
        comment: {
            dracula: "#6272a4"
        },
        cyan: {
            dracula: "#8be9fd"
        },
        green: {
            dracula: "#50fa7b"
        },
        orange: {
            dracula: "#ffb86c"
        },
        pink: {
            dracula: "#ff79c6"
        },
        purple: {
            dracula: "#bd93f9"
        },
        red: {
            dracula: "#ff5555"
        },
        yellow: {
            dracula: "#f1fa8c"
        }
    }
})