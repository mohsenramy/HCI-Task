import { Patient } from "../@types/patientTypes";
import { APIClient } from "./APIClient";

const searchPatientsNames = async (searchTerm: string): Promise<Patient[]> => {
  try {
    const response = await APIClient.post("/patient", {
      searchTerm,
    });
    const data = response.data;

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const patientsAPI = {
  searchPatientsNames,
};
