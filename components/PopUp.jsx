export default function Popup({ shuffledList, handleClose }) {
  return (
    <>
      <div
        id="defaultModal"
        tabIndex="-1"
        aria-hidden="true"
        className="fixed bg-black bg-opacity-60 flex justify-center items-center z-50 w-full overflow-x-hidden md:inset-0 max-h-full"
      >
        <div className="relative w-full max-w-2xl max-h-full">
          <div className="relative bg-[#2D2E33] rounded-lg shadow">
            <div className="flex items-start justify-between p-4 border-b border-gold rounded-t">
              <h3 className="text-xl font-semibold text-gold">
                Shuffled Users
              </h3>
              <button
                type="button"
                className="text-gold bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                data-modal-hide="defaultModal"
                onClick={handleClose}
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div className="flex flex-col">
                <div className="-m-1.5 overflow-x-auto shadow-lg rounded-lg">
                  <div className="p-1.5 min-w-full inline-block align-middle">
                    <div className="overflow-auto max-h-[400px]">
                      <table className="min-w-full">
                        <thead className="border-b">
                          <tr>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-md font-bold text-gold uppercase"
                            >
                              Name
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-md font-bold text-gold uppercase"
                            >
                              Login
                            </th>
                          </tr>
                        </thead>
                        <tbody className="">
                          {shuffledList.map((user, index) => (
                            <tr key={index} className="border-b rounded-lg">
                              <td className="px-6  py-4 whitespace-nowrap text-md font-medium text-gray-300">
                                {user.user}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-md font-medium text-gray-300">
                                {user.login}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
