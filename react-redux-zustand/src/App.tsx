import { Provider as ReduxProvider } from 'react-redux';

import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";
import { store } from './store';

export function App() {
  return (
    <ReduxProvider store={store}>
      <h1>Todo List</h1>
      <AddTodo />
      <TodoList />
    </ReduxProvider>
  )
}