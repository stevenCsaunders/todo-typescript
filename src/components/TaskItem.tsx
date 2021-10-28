import { TTask } from "./Types"
import { useState } from 'react'

type Props = {
	task: TTask,
}

export const TaskItem = ({ task }: Props) => {

	const [isDone, setIsDone] = useState(false)

	const handleIsDone = () => {
		setIsDone(!isDone)
	}

	return (
		<div>
			<div className='list-item'>
				<span
					role='button'
					className={isDone ? 'complete' : ''}
					onClick={handleIsDone}
				></span>
				<label
					htmlFor='cb1'
					className={isDone ? 'complete-text' : ''}
					onClick={handleIsDone}
				>
					{task.taskName}
				</label>
			</div>
		</div>
	)
}
