import { TaskObject } from '../contexts/TodoContext'
import { Card, CardHeader, Flex, Text, Button } from '@chakra-ui/react'
import { useContext } from 'react'
import { TodoContext } from '../contexts/TodoContext'

const TaskCard = (props:TaskObject) => {
	const {deleteTask} = useContext(TodoContext)
	return (
		<Card>
			<CardHeader>
				<Flex justifyContent="space-around" alignItems="center">
					<Text as="h1" fontSize="1.5rem" fontWeight="bold">{props.title}</Text>
					<Text as="h2" fontSize="1.25rem" color="gray.500">{props.dueDate}</Text>
					<Button colorScheme="red" onClick={(e) =>{deleteTask(e, props.id)}}>Delete</Button>
				</Flex>
			</CardHeader>
		</Card>
	)
}
export default TaskCard