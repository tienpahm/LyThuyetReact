import {ADD_COMMENT} from "./type/FakeBook";

const stateDefault = {
  comment: [
    {
      name: "Yone",
      content: "ahihihihih",
      avatar: "https://i.pravatar.cc/150?u=yone",
    },
    {
      name: "Yasuo",
      content: "ahihihihih",
      avatar: "https://i.pravatar.cc/150?u=Yasuo",
    },
  ],
};

const FakeBookReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case ADD_COMMENT: {
      console.log(action.userComment);
      state.comment = [...state.comment, action.userComment];
      return {...state};
    }

    default:
      break;
  }
  return {...state};
};

export default FakeBookReducer;
