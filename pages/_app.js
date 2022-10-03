import { ChakraProvider } from "@chakra-ui/react"
import Main from "../layouts/main"
import theme from '../theme.ts'

function MyApp({ Component, pageProps }) {
	return(
		<ChakraProvider theme={theme}>
			<Main>
				<Component {...pageProps} />
			</Main>
		</ChakraProvider>
	)
}

export default MyApp