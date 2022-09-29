export default function reducer(state = [], action) {
  switch (action.type) {
    case "ADD_HERO": {
      return [
        ...state,
        {
          id: action.id,
          name: action.name
        }
      ];
    }
    default: {
      return state;
    }
  }
}
