export const productReducer = ( state = [], action ) => {
  switch (action.type) {
    case 'add':
      return [...state, action.payload];

    case 'delete':
      return state.filter(state => state.id !== action.payload);
    
    default:
      return state;
  }
}
