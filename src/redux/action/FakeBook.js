import {ADD_COMMENT} from "../type/FakeBook";

export const commentAction = (userComment) => ({
  type: ADD_COMMENT,
  userComment,
});
