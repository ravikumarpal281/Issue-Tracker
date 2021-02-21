import { combineReducers } from "redux";
import IssueReducer from "./reducers/IssueReducer";
import UserReducer from "./reducers/UserReducer";

const rootReducer = combineReducers({
  issues: IssueReducer,
  users: UserReducer,
});

export default rootReducer;
