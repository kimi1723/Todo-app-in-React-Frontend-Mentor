import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import TodoListMobileFooter from './TodoListMobileFooter';
import TodoListDesktopFooter from './TodoListDesktopFooter';

const TodoListFooter = () => {
	const itemsLeftCount = useSelector(state => state.todos.filter(todo => todo.isCompleted === false).length);

	const [width, setWidth] = useState(window.innerWidth);
	const widthDesktopBreakpoint = 576;
	const isMobile = width < widthDesktopBreakpoint;

	useEffect(() => {
		window.addEventListener('resize', resizeHandler);
	}, []);

	const resizeHandler = () => {
		setWidth(window.innerWidth);
	};

	return (
		<>
			{isMobile ? (
				<TodoListMobileFooter itemsLeftCount={itemsLeftCount} />
			) : (
				<TodoListDesktopFooter itemsLeftCount={itemsLeftCount} />
			)}
		</>
	);
};

export default TodoListFooter;
