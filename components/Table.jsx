"use client";
import React from "react";
import { BsTrash } from "react-icons/bs";
const Table = ({ users }) => {
  console.log(users);
  return (
    <>
      <div className="rounded-lg outline">
        <table className="w-full ">
          <thead className="">
            <tr className="bg-brown">
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium uppercase"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-right text-xs font-medium uppercase "
              >
                Action
              </th>
            </tr>
          </thead>

          <tbody className="outline rounded-lg">
            {users.map((user) => (
              <tr
                className=" shadow-sm hover:shadow-md shadow-brown rounded-lg"
                key={user}
              >
                <td className="p-2">{user}</td>
                <td className="p-2 flex flex-row justify-end m-1 mr-6">
                  <BsTrash className="hover:text-red-500 hover" />
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
