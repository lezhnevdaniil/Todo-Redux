const defaultState = {
  lists: [],
  field: null
};

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_FIELD":
      return { ...state, field: action.payload };
    case "ADD_LIST":
      return { ...state, lists: [...state.lists, action.payload] };
    case "DELETE_LIST":
      return {
        ...state,
        lists: state.lists.filter((list) => {
          return list.id !== action.payload;
        }),
      };
    case "CHANGE_LIST":
      return {
        ...state,
        lists: state.lists.map((list) =>
          list.id === state.field ? action.payload.json : list
        ),
        field: null,
      };
    case "ALL_LISTS":
      return { ...state, lists: action.payload };
    default:
      return state;
  }
};
