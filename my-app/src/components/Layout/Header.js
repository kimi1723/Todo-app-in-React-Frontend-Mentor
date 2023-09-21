import classes from './Header.module.css';
import TodoInput from '../Todo/TodoInput';

const Header = () => {
	return (
		<>
			<div className={classes['header-bg']}></div>
			<header className={classes.header}>
				<h1 className={classes.heading}>Todo</h1>
				<TodoInput />
			</header>
		</>
	);
};

export default Header;
