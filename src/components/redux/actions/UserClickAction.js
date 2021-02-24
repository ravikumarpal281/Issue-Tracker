import { ADD_USER_CLICK } from "../Constants";

export const addUserClick = (id, name) => {
  return {
    type: ADD_USER_CLICK,
    id: id,
    name: name,
  };
};
