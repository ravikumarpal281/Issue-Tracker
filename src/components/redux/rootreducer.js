import { combineReducers } from "redux";
import IssueReducer from "./reducers/IssueReducer";
const rootReducer = combineReducers({
  issues: IssueReducer,
});

export default rootReducer;
