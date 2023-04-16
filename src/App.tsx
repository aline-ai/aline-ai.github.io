import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  extendTheme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import CallToAction from "./components/CallToAction"

const theme = extendTheme({
  colors: {
    lilac: {
      50: "#f9f9ff",
      100: "#f0f0ff",
      200: "#e6e6ff",
      300: "#dcdcff",
      400: "#d2d2ff",
      500: "#c8c8ff",
      600: "#bfbfff",
      700: "#b5b5ff",
      800: "#ababff",
      900: "#a1a1ff",
    }
  }
})

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <CallToAction />
      </Grid>
    </Box>
  </ChakraProvider>
)
