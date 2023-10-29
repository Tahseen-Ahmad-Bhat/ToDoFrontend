import client from "./client";

export const getTasks = async () => {
  try {
    const { data } = await client.get("/task/get-tasks");
    // console.log(data);
    return data;
  } catch (error) {
    // console.log(error);
    return { error: error.message || error };
  }
};

export const addTask = async (task) => {
  try {
    const { data } = await client.post("/task/add-task", task);
    return data;
  } catch (error) {
    return { error: error.message || error };
  }
};
