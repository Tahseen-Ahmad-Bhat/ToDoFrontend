const nameRegex = /^([a-zA-Z ]){2,30}$/;

export const validateTaskName = (name) => {
  return nameRegex.test(name.trim());
};

export const validateTaskDescription = (des) => {
  return !!des.trim();
};
