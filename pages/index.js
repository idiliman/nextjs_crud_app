import Head from "next/head";
import { BiUserPlus } from "react-icons/bi";
import Table from "../components/table";
import Form from "../components/form";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleChangeAction } from "../redux/reducer";

export default function Home() {
  const visible = useSelector((state) => state.app.client.toggleForm);
  const dispatch = useDispatch();

  console.log("visible =", visible);

  const handler = () => {
    dispatch(toggleChangeAction());
  };

  return (
    <div>
      <Head>
        <title>CRUD Application</title>
      </Head>

      <main className="flex flex-col py-5">
        <h1 className="text-xl md:text-5xl text-center font-bold py-10">
          Employee Management
        </h1>

        <div className="container mx-auto flex justify-between py-5 border-b">
          <div className="left flex gap-3">
            <button
              onClick={handler}
              className="flex items-center bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-indigo-600"
            >
              Add Employee
              <span className="p-1">
                <BiUserPlus size={23}></BiUserPlus>
              </span>
            </button>
          </div>
        </div>

        <div className="container mx-auto">{visible === true && <Form />}</div>

        <div className="container mx-auto">
          <Table />
        </div>
      </main>
    </div>
  );
}
