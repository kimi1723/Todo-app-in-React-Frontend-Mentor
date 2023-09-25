import classes from './TodoInput.module.css';

import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { todosActions } from '../../store';

import TodoError from './TodoError';

const TodoInput = () => {
	const dispatch = useDispatch();
	const [inputValue, setInputValue] = useState('');
	const [isEmpty, setIsEmpty] = useState(true);
	const [isTouched, setIsTouched] = useState(false);

	const onChangeHandler = e => {
		setInputValue(e.target.value);
		setIsTouched(true);
		e.target.value === '' ? setIsEmpty(true) : setIsEmpty(false);
	};

	const addTodoHandler = e => {
		e.preventDefault();

		const enteredTodo = inputValue;

		if (enteredTodo === '') {
			setIsEmpty(true);
			setIsTouched(true);
			return;
		}

		dispatch(todosActions.addTodo(enteredTodo));

		setInputValue('');
		setIsTouched(false);
	};

	return (
		<form className={classes.form} onSubmit={addTodoHandler}>
			{isEmpty && isTouched && <TodoError />}
			<label htmlFor="todo-input" className={classes.label}></label>
			<input
				type="text"
				id="todo-input"
				placeholder="Create a new todo..."
				className={classes[`input`]}
				value={inputValue}
				onChange={onChangeHandler}
			/>
		</form>
	);
};

export default TodoInput;
