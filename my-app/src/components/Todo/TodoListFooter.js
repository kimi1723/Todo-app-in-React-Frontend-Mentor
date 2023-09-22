import classes from './TodoListFooter.module.css';
import { useState, useEffect } from 'react';

import TodoListMobileFooter from './TodoListMobileFooter';
import TodoListDesktopFooter from './TodoListDesktopFooter';

const TodoListFooter = () => {
	const [width, setWidth] = useState(window.innerWidth);
	const widthDesktopBreakpoint = 576;
	const isMobile = width < widthDesktopBreakpoint;

	useEffect(() => {
		window.addEventListener('resize', resizeHandler);
	}, []);

	const resizeHandler = () => {
		setWidth(window.innerWidth);
	};

	return <>{isMobile ? <TodoListMobileFooter /> : <TodoListDesktopFooter />}</>;
};

export default TodoListFooter;
