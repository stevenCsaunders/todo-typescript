import React, { useState } from "react";

export const ToDoItem = () => {
  const [isDone, setIsDone] = useState(false);

  const handleToggle = () => {
    console.log(isDone)
    setIsDone(!isDone)
  }

	return (
		<div>
			<div className='list-item'>
				<span
					role='button'
					className={isDone ? 'complete' : ''}
					onClick={handleToggle}
				></span>
				<label
					htmlFor='cb1'
					className={isDone ? 'complete-text' : ''}
					onClick={handleToggle}
				>
					Task Title
				</label>
			</div>
		</div>
	)
}
