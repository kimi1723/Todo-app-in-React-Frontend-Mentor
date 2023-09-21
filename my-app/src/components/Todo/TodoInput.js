import classes from './TodoInput.module.css';

const TodoInput = () => {
	return (
		<div className={classes['input-container']}>
			<label htmlFor="todo-input" className={classes.label}></label>
			<input type="text" id="todo-input" placeholder="Create a new todo..." className={classes[`input`]} />
		</div>
	);
};

export default TodoInput;
