import classes from './TodoInput.module.css';

import { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { todosActions } from '../../store';

const TodoInput = () => {
	const dispatch = useDispatch();
	const filter = useSelector(state => state.filter);
	const inputControlReference = useRef(null);

	const [inputValue, setInputValue] = useState('');
	const [isEmpty, setIsEmpty] = useState(true);
	const [isTouched, setIsTouched] = useState(false);

	const onChangeHandler = e => {
		setInputValue(e.target.value);
		setIsTouched(true);
		e.target.value.trim() === '' ? setIsEmpty(true) : setIsEmpty(false);
	};

	const blurHandler = e => {
		if (inputValue.trim() === '') {
			setIsEmpty(true);
			setIsTouched(true);
		}
	};

	const addTodoHandler = e => {
		e.preventDefault();

		const enteredTodo = inputValue;

		if (enteredTodo.trim() === '') {
			setIsEmpty(true);
			setIsTouched(true);
			return;
		}

		dispatch(todosActions.addTodo(enteredTodo));
		dispatch(todosActions.filterTodos(filter));

		setInputValue('');
		setIsTouched(false);

		inputControlReference.current.blur();
	};

	const inputClasses = isEmpty && isTouched ? `${classes['input']} ${classes['input-error']}` : classes['input'];
	const formClasses = isEmpty && isTouched ? `${classes['form']} ${classes['form-error']}` : classes['form'];
	const inputPlaceholder = isEmpty && isTouched ? 'Please enter a valid todo!' : 'Create a new todo...';

	return (
		<form className={formClasses} onSubmit={addTodoHandler}>
			<label htmlFor="todo-input" className={classes.label}></label>
			<input
				type="text"
				id="todo-input"
				placeholder={inputPlaceholder}
				className={inputClasses}
				value={inputValue}
				onChange={onChangeHandler}
				onBlur={blurHandler}
				ref={inputControlReference}
			/>
		</form>
	);
};

export default TodoInput;
