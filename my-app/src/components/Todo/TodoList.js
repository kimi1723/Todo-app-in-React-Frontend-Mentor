import classes from "./TodoList.module.css";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const DUMMY_LIST = [
    "Complete course",
    "Jog around the park",
    "10 minutes meditation",
  ];

  const todoItems = DUMMY_LIST.map((todo) => <TodoItem text={todo} />);

  return <ul className={classes.ul}>{todoItems}</ul>;
};

export default TodoList;
