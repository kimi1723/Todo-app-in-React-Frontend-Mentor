import classes from './Main.module.css';
import TodoList from '../Todo/TodoList';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchTodos } from '../../store';

const Main = () => {
	const dispatch = useDispatch();
	const todos = useSelector(state => state.todos);
	const changedStatus = useSelector(state => state.changed);
	const todosAmount = todos.length;
	const areThereAnyTodos = todosAmount > 0 ? true : false;

	const [isError, setIsError] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

	useEffect(() => {
		const fetchData = async () => {
			dispatch(fetchTodos()).then(result => {
				setIsError(result.isError);
				setErrorMessage(result.error);
			});
		};
		fetchData();
	}, [dispatch]);

	useEffect(() => {
		if (!changedStatus) return;

		const sendTodosData = async () => {
			try {
				const URL = 'https://react-cdfed-default-rtdb.firebaseio.com/todos.json';

				const response = await fetch(URL, {
					method: 'PUT',
					body: JSON.stringify(todos),
				});

				if (!response.ok) {
					throw new Error('Something went wrong, sending todos data failed.');
				}
			} catch (error) {
				setIsError(true);
				setErrorMessage('Something went wrong, sending todos data failed.');
			}
		};

		sendTodosData();
	}, [todos, dispatch, changedStatus]);

	return (
		<main className={classes.main}>
			{areThereAnyTodos && !isError && <TodoList />}
			{areThereAnyTodos && !isError && <p className={classes['dnd-text']}>Drag and drop to reoder list</p>}
			{!areThereAnyTodos && !isError && <p className={classes['info-text']}>Feel free to create your first todo!</p>}
			{isError && <p className={classes['info-text']}>{errorMessage}</p>}
		</main>
	);
};

export default Main;
