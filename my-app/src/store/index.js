import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
	todos: [],
	filter: 'all',
	changed: false,
};

const todosSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		addTodo(state, action) {
			const newTodo = action.payload;

			state.todos.push({ title: newTodo, isCompleted: false, id: Math.random(), isVisible: true });
		},
		handleTodoCompletion(state, action) {
			const todoId = action.payload;
			const todo = state.todos.find(todo => todo.id === todoId);

			todo.isCompleted = !todo.isCompleted;
		},
		deleteTodo(state, action) {
			const todoId = action.payload;
			const todoIndex = state.todos.findIndex(todo => todo.id === todoId);

			state.todos.splice(todoIndex, 1);
		},
		filterTodos(state, action) {
			const filter = action.payload;

			state.filter = filter;

			switch (filter) {
				case 'all':
					state.todos.forEach(todo => (todo.isVisible = true));
					break;
				case 'active':
					state.todos.filter(todo => (todo.isVisible = !todo.isCompleted));
					break;
				case 'completed':
					state.todos.filter(todo => (todo.isVisible = todo.isCompleted));
					break;
				default:
					console.log('Error filtering todos');
			}
		},
		clearCompletedTodos(state) {
			const newState = state.todos.filter(todo => todo.isCompleted === false);

			state.todos = newState;
		},
		rearrangeTodos(state, action) {
			state.todos = action.payload;
		},
		replaceTodos(state, action) {
			const todos = [];

			for (const todo in action.payload.todos) {
				todos.push(todo[0]);
			}
			state.todos = action.payload.todos;
			console.log(todos);
			console.log(action.payload.todos);
		},
	},
});

const store = configureStore({ reducer: todosSlice.reducer });

export const fetchTodos = dispatch => {
	return async dispatch => {
		const fetchData = async () => {
			const URL = 'https://react-cdfed-default-rtdb.firebaseio.com/todos.json';
			const response = await fetch(URL);

			if (!response.ok) {
				throw new Error('Sorry, could not fetch todos data.');
			}

			const data = await response.json();

			return data;
		};

		try {
			const todosData = await fetchData();

			dispatch(
				todosActions.replaceTodos({
					todos: todosData || [],
				}),
			);
		} catch (error) {
			console.log(error);
		}
	};
};

export const todosActions = todosSlice.actions;

export default store;
