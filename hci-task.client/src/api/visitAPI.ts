import { VisitSearchResult, VisitSearchTerm } from "../@types/visitTypes";
import { APIClient } from "./APIClient";

const searchPatientHospitalVisits = async (
  searchData: VisitSearchTerm
): Promise<VisitSearchResult[]> => {
  try {
    const response = await APIClient.post("/visit", {
      ...searchData,
    });
    const data = response.data;
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const visitAPI = {
  searchPatientHospitalVisits,
};
