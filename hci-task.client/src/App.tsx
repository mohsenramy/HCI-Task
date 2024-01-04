import { useEffect, useState } from 'react';
import './App.css';
import VisitsList from './components/VisitsList';
import VisitsSearch from './components/VisitsSearch';
import VisitDetails from './components/VisitDetails';

function App() {

    useEffect(() => {

    }, []);

    return (
        <main>
            <section className="flex flex-col m-auto  shadow-md shadow-gray-300" >
                <div className="flex bg-gray-200 p-3 justify-between items-center rounded-t-md">
                    <h1 className="text-xl">HCI hospital visit search</h1>
                    <div className="rounded-none rounded-b-md">Current User:
                        <select name="user" className="m-2 px-1">
                            <option value='1'>User_01</option>
                            <option value='2'>User_02</option>
                        </select></div>
                </div>
                <div className="bg-slate-200 p-2 gap-3 over">
                    <div><VisitsSearch /></div>
                    <div><VisitsList /></div>
                    <VisitDetails />
                </div>
            </section>
        </main>
    );

}

export default App;