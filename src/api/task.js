import client from "./client";

export const getTasks = async () => {
  try {
    const { data } = await client.get("/task/get-tasks");

    return data;
  } catch (error) {
    return { err: error.message };
  }
};
