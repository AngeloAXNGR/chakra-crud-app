import {useContext} from 'react';
import { TodoContext } from '../contexts/TodoContext';
import { Flex, SimpleGrid, Button }  from '@chakra-ui/react';
import { TaskObject } from '../contexts/TodoContext';
import { useNavigate } from 'react-router-dom'

import TaskCard from '../components/TaskCard';


const Home = () => {
	const navigate = useNavigate()
	const {tasks} = useContext(TodoContext);
	const taskItems = tasks.map((task:TaskObject) => {
		return(
			<TaskCard
				key={task.id}
				id={task.id}
				title={task.title}
				dueDate={task.dueDate}
				priority={task.priority}
			/>
		)
	})
	return (
		<Flex
			flexDirection="column"
			gap="20px"
			border="2px solid blue"
			alignItems="center"
			width="100%"
			padding="0 20px 20px 20px"
		>
			<Button 
				colorScheme="blue" 
				color="white" 
				fontSize="2rem" 
				padding="30px 20px"
				onClick={() => navigate("/create")}
			>
				Create Task
			</Button>

			<SimpleGrid
				padding="10px"
				border="2px solid red"
				width="100%"
				minChildWidth="300px"
				gap="20px"
			>
				{tasks && taskItems}
			</SimpleGrid>
		</Flex>
	)
}

export default Home