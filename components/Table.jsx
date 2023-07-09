"use client";
import React from "react";
import { BsTrash } from "react-icons/bs";
const Table = ({ data, removeItem, dataType }) => {
  return (
    <>
      <div className="rounded-full">
        <table className="w-full rounded-lg bg-white bg-opacity-20 backdrop-blur-sm">
          <thead className=" bg-black bg-opacity-20 text-white">
            <tr className="">
              <th scope="col" className="px-6 py-3 text-left  uppercase">
                Name
              </th>
              <th scope="col" className="px-6 py-3 text-right  uppercase ">
                Action
              </th>
            </tr>
          </thead>

          <tbody className="outline outline-gold shadow-md text-white rounded-lg">
            {data.map((user) => (
              <tr
                className=" text-ellipsis hover:border-b-1 shadow-sm  shadow-gold rounded-lg"
                key={user}
              >
                <td className="p-2">{user}</td>
                <td className="p-2 flex flex-row justify-end m-1 mr-6">
                  <BsTrash
                    className="hover:text-red-500 hover"
                    onClick={() => removeItem(user, dataType)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
