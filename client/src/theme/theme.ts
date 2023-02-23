import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
}

const darkMode = {
    linkColor: "gold",
    textColor: "whitesmoke",
    backgroundColor: "rgba(0, 0, 0, 0.85)"
}
const lightMode = {}
const theme = extendTheme({ config })

export default theme