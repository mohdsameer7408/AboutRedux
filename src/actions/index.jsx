export const increment = (count) => {
  return {
    type: "INCREMENT",
    payload: count,
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

export const toggleSignIn = () => {
  return {
    type: "SIGN_IN",
  };
};
