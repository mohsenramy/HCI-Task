import { Hospital, HospitalSearch } from "../@types/hospitalTypes";
import { APIClient } from "./APIClient";

const searchHospitalNames = async (
  searchData: HospitalSearch
): Promise<Hospital[]> => {
  try {
    const response = await APIClient.post("/hospital", {
      ...searchData,
    });
    const data = response.data;
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const hospitalAPI = {
  searchHospitalNames,
};
