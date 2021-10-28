import './App.css'
import React, { FC, useState } from 'react'
import { AddTask } from './components/AddTask'
import { TaskItem } from './components/TaskItem'
import { Button } from './components/Button'
import { TTask } from './components/Types'

const App: FC = () => {
	const [showModal, setShowModal] = useState<boolean>(false)
	const [task, setTask] = useState<string>('')
	const [taskList, setTaskList] = useState<TTask[]>([])

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTask(event.target.value)
	}

	const toggleModal = () => {
		setShowModal(!showModal)
	}

	const addTask = () => {
		const newTask = {
			taskName: task
		}
		setTaskList([...taskList, newTask])
		setTask('')
	}

	return (
		<div className='App'>
			<header className='App-header'>
				<h1>GET SH!T DONE</h1>
			</header>
			<Button name='Add ToDo' onClick={toggleModal} />
			<Button name='Clear ' onClick={toggleModal} />
			<main>
				{showModal && (
					<AddTask
						task={task}
						addTask={addTask}
						toggleModal={toggleModal}
						handleChange={handleChange}
					/>
				)}
				<section className='todo-list'>
					{taskList.map((task: TTask, key: number) => {
						return <TaskItem task={task} key={key} />
					})}
				</section>
			</main>
		</div>
	)
}

export default App
