import { useEffect, useState } from "react";
import Select from "react-select";
import { usersAPI } from "../api/usersAPI";
import { OptionType } from "../@types/otherTypes";
import VisitsSearch from "../components/VisitsSearch";
import PageContainer from "../components/PageContainer";

const HomePage = () => {
  const [usersOptions, setUsersOptions] = useState<OptionType[]>([]);
  const [selectedUserOption, setSelectedUserOption] =
    useState<OptionType | null>(null);
  const [loading, setLoading] = useState(false);

  const loadUserOptions = async () => {
    try {
      setLoading(true);
      const users = await usersAPI.retrieveUsers();
      const usersOpts: OptionType[] = users.map((u) => {
        return {
          label: u.userName,
          value: u.id.toString(),
        };
      });
      setUsersOptions(usersOpts);
      setSelectedUserOption(usersOpts[0]);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    loadUserOptions();
  }, []);

  return (
    <PageContainer>
      <div className="flex flex-col m-4 h-[100%] bg-white border-gray-500 border-2 rounded-md p-4 font-semibold">
        {loading ? (
          <div className='flex justify-center items-center text-gray-500 h-16' data-testid='loading'>
            Retrieving Data ...
          </div>
        ) : usersOptions.length > 0 ? (
          <>
            <div className="flex justify-between border-b-2 px-1">
              <h2 className="font-bold text-lg">HOME</h2>
              <div className="rounded-none rounded-b-md flex items-center mb-1 text-sm font-semibold">
                Current User:{" "}
                <Select
                  data-testid='users-select'
                  value={selectedUserOption}
                  onChange={(selected: OptionType | null) =>
                    setSelectedUserOption(selected)
                  }
                  className="ml-1 w-[200px]"
                  options={usersOptions}
                />
              </div>
            </div>
            <div className=" p-2 gap-3 over">
              <VisitsSearch
                selectedUser={
                  selectedUserOption?.value ? selectedUserOption.value : ""
                }
              />
            </div>
          </>
        ) : (<div className='flex justify-center items-center text-red-400 h-16'>
          Failed to retrieve Data!
        </div>)}
      </div>
    </PageContainer>
  );
};

export default HomePage;
