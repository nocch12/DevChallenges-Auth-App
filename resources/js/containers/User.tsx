import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth/useAuth";

import ProfileItem from "../components/ProfileItem";
import DeveloperInfo from "../components/DeveloperInfo";

const User = () => {
  const { state } = useAuth();

  return (
    <div className="pt-6 max-w-content mx-auto">
      <section className="text-black text-center mb-8">
        <h1 className="text-2xl mb-2 md:text-4xl">Personal info</h1>
        <p className="text-sm md:text-lg">
          Basic info, like your name and photo
        </p>
      </section>

      <section className="border-b md:border md:rounded-xl border-mygray-400">
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
                to="/user/edit"
              >
                Edit
              </NavLink>
            </div>
          </div>
        </div>

        {/* PHOTO */}
        <ProfileItem label="PHOTO">
          <div className="flex justify-end">
            {state.profile.image}
            <img
              className="h-18 w-18 rounded-md"
              src="aaa.jpg"
              alt="profile-image"
            />
          </div>
        </ProfileItem>

        {/* NAME */}
        <ProfileItem label="NAME">
          <p className="truncate">{state.profile.name}</p>
        </ProfileItem>

        {/* BIO */}
        <ProfileItem label="BIO">
          <p className="truncate">{state.profile.biography}</p>
        </ProfileItem>

        {/* BIO */}
        <ProfileItem label="PHOTO">
          <p className="truncate">{state.profile.phone}</p>
        </ProfileItem>

        {/* EMAIL */}
        <ProfileItem label="EMAIL">
          <p className="truncate">{state.profile.email}</p>
        </ProfileItem>

        {/* PASSWORD */}
        <ProfileItem label="PASSWORD" borderNone={true}>
          <p className="truncate">********</p>
        </ProfileItem>
      </section>

      <div className="px-5 md:px-0">
        <DeveloperInfo />
      </div>
    </div>
  );
};

export default User;
