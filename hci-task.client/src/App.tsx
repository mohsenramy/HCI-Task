import { useEffect, useState } from "react";
import "./App.css";
import VisitsList from "./components/VisitsList";
import VisitsSearch from "./components/VisitsSearch";
import VisitDetails from "./components/VisitDetails";
import Select from "react-select";
import { User } from "./@types/userTypes";
import { usersAPI } from "./api/usersAPI";
import { OptionType, SelectOptions } from "./@types/otherTypes";

function App() {
    const [usersOptions, setUsersOptions] = useState<SelectOptions[]>([]);
    const [selectedUserOption, setSelectedUserOption] =
        useState<OptionType | null>(null);

    useEffect(() => {
        populateWeatherData();
    }, []);

    const loadUserOptions = async () => {
        const users = await usersAPI.retrieveUsers();
        const usersOpts = users.map((u) => {
            return {
                label: u.userName,
                value: u.id,
            };
        });
        console.log({ usersOpts });
        setUsersOptions(usersOpts);
        setSelectedUserOption(usersOpts[0]);
    };
    useEffect(() => {
        loadUserOptions();
    }, []);

    return (
        <main>
            <section className="flex flex-col m-auto  shadow-md shadow-gray-300">
                <div className="flex bg-gray-200 p-3 justify-between items-center rounded-t-md">
                    <h1 className="text-xl">HCI hospital visit search</h1>
                    <div className="rounded-none rounded-b-md">
                        Current User:
                        <Select
                            value={selectedUserOption}
                            onChange={((selected: OptionType | null) => setSelectedUserOption(selected))}
                            className="w-[200px]"
                            options={usersOptions}
                        />
                        {/*{usersOptions?.map(uo => {*/}

                    </div>
                </div>
                <div className="bg-slate-200 p-2 gap-3 over">
                    <VisitsSearch />

                    <VisitDetails />
                </div>
            </section>
        </main>
    );

    async function populateWeatherData() {
        const response = await fetch("api/user");
        const data = await response.json();
        setForecasts(data);
    }
}

export default App;
