import React from "react";
import { NavLink } from "react-router-dom";

import ProfileItem from "../components/ProfileItem";

const User = () => {
  return (
    <div className="pt-6">
      <section className="text-black text-center mb-8">
        <h1 className="text-2xl mb-2">Personal info</h1>
        <p className="text-sm">Basic info, like your name and photo</p>
      </section>

      <section>
        <div className="p-5 border-b border-mygray-400">
          {/* TITLE */}
          <div className="flex items-center">
            <div className="flex-grow">
              <h2 className="text-2xl mb-1">Profile</h2>
              <p className="text-sm text-mygray-100">
                Some info may be visible to other people
              </p>
            </div>
            <div className="w-56 text-right">
              <NavLink
                className="border rounded-lg border-mygray-100 text-mygray-100 text-center py-2 px-6"
                to="user"
              >
                Edit
              </NavLink>
            </div>
          </div>
        </div>

        {/* PHOTO */}
        <ProfileItem label="PHOTO">
          <div className="flex justify-end">
            <img className="h-18 w-18 rounded-md" src="aaa.jpg" alt="" />
          </div>
        </ProfileItem>

        {/* NAME */}
        <ProfileItem label="NAME">
          <p className="truncate">
            KOHKI OHNOOHNOOHNOOHNOOHNOOHNOOHNOOHNOOHNOOHNO
          </p>
        </ProfileItem>

        {/* BIO */}
        <ProfileItem label="BIO">
          <p className="truncate">
            KOHKI OHNOOHNOOHNOOHNOOHNOOHNOOHNOOHNOOHNOOHNO
          </p>
        </ProfileItem>

        {/* EMAIL */}
        <ProfileItem label="EMAIL">
          <p className="truncate">
            KOHKI OHNOOHNOOHNOOHNOOHNOOHNOOHNOOHNOOHNOOHNO
          </p>
        </ProfileItem>

        {/* PASSWORD */}
        <ProfileItem label="PASSWORD">
          <p className="truncate">
            ********
          </p>
        </ProfileItem>
      </section>
    </div>
  );
};

export default User;
