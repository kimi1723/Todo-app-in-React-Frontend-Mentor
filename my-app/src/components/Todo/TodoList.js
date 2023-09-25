import classes from './TodoList.module.css';

import { useSelector } from 'react-redux';
import { useRef, useState } from 'react';

import TodoListItem from './TodoListItem';
import TodoListFooter from './TodoListFooter';

const TodoList = () => {
	const dragItem = useRef();
	const dragOverItem = useRef();
	// const todosArray = useSelector(state => state.todos);
	const [todosArray, setTodosArray] = useState([
		{ title: 'Complete course1', isCompleted: false, id: 1, isVisible: true },
		{ title: 'Complete course2', isCompleted: false, id: 2, isVisible: true },
		{ title: 'Complete course3', isCompleted: false, id: 3, isVisible: true },
		{ title: 'Complete course4', isCompleted: true, id: 4, isVisible: true },
	]);

	const dragStartHandler = (e, position) => {
		dragItem.current = position;
	};

	const dragEnterHandler = (e, position) => {
		dragOverItem.current = position;
	};

	const dropHandler = e => {
		const copiedTodosArray = [...todosArray];
		const dragItemContent = copiedTodosArray[dragItem.current];
		copiedTodosArray.splice(dragItem.current, 1);
		copiedTodosArray.splice(dragOverItem.current, 0, dragItemContent);
		dragItem.current = null;
		dragOverItem.current = null;
		setTodosArray(copiedTodosArray);
	};

	const todoItems = todosArray
		.filter(todo => todo.isVisible === true)
		.map((todo, index) => (
			<TodoListItem
				key={todo.id}
				id={todo.id}
				text={todo.title}
				dragStartHandler={dragStartHandler}
				dragEnterHandler={dragEnterHandler}
				dropHandler={dropHandler}
				index={index}
			/>
		));

	return (
		<>
			<ul className={classes.ul}>{todoItems}</ul>
			<TodoListFooter />
		</>
	);
};

export default TodoList;
