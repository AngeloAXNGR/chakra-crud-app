import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { useNavigate } from 'react-router-dom';
import { Flex, Box, Text, FormControl, Input , FormLabel, Select, Button} from '@chakra-ui/react';

const Create = () => {
	const {taskForm, handleFormInputs, addTask} = useContext(TodoContext);
	const navigate = useNavigate();

	return (
		<Box as="form" 
			minWidth="500px"
			border="2px solid black"
			textAlign="center"
			padding="20px"
		>
			<Text as="h1" fontSize="2rem" fontWeight="bold">Create a Task</Text>
			<FormControl mb="20px">
				<FormLabel>Enter Task Name: </FormLabel>
				<Input
					type="text"
					name="title"
					value={taskForm.title}
					onChange={(e) => {handleFormInputs(e)}}
				/>
		
			</FormControl>

			<FormControl mb="20px">
				<FormLabel>Enter a Date: </FormLabel>
				<Input
					type="date"
					name="dueDate"
					value={taskForm.dueDate}
					onChange={(e) => {handleFormInputs(e)}}
				/>
			</FormControl>

			<FormControl mb="20px">
				<FormLabel>Select Priority: </FormLabel>
				<Select
					name="priority"
					value={taskForm.priority}
					onChange={(e) => {handleFormInputs(e)}}
				>
					<option value="Low">Low</option>
					<option value="Medium">Medium</option>
					<option value="High">High</option>
				</Select>
			</FormControl>
			
			<Flex gap="20px" justifyContent="center">
				<Button type="submit" onClick={(e) => {addTask(e)}}>Create</Button>
				<Button onClick={() => navigate('/')}>Cancel</Button>
			</Flex>
		</Box>
	)
}

export default Create