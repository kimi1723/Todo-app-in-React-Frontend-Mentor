import classes from './TodoList.module.css';

import { useSelector } from 'react-redux';
import TodoListItem from './TodoListItem';
import TodoListFooter from './TodoListFooter';

const TodoList = () => {
	const todosArray = useSelector(state => state.todos);

	const todoItems = todosArray.map(todo => <TodoListItem key={todo.id} text={todo.title} />);

	return (
		<>
			<ul className={classes.ul}>{todoItems}</ul>
			<TodoListFooter />
		</>
	);
};

export default TodoList;
