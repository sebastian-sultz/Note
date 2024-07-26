"use client";

import appSelector from "@/lib/features/appSelector";
import { increment, openModal, startAddNewNote } from "@/lib/features/appSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import Image from "next/image";

//-ml-[100px] -mr-[100px]
const Header = () => {
  const dispatch = useAppDispatch();
  const value = useAppSelector(appSelector.getCount);
  const handleClick = () => dispatch(openModal());

  return (
    <header className='-ml-[60px] -mr-[100px]'>
      <div className='navbar bg-base-100   '>
        <div className='flex-1  align-baseline '>
          <a className=' font-bold  text-xl text-black'>noteTaker</a>
          <a
            className='   btn text-xl ml-[100px] text-black'
            onClick={handleClick}>
            + Add Note
          </a>
          <a className='   btn text-xl ml-[100px] text-black'>
            Note count: {value}
          </a>

          {/* <a className='btn  btn-nav text-xl text-black'>noteTaker</a> */}
        </div>
        <div className='flex-none gap-2'>
          <div className='form-control  text-primary'>
            <input
              type='text'
              placeholder='Search'
              className='input input-bordered w-24 md:w-auto placeholder-primary bg-black'
            />
          </div>
          <div className='dropdown dropdown-end'>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost btn-circle avatar'>
              <div className='w-10 rounded-full'>
                <img
                  alt='Tailwind CSS Navbar component'
                  src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className='mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-primary rounded-box w-52'>
              <li>
                <a className='justify-between'>
                  Profile
                  <span className='badge bg-green-400'>New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
