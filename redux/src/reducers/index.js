// Initial state
const initialState = {
    name: '',
    age: '',
    numbers: [],
  };
  
  // Reducer function
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_NAME':
        return { ...state, name: action.payload };
      case 'SET_AGE':
        return { ...state, age: action.payload };
      case 'ADD_NUMBER':
        return { ...state, numbers: [...state.numbers, action.payload] };
      default:
        return state;
    }
  };
  
  export default reducer;
  