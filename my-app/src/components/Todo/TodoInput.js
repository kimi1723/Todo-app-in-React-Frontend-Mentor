import classes from './TodoInput.module.css';

import { useRef } from 'react';

const TodoInput = () => {
	const inputRef = useRef('');

	const addTodoHandler = e => {
		e.preventDefault();

		const enteredTodo = inputRef.current.value;
		console.log(enteredTodo);

		inputRef.current.value = '';
	};

	return (
		<form className={classes.form} onSubmit={addTodoHandler}>
			<label htmlFor="todo-input" className={classes.label}></label>
			<input
				type="text"
				id="todo-input"
				placeholder="Create a new todo..."
				className={classes[`input`]}
				ref={inputRef}
				value={inputRef.current.value}
			/>
		</form>
	);
};

export default TodoInput;
