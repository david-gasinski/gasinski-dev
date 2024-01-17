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
            dracula: "#1a1b26"
        },
        highlight: {
            dracula: "#24283b"
        },
        text: {
            dracula: "#a9b1d6 "
        },
        comment: {
            dracula: "#565f89"
        },
        cyan: {
            dracula: "#7dcfff"
        },
        green: {
            dracula: "#9ece6a"
        },
        orange: {
            dracula: "#ff9e64"
        },
        pink: {
            dracula: "#f7768e"
        },
        purple: {
            dracula: "#bb9af7"
        },
        red: {
            dracula: "#ff5555"
        },
        yellow: {
            dracula: "#e0af68"
        }
    }
})