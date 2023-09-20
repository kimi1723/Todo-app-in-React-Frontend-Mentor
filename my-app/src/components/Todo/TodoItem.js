import classes from "./TodoItem.module.css";

const TodoItem = ({ text }) => {
  return (
    <li className={classes.li}>
      <div className={classes["text-container"]}>
        <input type="checkbox" className={classes["radio-input"]} />
        <p>{text}</p>
      </div>
      <svg
        className={classes["cross-icon"]}
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
      >
        <path
          fill="#494C6B"
          fill-rule="evenodd"
          d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
        />
      </svg>
    </li>
  );
};

export default TodoItem;
