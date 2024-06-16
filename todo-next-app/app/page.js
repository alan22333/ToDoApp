"use client";
import Todo from "@/components/Todo";
import { useState } from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {


  const [formData,setFormdata] = useState({
    title:"",
    description:""
  });

  const onChangeHandler = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setFormdata(form => ({...form,[name]:value}));
  }

  const onSubmitHandler = async(e) => {
    e.preventDefault();
    try {
      //api code
      


      toast.success('Success!')
    } catch (error) {
      
    }

  }

  return (
    <>
      <ToastContainer theme="dark"/>
      <form onSubmit={onSubmitHandler} className="flex item-start flex-col gap-2 w-[80%] max-w-[600px] mt-24 px-2 mx-auto">
        <input type="text" name="title" placeholder="Enter title"
               className="px-3 py-2 border-2 w-full rounded-md"
               onChange={onChangeHandler}/>
        <textarea name="description" placeholder="Enter description"
                  className="px-3 py-2 border-2 w-full h-[100px] rounded-md"
                  onChange={onChangeHandler}/>
        <button type="submit" 
        className="bg-orange-600 px-3 py-2 w-full rounded-md shadow-black shadow-md">Add Todo</button>
      </form>
      <div className="relative overflow-x-auto mt-4 w-[60%] mx-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                      <th scope="col" className="px-6 py-3">
                          Id
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Title
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Description
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Status
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Action
                      </th>
                  </tr>
              </thead>
              <tbody>
                  <Todo/>
                  <Todo/>
                  <Todo/>
                  <Todo/>
                  <Todo/>
              </tbody>
          </table>
      </div>

    </>
  );
}
