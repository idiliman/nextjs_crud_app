import Head from "next/head";
import { BiUserPlus, BiCheck, BiX } from "react-icons/bi";
import Table from "../components/table";
import Form from "../components/form";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleChangeAction } from "../redux/reducer";
import { useMutation, useQueryClient } from "react-query";
import { deleteUser, getUsers } from "../lib/helper";

export default function Home() {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  // toggleChangeAction
  const visible = useSelector((state) => state.app.client.toggleForm);
  const deletedId = useSelector((state) => state.app.client.deletedId);

  // Call mutation (communicate with backend) and specify delete function
  const deleteMutation = useMutation((userId) => deleteUser(userId), {
    onSuccess: async (data) => {
      queryClient.prefetchQuery("userz", getUsers);
    },
  });

  // console.log("visible at index =", visible);

  const handler = () => {
    //Dispatch (trigger event)
    dispatch(toggleChangeAction());
  };

  const deleteHandler = async () => {
    console.log('Bye :(',deletedId);
    await deleteMutation.mutate(deletedId);
  };

  const cancelHandler = () => {};

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
          {/* {deletedId && deleteComponent({ deleteHandler, cancelHandler })} */}
          {deleteComponent({ deleteHandler, cancelHandler })}
        </div>

        <div className="container mx-auto">{visible === true && <Form />}</div>

        <div className="container mx-auto">
          <Table />
        </div>
      </main>
    </div>
  );
}

const deleteComponent = ({ deleteHandler, cancelHandler }) => {
  return (
    <div className="flex gap-5">
      <button>Are you sure?</button>
      <button
        onClick={deleteHandler}
        className="flex bg-red-500 text-white px-4 py-2 border rounded-md hover:bg-rose-500 hover:border-red-500 hover:text-gray-50"
      >
        Yes{" "}
        <span className="px-1">
          <BiX color="rgb(255 255 255)" size={25} />
        </span>
      </button>
      <button
        onClick={cancelHandler}
        className="flex bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-gree-500 hover:border-green-500 hover:text-gray-50"
      >
        No{" "}
        <span className="px-1">
          <BiCheck color="rgb(255 255 255)" size={25} />
        </span>
      </button>
    </div>
  );
};
