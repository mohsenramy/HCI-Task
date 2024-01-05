import { Hospital } from "./hospitalTypes";
import { Patient } from "./patientTypes";

export type VisitSearchTerm = {
  patientId: number;
  hospitalId: number;
};
export type VisitSearchResult = {
  id: number;
  description: string;
  createdAt: Date;
};

export type Visit = VisitSearchResult & {
  patientId: number;
  hospitalId: number;
  patient: Patient;
  hospital: Hospital;
  updatedAt: Date;
};
