import classes from './TodoListFooter.module.css';

import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { todosActions } from '../../store';
import TodoListMobileFooter from './TodoListMobileFooter';
import TodoListDesktopFooter from './TodoListDesktopFooter';

// let activeFilter = 'all';

const TodoListFooter = () => {
	const itemsLeftCount = useSelector(state => state.todos.filter(todo => todo.isCompleted === false).length);
	const dispatch = useDispatch();

	const [activeFilter, setActiveFilter] = useState('all');
	const [width, setWidth] = useState(window.innerWidth);

	const widthDesktopBreakpoint = 576;
	const isMobile = width < widthDesktopBreakpoint;

	const filterClasses = {
		allClasses: classes['filter-button'],
		activeClasses: classes['filter-button'],
		completedClasses: classes['filter-button'],
	};

	useEffect(() => {
		window.addEventListener('resize', resizeHandler);
	}, []);

	const resizeHandler = () => {
		setWidth(window.innerWidth);
	};

	const filterHandler = (filter, event) => {
		dispatch(todosActions.filterTodos(filter));

		setActiveFilter(filter);
		event.target.blur();
	};

	const clearCompletedHandler = () => {
		dispatch(todosActions.clearCompletedTodos());
	};

	switch (activeFilter) {
		case 'all':
			filterClasses.allClasses = `${classes['filter-button']} ${classes.active}`;
			break;

		case 'active':
			filterClasses.activeClasses = `${classes['filter-button']} ${classes.active}`;
			break;

		case 'completed':
			filterClasses.completedClasses = `${classes['filter-button']} ${classes.active}`;
			break;

		default:
			console.log('Error filtering classes for filtering buttons');
	}

	return (
		<>
			{isMobile ? (
				<TodoListMobileFooter
					itemsLeftCount={itemsLeftCount}
					filterHandler={filterHandler}
					filterClasses={filterClasses}
					clearCompletedHandler={clearCompletedHandler}
				/>
			) : (
				<TodoListDesktopFooter
					itemsLeftCount={itemsLeftCount}
					filterHandler={filterHandler}
					filterClasses={filterClasses}
					clearCompletedHandler={clearCompletedHandler}
				/>
			)}
		</>
	);
};

export default TodoListFooter;
