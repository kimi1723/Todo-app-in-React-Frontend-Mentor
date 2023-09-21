import classes from './TodoListFooter.module.css';
import TodoListMobileFooter from './TodoListMobileFooter';
import TodoListDesktopFooter from './TodoListDesktopFooter';

const TodoListFooter = () => {
	const width = window.innerWidth;
	const widthBreakpoint = 576;

	return (
		<>
			<TodoListDesktopFooter />
			{/* <TodoListMobileFooter /> */}
		</>
	);
};

export default TodoListFooter;
