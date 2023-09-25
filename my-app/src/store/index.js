import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
	todos: [
		{ title: 'Complete course', isCompleted: false, id: 1 },
		{ title: 'Complete course', isCompleted: false, id: 2 },
		{ title: 'Complete course', isCompleted: false, id: 3 },
	],
};

const todosSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		addTodo(state, action) {
			const newTodo = action.payload;

			state.todos.push({ title: newTodo, isCompleted: false, id: Math.random() });
		},
		handleTodoCompletion(state, action) {
			const todoId = action.payload;
			const todo = state.todos.find(todo => todo.id === todoId);

			todo.isCompleted = !todo.isCompleted;
		},
		clearCompletedTodos(state, action) {},
	},
});

const store = configureStore({ reducer: todosSlice.reducer });

export const todosActions = todosSlice.actions;

export default store;
