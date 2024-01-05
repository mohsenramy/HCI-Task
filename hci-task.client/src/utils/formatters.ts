import moment from "moment";

export const formatDateTime = (date: Date): string => {
  return moment(date).format("YYYY-MM-DD HH:MM A");
};

export const formatDateOnly = (date: Date): string => {
  return moment(date).format("DD-MM-YYYY");
};

export const formatTimeOnly = (date: Date): string => {
  return moment(date).format("HH:MM A");
};
