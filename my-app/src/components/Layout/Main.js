import classes from './Main.module.css';
import TodoList from '../Todo/TodoList';

import { useSelector } from 'react-redux';

const Main = () => {
	const todosAmount = useSelector(state => state.todos.length);
	const areThereAnyTodos = todosAmount > 0 ? true : false;

	return (
		<main className={classes.main}>
			{areThereAnyTodos && <TodoList />}
			{areThereAnyTodos && <p className={classes['dnd-text']}>Drag and drop to reoder list</p>}
			{!areThereAnyTodos && <p className={classes['info-text']}>Feel free to create your first todo!</p>}
		</main>
	);
};

export default Main;
