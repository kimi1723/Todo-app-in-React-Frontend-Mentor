import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
	todos: [
		{ title: 'Complete course1', isCompleted: false, id: 1, isVisible: true },
		{ title: 'Complete course2', isCompleted: false, id: 2, isVisible: true },

		{ title: 'Complete course4', isCompleted: true, id: 4, isVisible: true },
	],
	filter: 'all',
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
	},
});

const store = configureStore({ reducer: todosSlice.reducer });

export const todosActions = todosSlice.actions;

export default store;
