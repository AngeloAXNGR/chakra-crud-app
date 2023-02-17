import React from 'react'
import { Box, Text } from '@chakra-ui/react'

const Header = () => {
	return (
		<Box 
			backgroundColor="blackAlpha.700" 
			color="white" 
			width="100%" 
			textAlign="center"
			padding="30px"
		>
			<Text
				as="h1"
				fontSize="4rem"
				fontWeight="bold"
			>
				To Do Application
			</Text>
		</Box>
	)
}

export default Header