import { combineReducers } from "redux";
import IssueReducer from "./reducers/IssueReducer";
import UserClickReducer from "./reducers/UserClickReducer";
import UserReducer from "./reducers/UserReducer";

const rootReducer = combineReducers({
  issues: IssueReducer,
  users: UserReducer,
  issueClicks: UserClickReducer,
});

export default rootReducer;
