const TASK_ACTION_TYPES = {
  SET_TASKS: "SET_TASKS",
};

const INITIAL_STATE = {
  tasks: [],
  todoTasks: [],
  completedTasks: [],
};

export const taskReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case TASK_ACTION_TYPES.SET_TASKS:
      return {
        ...state,
        ...payload,
      };

    default:
      return state;
  }
};
