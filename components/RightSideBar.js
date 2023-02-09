import React from "react";
import { RiVideoAddFill } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";
import { CgMoreAlt } from "react-icons/cg";
import Contacts from "./Contacts";

const RightSideBar = () => {
  return (
    <div className="hidden md:inline-flex flex-col pt-4 max-w-xl md:min-w-[200px] lg:min-w-[250px]">
      <div className="flex items-center text-gray-500">
        <p className="flex text-lg font-semibold flex-grow">Contacts</p>
        <div className="flex space-x-1 px-2">
          <div className="rounded-full p-2 hover:bg-gray-200 cursor-pointer">
            <RiVideoAddFill></RiVideoAddFill>
          </div>
          <div className="rounded-full p-2 hover:bg-gray-200 cursor-pointer">
            <BiSearch></BiSearch>
          </div>
          <div className="rounded-full p-2 hover:bg-gray-200 cursor-pointer">
            <CgMoreAlt></CgMoreAlt>
          </div>
        </div>
      </div>
      <Contacts
        src="https://images.pexels.com/photos/1322543/pexels-photo-1322543.jpeg?auto=compress&cs=tinysrgb&w=800"
        name="Althrun Sun"
        status="Online"
      ></Contacts>
      <Contacts
        src="https://images.pexels.com/photos/14875472/pexels-photo-14875472.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
        name="Leona"
        status="Online"
      ></Contacts>
      <Contacts
        src="https://images.pexels.com/photos/1018911/pexels-photo-1018911.jpeg?auto=compress&cs=tinysrgb&w=800"
        name="Ken Wang"
        status="Offline"
      ></Contacts>
      
      <Contacts
        src="https://images.pexels.com/photos/1572878/pexels-photo-1572878.jpeg?auto=compress&cs=tinysrgb&w=800"
        name="Melody"
        status="Online"
      ></Contacts>
    </div>
  );
};

export default RightSideBar;
