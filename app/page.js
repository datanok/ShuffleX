"use client";
import ParticlesBg from "@/components/ParticlesBg";
import PopUp from "@/components/PopUp";
import Table from "@/components/Table";
import { useState } from "react";
import { AiOutlineClear } from "react-icons/ai";
import { ImShuffle } from "react-icons/im";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    !newUser
      ? toast.warning("Name cannot be empty", {
          style: {
            backgroundColor: "rgba(45, 46, 51, 0.9)",
            color: "#FBE4A6",
            borderLeft: "5px solid #FBE4A6",
          },
          autoClose: 1000,
          hideProgressBar: true,
          toastId: "name empty",
        })
      : setUserlist((prevUserList) => {
          if (prevUserList.includes(newUser)) {
            toast.warning("Name already exists", {
              style: {
                backgroundColor: "rgba(45, 46, 51, 0.9)",
                color: "#FBE4A6",
                borderLeft: "5px solid #FBE4A6",
              },
              autoClose: 1000,
              hideProgressBar: true,
              toastId: "name exists",
            });
            return prevUserList;
          }
          SetNewUser("");
          return [...prevUserList, newUser];
        });
  };

  const removeUser = (user) => {
    removeItem(user, "user");
  };
  const addLogin = () => {
    !newLogin
      ? toast.warning("Login cannot be empty", {
          style: {
            backgroundColor: "rgba(45, 46, 51, 0.9)",
            color: "#FBE4A6",
            borderLeft: "5px solid #FBE4A6",
          },
          autoClose: 1000,
          hideProgressBar: true,
          toastId: "empty",
        })
      : setloginlist((prevLoginList) => [...prevLoginList, newLogin]);
    setnewLogin("");
  };

  //submit on enter
  const handleUserkeypress = (event) => {
    if (event.key === "Enter") addUser();
  };
  const handleLoginkeypress = (event) => {
    if (event.key === "Enter") addLogin();
  };

  const removeLogin = (login) => {
    removeItem(login, "login");
  };

  return (
    <main className="flex m-1 md:m-6 flex-col gap-4 flex-1 p-2 md:p-4">
      <ToastContainer />
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
        <button onClick={() => clearAll()} className="text-gold">
          <AiOutlineClear size={30} />
        </button>
      </div>
      <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-4 w-full">
          <div className="flex gap-2">
            <input
              type="text"
              onChange={(e) => SetNewUser(e.target.value.trim())}
              placeholder="Enter Name"
              value={newUser}
              maxLength={50}
              onKeyDown={handleUserkeypress}
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
            <h1 className="text-xl text-center text-gold">
              No data, Please add something
            </h1>
          )}
        </div>
        <div className="flex gap-4 flex-col w-full">
          <div className="flex gap-2">
            <input
              type="text"
              onChange={(e) => setnewLogin(e.target.value.trim())}
              value={newLogin}
              placeholder="Enter Login"
              onKeyDown={handleLoginkeypress}
              maxLength={50}
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
            <h1 className="text-xl text-center text-gold">
              No data, Please add something
            </h1>
          )}
        </div>
      </section>
    </main>
  );
}
