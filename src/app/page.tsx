"use client";
import Modal from "@/components/addModal";
import Card from "@/components/card";
import appSelector from "@/lib/features/appSelector";
import { finishAddNewNote } from "@/lib/features/appSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { randomBytes } from "crypto";
import { useEffect } from "react";
let arr: [] = [];
type ITask = {
  id: number,
  tittle: {
    name: string;
  };
  body: {
    text: string;
  };
};
let currentDate = new Date().getTime();

let task: ITask = {
  id: currentDate,
  tittle: {
    name: "1 task",
  },
  body: {
    text: "to do something",
  },
};
export default function Home() {
  const value = useAppSelector(appSelector.getCount);
  const addNewNote = useAppSelector(appSelector.getAddNewNote);
  const modal = useAppSelector(appSelector.getModal);

  const dispatch = useAppDispatch();
  console.log("page value", value);

  useEffect(() => {
    if (addNewNote) {
      console.log("GET");
      arr.push(task);
    }
    dispatch(finishAddNewNote());
  }, [addNewNote]);

  console.log("arr", arr);
  console.log("modal", modal);

  return (
    <main>
      <div className=' mb-[100px] flex justify-around'>
        <div className=' grid xl:grid-cols-3 xl:gap-x-[200px] md:gap-[20px] md:grid-cols-2 sm:grid-cols-1'>
          {arr.map((item: any, key: any) => (
            <Card props={item} key={key} className=' border border-red-800' />
          ))}
          <Modal />
        </div>
      </div>
    </main>
  );
}
