import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { todosActions } from '../../store';
import TodoListMobileFooter from './TodoListMobileFooter';
import TodoListDesktopFooter from './TodoListDesktopFooter';

const TodoListFooter = () => {
	const itemsLeftCount = useSelector(state => state.todos.filter(todo => todo.isCompleted === false).length);
	const dispatch = useDispatch();

	const [width, setWidth] = useState(window.innerWidth);
	const widthDesktopBreakpoint = 576;
	const isMobile = width < widthDesktopBreakpoint;

	useEffect(() => {
		window.addEventListener('resize', resizeHandler);
	}, []);

	const resizeHandler = () => {
		setWidth(window.innerWidth);
	};

	const filterHandler = (filter, event) => {
		dispatch(todosActions.filterTodos(filter));
	};

	return (
		<>
			{isMobile ? (
				<TodoListMobileFooter itemsLeftCount={itemsLeftCount} filterHandler={filterHandler} />
			) : (
				<TodoListDesktopFooter itemsLeftCount={itemsLeftCount} filterHandler={filterHandler} />
			)}
		</>
	);
};

export default TodoListFooter;
