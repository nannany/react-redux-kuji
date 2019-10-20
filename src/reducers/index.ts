import { memberReducer, roleReducer } from "./reducers";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  member: memberReducer,
  role: roleReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const enhancer =
    process.env.NODE_ENV === "development"
      ? composeWithDevTools(applyMiddleware())
      : applyMiddleware();

  return createStore(rootReducer, enhancer);
}
