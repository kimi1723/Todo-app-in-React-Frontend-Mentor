import classes from './Main.module.css';
import TodoList from '../Todo/TodoList';

const Main = () => {
	return (
		<main className={classes.main}>
			<TodoList />
			<p className={classes['dnd-p']}>Drag and drop to reoder list</p>
		</main>
	);
};

export default Main;
