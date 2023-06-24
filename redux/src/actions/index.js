// Action creators
export const setName = (name) => {
    return {
      type: 'SET_NAME',
      payload: name,
    };
  };
  
  export const setAge = (age) => {
    return {
      type: 'SET_AGE',
      payload: age,
    };
  };
  
  export const addNumber = (number) => {
    return {
      type: 'ADD_NUMBER',
      payload: number,
    };
  };
  