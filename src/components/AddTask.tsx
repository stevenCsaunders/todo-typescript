import { Button } from './Button'

type Props = {
	task: string
	addTask: () => void
	toggleModal: () => void
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const AddTask = ({
	task,
	addTask,
	toggleModal,
	handleChange,
}: Props) => {
	return (
		<div className='modal'>
			<div className='add-todo-container'>
				<span className='close' onClick={toggleModal}>
					X
				</span>
				<h3>WHAT SH!T DO YOU WANT TO GET DONE?</h3>
				<div className='input-container'>
					<input
						type='text'
						placeholder='Add ToDo'
						onChange={handleChange}
						value={task}
					/>
				</div>
				<Button name='Add ToDo' onClick={addTask} />
			</div>
		</div>
	)
}
