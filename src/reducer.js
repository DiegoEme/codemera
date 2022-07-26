let lastId = 3

export default function redurer(state, action) {
  switch (action.type) {
    case "set_items": {
      return {
        ...state,
        items: state.items.concat(action.payload.items),
      };
    }
    case "add_item": 
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
    default: {
      return state;
    }
  }
}
