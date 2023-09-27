import classes from './TodoList.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useRef } from 'react';

import TodoListItem from './TodoListItem';
import TodoListFooter from './TodoListFooter';
import { todosActions } from '../../store';

const TodoList = () => {
	const dragItem = useRef();
	const dragOverItem = useRef();
	const todosArray = useSelector(state => state.todos);
	const dispatch = useDispatch();

	const dragStartHandler = position => {
		dragItem.current = position;
	};

	const dragEnterHandler = position => {
		dragOverItem.current = position;
	};

	const dropHandler = e => {
		const copiedTodosArray = [...todosArray];
		const dragItemContent = copiedTodosArray[dragItem.current];

		copiedTodosArray.splice(dragItem.current, 1);
		copiedTodosArray.splice(dragOverItem.current, 0, dragItemContent);

		dragItem.current = null;
		dragOverItem.current = null;

		dispatch(todosActions.rearrangeTodos(copiedTodosArray));
	};

	const todoItems = todosArray.map((todo, index) => {
		if (todo.isVisible !== true) return null;

		return (
			<TodoListItem
				key={todo.id}
				id={todo.id}
				text={todo.title}
				dragStartHandler={dragStartHandler}
				dragEnterHandler={dragEnterHandler}
				dropHandler={dropHandler}
				index={index}
			/>
		);
	});

	return (
		<>
			<ul className={classes.ul}>{todoItems}</ul>
			<TodoListFooter />
		</>
	);
};

export default TodoList;
