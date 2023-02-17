import {createContext, useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

export type TaskObject = {
	id: number,
	title:string,
	dueDate:string,
	priority: string
}

export type TaskFormObject = {
	title:string,
	dueDate:string,
	priority: string
}


export type TodoContextObject = {
	tasks: TaskObject[],
	taskForm: TaskFormObject,
	handleFormInputs: (event:React.ChangeEvent<any>) => void
	addTask: (event:React.MouseEvent<HTMLButtonElement>) => void,
	deleteTask: (event:React.MouseEvent<HTMLButtonElement>, id:number) => void,
}

export type TodoContextProviderProps = {
	children: React.ReactNode
}

export const TodoContext = createContext({} as TodoContextObject)

export const TodoContextProvider = ({children}:TodoContextProviderProps) => {
	const navigate = useNavigate();
	const [tasks, setTasks] = useState<TaskObject[]>([])
	const [taskForm, setTaskForm] = useState({title:'', dueDate:'', priority:'Low'})
	
	useEffect(() => {
		loadTasks()
	},[])

	const handleFormInputs = (event:React.ChangeEvent<any>) => {
		const {name, value} = event.target;
		setTaskForm(prevForm => {
			return{...prevForm,
				[name]:value
			}
		})
	}

	const loadTasks = async() => {
		const res = await fetch(`http://localhost:3000/tasks`)
		setTasks(await res.json())
	}

	const addTask = (event:React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		const title = taskForm.title;
		const dueDate= taskForm.dueDate;
		const priority=taskForm.priority;
		fetch(`http://localhost:3000/tasks`, {
			method:'POST',
			headers: {'Content-type': 'application/json'},
			body:JSON.stringify({title, dueDate, priority})
		}).then(() => {
			setTaskForm({title:'', dueDate:'', priority:'Low'})
			navigate('/')
			loadTasks();
		})
	}

	const deleteTask = async(event:React.MouseEvent<HTMLButtonElement>,id:number) => {
		await fetch(`http://localhost:3000/tasks/${id}`, {method:'DELETE'})
		loadTasks();
	}

	return(
		<TodoContext.Provider value={{tasks, taskForm, handleFormInputs, addTask, deleteTask}}>
			{children}
		</TodoContext.Provider>
	);
}