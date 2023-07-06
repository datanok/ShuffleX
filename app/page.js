"use client";
import ParticlesBg from "@/components/ParticlesBg";
import PopUp from "@/components/PopUp";
import Table from "@/components/Table";
import { useState } from "react";
import { ImShuffle } from "react-icons/im";

export default function Home() {
  const [userlist, setUserlist] = useState([]);
  const [loginlist, setloginlist] = useState([]);
  const [shuffledList, setShuffledList] = useState([]);
  const [newUser, SetNewUser] = useState("");

  const [newLogin, setnewLogin] = useState("");
  const [open, setOpen] = useState(false);
  let macteam = [
    "Tanmay",
    "Aaryan",
    "Chinmay",
    "Kedar",
    "Subh",
    "Manas",
    "Dhrumi",
    "Nilima",
    "Anushka",
  ];
  let logins = ["RIL", "Gmail", "Phone", "Guest"];

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Assign logins to users randomly
  const assignLoginsToUsers = () => {
    const shuffledLogins = shuffleArray([...loginlist]); // Create a shuffled copy of login list
    const assignedUsers = userlist.map((user, index) => {
      const loginIndex = index % shuffledLogins.length; // Loop back to the beginning of login list if needed
      const assignedLogin = shuffledLogins[loginIndex];
      return {
        user,
        login: assignedLogin,
      };
    });
    setShuffledList(assignedUsers);
    setOpen(true);
    return assignedUsers;
  };

  const clearAll = () => {
    setUserlist([]);
    setloginlist([]);
  };
  const addUsers = () => {
    setUserlist(macteam);
  };

  const removeItem = (item, dataType) => {
    if (dataType === "user") {
      setUserlist((prevUserList) =>
        prevUserList.filter((user) => user !== item)
      );
    } else if (dataType === "login") {
      setloginlist((prevLoginList) =>
        prevLoginList.filter((login) => login !== item)
      );
    }
  };

  const addLogins = () => {
    setloginlist(logins);
  };

  const addUser = () => {
    setUserlist((prevUserList) => [...prevUserList, newUser]);
  };

  const removeUser = (user) => {
    removeItem(user, "user");
  };
  const addLogin = () => {
    setloginlist((prevLoginList) => [...prevLoginList, newLogin]);
  };

  const removeLogin = (login) => {
    removeItem(login, "login");
  };

  return (
    <main className="flex m-6 flex-col gap-4 flex-1 p-4">
      {open && <PopUp handleClose={handleClose} shuffledList={shuffledList} />}
      <ParticlesBg />

      <div className="w-full flex justify-between">
        <button
          onClick={() => addUsers()}
          className=" bg-white bg-opacity-10 backdrop-blur-sm text-sm border  border-gold text-gold hover:text-black hover:font-bold hover:bg-gold p-2 rounded-full"
        >
          Add Mac Team
        </button>
        <button
          onClick={() => assignLoginsToUsers()}
          className="bg-white bg-opacity-10 px-5 text-sm backdrop-blur-sm border border-gold text-gold hover:text-black hover:font-bold hover:bg-gold  p-2  rounded-full"
        >
          <ImShuffle />
        </button>
        <button
          onClick={() => addLogins()}
          className="bg-white bg-opacity-10 text-sm backdrop-blur-sm border border-gold text-gold hover:text-black hover:font-bold hover:bg-gold  p-2 rounded-full"
        >
          Add Logins
        </button>
      </div>
      <div className="flex justify-end">
        <button
          onClick={() => clearAll()}
          className="bg-white bg-opacity-10 text-sm backdrop-blur-sm border border-gold text-gold hover:text-black hover:font-bold hover:bg-gold  p-2 rounded-full"
        >
          Clear All
        </button>
      </div>
      <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-4 w-full">
          <div className="flex gap-2">
            <input
              type="text"
              onChange={(e) => SetNewUser(e.target.value)}
              placeholder="Enter Name"
              className=" bg-white bg-opacity-10 backdrop-blur-sm w-full p-2 pl-4 text-gray-300 rounded-full"
            ></input>
            <button
              onClick={() => addUser()}
              className="bg-white bg-opacity-10 backdrop-blur-sm border border-gold text-gold hover:text-black hover:font-bold hover:bg-gold  p-2  px-7 rounded-full"
            >
              Add
            </button>
          </div>
          {userlist.length ? (
            <>
              <Table data={userlist} removeItem={removeUser} dataType="user" />
            </>
          ) : (
            <h1 className="text-2xl text-center text-gold">
              No data, Please add something
            </h1>
          )}
        </div>
        <div className="flex gap-4 flex-col w-full">
          <div className="flex gap-2">
            <input
              type="text"
              onChange={(e) => setnewLogin(e.target.value)}
              placeholder="Enter Login"
              className="bg-white bg-opacity-10 w-full backdrop-blur-sm  p-2 pl-4 text-gray-300 rounded-full"
            ></input>
            <button
              onClick={() => addLogin()}
              className="bg-white bg-opacity-10 backdrop-blur-sm border border-gold text-gold hover:text-black hover:font-bold hover:bg-gold  p-2  px-7 rounded-full"
            >
              Add
            </button>
          </div>
          {loginlist.length ? (
            <>
              <Table
                data={loginlist}
                removeItem={removeLogin}
                dataType="login"
              />
            </>
          ) : (
            <h1 className="text-2xl text-center text-gold">
              No data, Please add something
            </h1>
          )}
        </div>
      </section>
    </main>
  );
}
