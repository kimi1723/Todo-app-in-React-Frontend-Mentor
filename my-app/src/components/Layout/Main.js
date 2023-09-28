import classes from './Main.module.css';
import TodoList from '../Todo/TodoList';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchTodos } from '../../store';

let isInitial = true;

const Main = () => {
	const dispatch = useDispatch();
	const todos = useSelector(state => state.todos);
	const todosAmount = useSelector(state => state.todos.length);
	const areThereAnyTodos = todosAmount > 0 ? true : false;

	useEffect(() => {
		dispatch(fetchTodos());
	}, [dispatch]);

	useEffect(() => {
		if (isInitial) {
			isInitial = false;
			return;
		}

		// if (!todos.changed) return;

		const sendTodosData = async () => {
			const URL = 'https://react-cdfed-default-rtdb.firebaseio.com/todos.json';

			const response = await fetch(URL, {
				method: 'PUT',
				body: JSON.stringify(todos),
			});

			if (!response.ok) {
				throw new Error('Sorry, sending todos data failed.');
			}
		};

		sendTodosData().catch(error => {
			console.log(error);
		});
	}, [todos, dispatch]);

	return (
		<main className={classes.main}>
			{areThereAnyTodos && <TodoList />}
			{areThereAnyTodos && <p className={classes['dnd-text']}>Drag and drop to reoder list</p>}
			{!areThereAnyTodos && <p className={classes['info-text']}>Feel free to create your first todo!</p>}
		</main>
	);
};

export default Main;
