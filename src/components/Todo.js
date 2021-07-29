import React, { useEffect } from "react";
import PropTypes from "prop-types";
import AddContact from "./addUser";

// bring connect from react-redux, it's the bridge for connecting component to redux
import { connect } from "react-redux";
import immutable from "immutable";
// bring the actions, just bring that have REQUESTED in the suffix
// If you dispatching that doesn't have REQUESTED, it will not work
import {
  GET_TODOS_REQUESTED,
  DELETE_TODO_REQUESTED,
  GET_SINGLE_REQUESTED,
} from "../redux/actions/todo-action";
// import { select } from "redux-saga/effects";
import { useSelector } from "react-redux";
import * as selectors from "../redux/sagas/selectors";

// Components
// import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

const Todo = ({ getTodos, deleteTodos, getTodo }) => {
  // const todos = select(selectors.todos);
  // const loading = select(selectors.loading);
  const todos = useSelector(selectors.todos);
  const loading = useSelector(selectors.loading);
  console.log(todos);

  useEffect(() => {
    getTodos();

    // eslint-disable-next-line
  }, []);

  return (
    <>
      {loading && "Loading..."}
      <AddContact />
      {/* <TodoForm /> */}
      {/* {loading && "Loading..."} */}

      {todos &&
        todos.map((todo, index) => (
          <TodoItem
            todo={todo}
            key={index}
            deleteTodos={deleteTodos}
            getTodo={getTodo}
          />
        ))}
      {/* <AddContact /> */}
    </>
  );
};

Todo.propTypes = {
  loading: PropTypes.bool,
  todos: PropTypes.array,
  getTodos: PropTypes.func.isRequired,
  deleteTodos: PropTypes.func.isRequired,
};

// Get state to props
// const mapStateToProps = (state) => ({
//   todos: state.todo.get("todos").toJS(),
//   loading: state.todo.get("loading"),
// });

// Get dispatch / function to props
const mapDispatchToProps = (dispatch) => ({
  getTodos: () => dispatch({ type: GET_TODOS_REQUESTED }),
  deleteTodos: (id) =>
    dispatch({ type: DELETE_TODO_REQUESTED, payload: id }),

  getTodo: (id) =>
    dispatch({ type: GET_SINGLE_REQUESTED, payload: id }),
});

// To make those two function works register it using connect
export default connect(null, mapDispatchToProps)(Todo);
// export default connect(mapStateToProps, mapDispatchToProps)(Todo);
