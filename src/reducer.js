import * as actions from "./actions"

let lastId = 3

export default function redurer(state, action) {
  switch (action.type) {
    case actions.SET_ITEMS: {
      return {
        ...state,
        items: state.items.concat(action.payload.items),
      };
    }
    case actions.ADD_ITEM: 
      return {
        ...state,
        items: [
          ...state.items,
          {
            id: ++lastId,
            text: action.payload.text
          }
        ]
      }
    case actions.DELETE_ITEM: 
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id)
      }
    default: {
      return state;
    }
  }
}
