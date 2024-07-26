import appSelector from "@/lib/features/appSelector";
import { openModal } from "@/lib/features/appSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import React from "react";

const Card = ({ props }: any, key: any) => {
  // console.log(props)
  const dispatch = useAppDispatch();
  const value = useAppSelector(appSelector.getCount);
  const handleClick = () => dispatch(openModal());
  return (
    <div>
      <div className='card w-96 bg-primary shadow-xl mt-[100px] hover:scale-110 transition duration-[500ms] '>
        <div className='card-body'>
          <h2 className='card-title'>{props.tittle.name}</h2>
          <p>ID Modal is {props.id}</p>
          <div className='card-actions  justify-around'>
            <button className='btn btn-neutral'onClick={handleClick}>Edit</button>
            <button className='btn btn-secondary'>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
