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

  export const setNum = (num) => {
    return {
      type: 'SET_NUM',
      payload: num,
    };
  };
  
  export const addNumber = (number) => {
    return {
      type: 'ADD_NUMBER',
      payload: number,
    };
  };
  