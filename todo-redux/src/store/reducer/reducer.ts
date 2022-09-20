import { actionNameTypes } from "constantAction/constantAction";
import { actionProps, defaultStateProps } from "../../types/storeType/storeType";


const defaultState: defaultStateProps = {
  lists: [],
  field: null,
};

export const reducer = (state = defaultState, action: actionProps): defaultStateProps => {
  switch (action.type) {
    case actionNameTypes.ADD_FIELD:
      return { ...state, field: action.payload };
    case actionNameTypes.ADD_LIST:
      return { ...state, lists: [...state.lists, action.payload] };
    case actionNameTypes.DELETE_LIST:
      return {
        ...state,
        lists: state.lists.filter((list) => {
          return list.id !== action.payload;
        }),
      };
    case actionNameTypes.CHANGE_LIST:
      return {
        ...state,
        lists: state.lists.map((list) =>
          list.id === state.field ? action.payload : list
        ),
        field: null,
      };
    case actionNameTypes.ALL_LISTS:
      return { ...state, lists: action.payload };
    default:
      return state;
  }
};
