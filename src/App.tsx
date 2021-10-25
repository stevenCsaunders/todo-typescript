import './App.css'
import { FC, useState } from 'react'
import { AddToDo } from './components/AddToDo'
import { ToDoList } from './components/ToDoList'
import { Button } from './components/Button'

const App: FC = () => {
	const [showModal, setShowModal] = useState(false)

	const toggleModal = () => {
		setShowModal(!showModal)
	}

	const handleNewTask = () => {
		console.log('CLicked')
	}

	return (
		<div className='App'>
			<header className='App-header'>
				<h1>GET SH!T DONE</h1>
			</header>
			<Button name='Add ToDo' onClick={toggleModal} />
			<main>
				{showModal && <AddToDo onClick={handleNewTask} toggleModal={toggleModal}/>}
				<ToDoList />
			</main>
		</div>
	)
}

export default App
