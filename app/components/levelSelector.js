import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const LevelSelector = () => {
    return(
        <div className="bg-white rounded-lg shadow mx-4">
            <div className="w-62 mx-auto max-w-screen-xl p-2">
                <div className="drop-shadow-lg shadow w-28 rounded-lg bg-white p-2">Level Select</div>         
                <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="drop-shadow-lg shadow text-white mt-2 bg-midnightblue hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center w-48" type="button">
                    <div className="flex space-x-24 items-center justify-center flex">
                      <h1>Select</h1>
                      <FontAwesomeIcon icon={faAngleDown}/>
                    </div>
                </button>
{/* <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
    <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownDefaultButton">
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100">Dashboard</a>
      </li>
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100">Settings</a>
      </li>
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100">Earnings</a>
      </li>
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100">Sign out</a>
      </li>
    </ul>
</div> */}

            </div>
        </div>
    );
};

export default LevelSelector;