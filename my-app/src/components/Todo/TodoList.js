import classes from './TodoList.module.css';
import TodoListItem from './TodoListItem';
import TodoListFooter from './TodoListFooter';

const TodoList = () => {
	const DUMMY_LIST = ['Complete course', 'Jog around the park', '10 minutes meditation'];

	const todoItems = DUMMY_LIST.map(todo => <TodoListItem text={todo} />);

	return (
		<>
			<ul className={classes.ul}>{todoItems}</ul>
			<TodoListFooter />
		</>
	);
};

export default TodoList;
