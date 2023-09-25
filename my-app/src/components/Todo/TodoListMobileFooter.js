import classes from './TodoListFooter.module.css';

const TodoListMobileFooter = ({ itemsLeftCount, filterHandler }) => {
	const filterHandlerLift = (filter, event) => {
		filterHandler(filter, event);
	};

	return (
		<>
			<footer className={classes.footer}>
				<p className={classes['items-left']}>{itemsLeftCount} items left</p>
				<button className={classes['filter-button']}>Clear Completed</button>
			</footer>
			<div className={classes['filter-buttons-container']}>
				<button className={classes['filter-button']} onClick={filterHandlerLift.bind(this, 'all')}>
					All
				</button>
				<button className={classes['filter-button']} onClick={filterHandlerLift.bind(this, 'active')}>
					Active
				</button>
				<button className={classes['filter-button']} onClick={filterHandlerLift.bind(this, 'completed')}>
					Completed
				</button>
			</div>
		</>
	);
};

export default TodoListMobileFooter;
