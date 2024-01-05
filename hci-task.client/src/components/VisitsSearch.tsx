import React, { useState } from "react";
import AsyncSelect from "react-select/async";
import { patientsAPI } from "../api/patientsAPI";
import { hospitalAPI } from "../api/hospitalAPI";
import { VisitSearchResult } from "../@types/visitTypes";
import { visitAPI } from "../api/visitAPI";
import VisitsList from "./VisitsList";
import { OptionType } from "../@types/otherTypes";
import { toast } from "react-toastify";


interface Props {
    selectedUser: string;
}
const VisitsSearch: React.FC<Props> = ({ selectedUser }) => {
    const [selectedPatientOption, setSelectedPatientOption] =
        useState<OptionType | null>(null);
    const [selectedHospitalOption, setSelectedHospitalOption] =
        useState<OptionType | null>(null);

    const [Visits, setVisits] = useState<VisitSearchResult[] | []>([])
    const [loadingVisits, setLoadingVisits] = useState(false)


    const loadPatientOptions = async (
        inputValue: string,
        callback: (options: OptionType[]) => void
    ) => {
        try {
            const data = await patientsAPI.searchPatientsNames(inputValue);
            const options: OptionType[] = data.map((item): OptionType => {
                return {
                    label: item.name,
                    value: item.id.toString(),
                };
            });
            callback(options);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const loadHospitalOptions = async (
        inputValue: string,
        callback: (options: OptionType[]) => void
    ) => {
        try {
            const data = await hospitalAPI.searchHospitalNames({
                searchTerm: inputValue,
                userId: selectedUser,
            });
            const options: OptionType[] = data.map((item): OptionType => {
                return {
                    label: `${item.name} - ${item.city}`,
                    value: item.id.toString(),
                };
            });
            callback(options);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handleSearchVisitsClick = async () => {
        try {
            if (!selectedPatientOption || !selectedHospitalOption) {
                toast.error('Patient & Hospital names are both required')
                return
            }
            const patId: number = +selectedPatientOption.value;
            const hosId: number = +selectedHospitalOption.value;

            const data = await visitAPI.searchPatientHospitalVisits({ patientId: patId, hospitalId: hosId })
            setVisits(data)
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoadingVisits(false)
        }
    }

    return (
        <div className="min-h-[70vh]">
            <div className="flex flex-col bg-white border-gray-200 rounded-md m-4 border-2 txt-sm font-semibold shadow-md">
                <div className="m-2  p-1 ">
                    <AsyncSelect
                        required={true}
                        value={selectedPatientOption}
                        onChange={(selected: OptionType | null) =>
                            setSelectedPatientOption(selected)
                        }
                        loadOptions={loadPatientOptions}
                        placeholder="Type Patient Name to search"
                    />
                    <span className="text-xs text-red-600 font-semibold"></span>
                </div>
                <div className="m-2 p-1 ">
                    <AsyncSelect
                        value={selectedHospitalOption}
                        onChange={(selected: OptionType | null) =>
                            setSelectedHospitalOption(selected)
                        }
                        loadOptions={loadHospitalOptions}
                        placeholder="Type Hospital Name to search"
                    />
                </div>

                <div className="flex w-full justify-end">
                    <button
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        onClick={handleSearchVisitsClick}
                    >
                        Search Visits
                    </button>
                </div>
            </div>
            <VisitsList data={Visits} loading={loadingVisits} />

        </div>
    );
};

export default VisitsSearch;
