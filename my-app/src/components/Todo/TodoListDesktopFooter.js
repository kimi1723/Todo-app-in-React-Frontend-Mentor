import classes from './TodoListFooter.module.css';

const TodoListDesktopFooter = ({ itemsLeftCount, filterHandler, filterClasses, clearCompletedHandler }) => {
	const filterHandlerLift = (filter, event) => {
		filterHandler(filter, event);
	};

	const clearCompletedHandlerLift = () => {
		clearCompletedHandler();
	};

	return (
		<footer className={classes.footer}>
			<p className={classes['items-left']}>{itemsLeftCount} items left</p>
			<div className={classes['filter-buttons-container']}>
				<button className={filterClasses.allClasses} onClick={filterHandlerLift.bind(this, 'all')}>
					All
				</button>
				<button className={filterClasses.activeClasses} onClick={filterHandlerLift.bind(this, 'active')}>
					Active
				</button>
				<button className={filterClasses.completedClasses} onClick={filterHandlerLift.bind(this, 'completed')}>
					Completed
				</button>
			</div>
			<button className={classes['filter-button']} onClick={clearCompletedHandlerLift}>
				Clear Completed
			</button>
		</footer>
	);
};

export default TodoListDesktopFooter;
