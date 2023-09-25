import classes from './TodoListItem.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { todosActions } from '../../store';

const TodoListItem = ({ text, id }) => {
	const dispatch = useDispatch();
	const isCompleted = useSelector(state => state.todos.find(todo => todo.id === id).isCompleted);

	const todoCompletionHandler = () => {
		dispatch(todosActions.handleTodoCompletion(id));
	};

	const deleteTodoHandler = () => {
		dispatch(todosActions.deleteTodo(id));
	};

	const todoAdditionalClasses = isCompleted ? 'completed' : '';

	return (
		<li className={classes.li}>
			<div className={classes['text-container']}>
				<input type="checkbox" className={classes['checkbox']} onChange={todoCompletionHandler} checked={isCompleted} />
				<div className={classes['gradient-bg']}></div>
				<p className={`${classes['todo-text']} ${classes[todoAdditionalClasses]}`} onClick={todoCompletionHandler}>
					{text}
				</p>
			</div>
			<button type="button" className={classes['cross-btn']} onClick={deleteTodoHandler}>
				<svg className={classes['cross-icon']} xmlns="http://www.w3.org/2000/svg" width="18" height="18">
					<path
						fill="#494C6B"
						fillRule="evenodd"
						d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
					/>
				</svg>
			</button>
		</li>
	);
};

export default TodoListItem;
