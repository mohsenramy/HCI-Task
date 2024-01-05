import {
  Visit,
  VisitSearchResult,
  VisitSearchTerm,
} from "../@types/visitTypes";
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

const getVisitDetails = async (visitId: string): Promise<Visit> => {
  try {
    const response = await APIClient.get(`/visit/${visitId}`);
    const data = response.data;
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
export const visitAPI = {
  searchPatientHospitalVisits,
  getVisitDetails,
};
