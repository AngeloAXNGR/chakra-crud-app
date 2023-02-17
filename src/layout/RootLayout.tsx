// import React from 'react'
import Header from "../components/Header"
import {Routes, Route } from 'react-router-dom'
import Home from "../pages/Home";
import Create from "../pages/Create";

import { Flex } from '@chakra-ui/react';

const RootLayout = () => {
	return (
			<Flex 
				flexDirection="column" 
				alignItems="center" 
				height="100vh"
				gap="20px"
			>
				<Header/>
				<Routes>
        	<Route path="/" element={<Home/>}/>
        	<Route path="/create" element={<Create/>}/>
    		</Routes>
			</Flex>

	)
}

export default RootLayout