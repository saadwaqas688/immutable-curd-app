export const todos = (state) => state.todo.get("todos").toJS();
export const contact = (state) => state.todo.get("contact").toJS();
export const loading = (state) => state.todo.get("loading");

// todos: state.todo.get("todos").toJS(),
//   loading: state.todo.get("loading"),
// export const contact= state.todo.get("contact"),
