import classes from './TodoListFooter.module.css';

const TodoListMobileFooter = () => {
	return (
		<>
			<footer className={classes.footer}>
				<p className={classes['items-left']}>5 items left</p>
				<button className={classes['filter-button']}>Clear Completed</button>
			</footer>
			<div className={classes['filter-buttons-container']}>
				<button className={classes['filter-button']}>All</button>
				<button className={classes['filter-button']}>Active</button>
				<button className={classes['filter-button']}>Completed</button>
			</div>
		</>
	);
};

export default TodoListMobileFooter;
