"use client";
import Table from "@/components/Table";
import { useState } from "react";

export default function Home() {
  const [userlist, setUserlist] = useState([]);
  const [loginlist, setloginlist] = useState([]);
  macteam = ["tanmay", "tanma2", "tanma3", "tanma4", "tana2", "tama2"];
  logins = ["RIL", "Gmail", "Phone", "Guest"];
  const addUsers = () => {
    console.log("woirs");
    setUserlist(macteam);
  };
  const addLogins = () => {
    setloginlist(logins);
  };

  console.log(userlist);
  return (
    <main className="flex m-6 min-h-screen flex-col gap-4 p-4">
      <div className="w-full flex justify-between">
        <button
          onClick={() => addUsers()}
          className="bg-yellow p-1 text-sm border-2 border-black rounded-full"
        >
          Add Mac Team
        </button>
        <button
          onClick={() => addLogins()}
          className="bg-yellow p-1 text-sm border-2 border-black rounded-full"
        >
          Add Logins
        </button>
      </div>
      <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {userlist.length ? (
          <>
            <Table users={userlist} />
          </>
        ) : (
          <h1 className="text-2xl text-center">
            No data, Please add something
          </h1>
        )}
        {loginlist.length ? (
          <>
            <Table users={logins} />
          </>
        ) : (
          <h1 className="text-2xl text-center">
            No data, Please add something
          </h1>
        )}
      </section>
    </main>
  );
}
