import { useState } from "react";
import AsyncSelect from "react-select/async";

export type Patient = {
  Id: number;
  Name: string;
  DateOfBirth?: Date;
};

type OptionType = {
  label: string;
  value: string;
};
export type VisitSearch = {
  PatientId: number;
  HospitalId: number;
};

const VisitsSearch = () => {
  const [loadingPatients, setLoadingPatients] = useState<boolean>(false);
  const [patient, setPatient] = useState<Patient | null>(null);
  const [visitSearchData, setVisitSearchData] = useState<VisitSearch | null>(
    null
  );
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const [patients, setPatients] = useState<Patient[] | []>([]);

  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);

  const loadOptions = async (
    inputValue: string,
    callback: (options: OptionType[]) => void
  ) => {
    try {
      // Simulate async data fetching (replace with your actual async data fetching logic)
      const response = await fetch(
        `https://api.example.com/search?q=${inputValue}`
      );
      const data = await response.json();

      // Transform the fetched data into the format expected by react-select
      const options: OptionType[] = data.map((item: unknown) => ({
        label: item.label,
        value: item.value,
      }));

      callback(options);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="flex flex-col bg-white border-gray-200 rounded-md m-4 border-2 font-semibold shadow-md">
      <div className="m-2 basis-5/12 p-1 ">
        {/* <SearchBar loading={loadingPatients} options={patients} requests={searchPatientNames} onClickFunction={onPatientSelect} placeholder="Find a Patient" /> */}
        <AsyncSelect
          value={selectedOption}
          onChange={(selected: OptionType | null) =>
            setSelectedOption(selected)
          }
          loadOptions={loadOptions}
          placeholder="Type Patient Name to search"
        />
      </div>
      <div className="m-2 basis-5/12 p-1 ">
        {/* <SearchBar loading={loadingPatients} options={patients} requests={searchPatientNames} onClickFunction={onPatientSelect} placeholder="Find a Patient" /> */}
        <AsyncSelect
          value={selectedOption}
          onChange={(selected: OptionType | null) =>
            setSelectedOption(selected)
          }
          loadOptions={loadOptions}
          placeholder="Type Hospital Name to search"
        />
      </div>

      <div className="flex w-full justify-end">
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Search Visits</button>
      </div>
    </div>
  );
};

export default VisitsSearch;
