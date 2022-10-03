import { Flex } from "@chakra-ui/react";

export default function Main({children}) {
	return(
		<Flex
		bg="blue.400"
		alignItems="center"
		justifyContent="center"
		h="100vh"
		w="100vw" >
			{children}
		</Flex>
	)
}