import { User } from "../@types/userTypes";
import { APIClient } from "./APIClient";

const retrieveUsers = async (): Promise<User[]> => {
  try {
    const response = await APIClient.get("/user");
    const data = response.data;

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const usersAPI = {
  retrieveUsers,
};
