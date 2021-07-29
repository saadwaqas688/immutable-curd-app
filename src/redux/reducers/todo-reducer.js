import {
  SET_LOADING,
  GET_TODOS,
  SET_TODO_TITLE,
  CREATE_TODO,
  DELETE_TODO,
  CLEAR_TODO_TITLE,
  GET_SINGLE,
  UPDATE_TODO,
} from "../actions/todo-action";
import { Map, List, fromJS } from "immutable";

const initialState = fromJS({
  loading: false,
  todos: [],
  title: "",
  contact: [],
});

// This export default will control your state for your application
export default (state = initialState, { type, payload }) => {
  switch (type) {
    // Set loading
    case SET_LOADING:
      return state.set("loading", true);

    // Get todos
    case GET_TODOS:
      return state
        .set("todos", fromJS(payload))
        .set("loading", false);

    // Create new todo
    case CREATE_TODO:
      return state
        .update("todos", (arr) => arr.push(fromJS(payload)))
        .set("loading", false);

    case DELETE_TODO: {
      //   .set("loading", false); //   .filter((todo) => todo._id !== payload) //   .get("todos") // return state
      const todos = state
        .get("todos")
        .filter((todo) => todo.get("_id") !== payload);
      return state.set("todos", todos).set("loading", false);
    }
    case GET_SINGLE:
      return state
        .set("contact", fromJS(payload))
        .set("loading", false);
    case UPDATE_TODO: { // }; //   loading: false, //   ), //     todo._id === payload._id ? payload : todo //   todos: state.todos.map((todo) => //   ...state, // return {
      const todos = state
        .get("todos")
        .map((todo) =>
          todo.get("_id") === payload._id ? payload : todo
        );
      console.log(todos);
      return state.set("todos", todos).set("loading", false);
      // .set("contact", payload);
    }
    // {
    //     const todos = state.get("todos").map(function(item) {
    //       if(item.get("_id") === "payload_id") {
    //         return item.set("item",payload);
    //       } else {
    //         return item;
    //       }

    //     }
    //     return state.set("todos", todos).set("loading", false);
    //   }
    // case CLEAR_TODO_TITLE:
    //   return state.set("contact", []);

    default:
      return state;
  }
};
