import { Button } from './Button'

type Props = {
	onClick: () => void
	toggleModal: () => void
}

export const AddToDo = ({ onClick, toggleModal }: Props) => {
	return (
		<div className='modal'>
			<div className='add-todo-container'>
				<span className='close'onClick={toggleModal}>X</span>
				<h3>WHAT SH!T DO YOU WANT TO GET DONE?</h3>
				<div className='input-container'>
					<input type='text' placeholder='Add ToDo' />
					<input type='number' placeholder='Due Date' />
				</div>
				<Button name='Add ToDo' onClick={onClick}/>
			</div>
		</div>
	)
}
