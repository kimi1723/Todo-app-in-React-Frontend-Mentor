import classes from './TodoListFooter.module.css';

const TodoListDesktopFooter = () => {
	return (
		<>
			<p className={classes['items-left']}>5 items left</p>
			<div className={classes['filter-buttons-container']}>
				<button className={classes['filter-button']}>All</button>
				<button className={classes['filter-button']}>Active</button>
				<button className={classes['filter-button']}>Completed</button>
			</div>
			<button className={classes['filter-button']}>Clear Completed</button>
		</>
	);
};

export default TodoListDesktopFooter;
