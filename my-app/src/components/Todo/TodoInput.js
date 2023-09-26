// cleanup errorow itd
import classes from './TodoInput.module.css';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { todosActions } from '../../store';

import TodoError from './TodoError';

const TodoInput = () => {
	const dispatch = useDispatch();
	const filter = useSelector(state => state.filter);
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
		dispatch(todosActions.filterTodos(filter));

		setInputValue('');
		setIsTouched(false);
	};

	const inputClasses = isEmpty && isTouched ? `${classes['input']} ${classes['input-error']}` : classes['input'];
	const labelClasses = isEmpty && isTouched ? `${classes['label']} ${classes['label-error']}` : classes['label'];
	const formClasses = isEmpty && isTouched ? `${classes['form']} ${classes['form-error']}` : classes['form'];
	const inputPlaceholder = isEmpty && isTouched ? 'Please enter a valid todo!' : 'Create a new todo...';

	return (
		<form className={formClasses} onSubmit={addTodoHandler}>
			{isEmpty && isTouched && <TodoError />}
			{/* {<TodoError />} */}
			<label htmlFor="todo-input" className={labelClasses}></label>
			<input
				type="text"
				id="todo-input"
				placeholder={inputPlaceholder}
				className={inputClasses}
				value={inputValue}
				onChange={onChangeHandler}
			/>
		</form>
	);
};

export default TodoInput;
