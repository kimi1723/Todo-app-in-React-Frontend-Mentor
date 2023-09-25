import classes from './Main.module.css';
import TodoList from '../Todo/TodoList';

const Main = () => {
	return (
		<main className={classes.main}>
			<TodoList />
		</main>
	);
};

export default Main;
