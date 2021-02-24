import { ADD_USER_CLICK } from "../Constants";

const initialState = [];

const userClickReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER_CLICK:
      if (Array.isArray(state) && !state.length) {
        state.push({
          id: action.id,
          issueName: action.name,
          numberOfViews: 1,
        });
        return state;
      } else if (Array.isArray(state)) {
        const newIssues = [];
        const exisitngIds = [];
        state.map((item) => exisitngIds.push(item.id));
        let uniqueIds = [...new Set(exisitngIds)];
        const existingIssues = state.map((item) => {
          if (item.id === action.id) {
            let noOfViews = item.numberOfViews + 1;
            return {
              id: action.id,
              issueName: item.issueName,
              numberOfViews: noOfViews,
            };
          } else {
            if (!uniqueIds.includes(action.id)) {
              newIssues.push({
                id: action.id,
                issueName: action.name,
                numberOfViews: 1,
              });
              uniqueIds.push(action.id);
            }

            return item;
          }
        });
        return [...existingIssues, ...newIssues];
      }
    default:
      return state;
  }
};
export default userClickReducer;
