import React, { useState, useEffect, useCallback } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth/useAuth";
import { Iprofile } from "../types";

import ProfileInput from "../components/ProfileInput";
import Button from "../components/Button";

const Edit: React.FC = () => {
  const { state } = useAuth();
  const [profile, setProfile] = useState({} as Iprofile);
  const [password, setPassword] = useState("");

  useEffect(() => {
    setProfile(state.profile);
  }, [setProfile]);

  const inputHandler = useCallback(
    (key: string, e: React.ChangeEvent<any>) => {
      if(key ==="password") {
        return setPassword(e.target.value);
      }

      let newProfile = { ...profile, [key]: e.target.value || "" };
      setProfile(newProfile);
    },
    [profile, setProfile]
  );

  return (
    <div className="pt-6 max-w-content mx-auto px-5 md:px-0">
      <div>
        <NavLink className="text-myblue-200" to="/user">&lt; Back</NavLink>
      </div>

      <section className="md:border md:rounded-xl border-mygray-400 md:px-14 md:py-12">
        <div className="mb-6">
          <h2 className="text-2xl mb-1">Change Info</h2>
          <p className="text-sm text-mygray-100">
            Changes will be reflected to every services
          </p>
        </div>

        <div className="mb-6 flex items-center">
          <div className="h-18 w-18">

          </div>
          <div>
            <p className="text-sm text-mygray-100">CHANGE PHOTO</p>
          </div>
        </div>
        <div className="mb-6">
          <ProfileInput
            type="text"
            label="Name"
            name="name"
            value={profile.name || ""}
            placeholder="Enter your name..."
            changed={(e: React.ChangeEvent) => {
              inputHandler("name", e);
            }}
          />
        </div>
        <div className="mb-6">
          <ProfileInput
            type="text"
            label="Phone"
            name="phone"
            value={profile.phone || ""}
            placeholder="Enter your phone..."
            changed={(e: React.ChangeEvent) => {
              inputHandler("phone", e);
            }}
          />
        </div>
        <div className="mb-6">
          <ProfileInput
            type="email"
            label="Email"
            name="email"
            value={profile.email || ""}
            placeholder="Enter your email..."
            changed={(e: React.ChangeEvent) => {
              inputHandler("email", e);
            }}
          />
        </div>
        <div className="mb-8">
          <ProfileInput
            type="password"
            label="Password"
            name="password"
            value={password || ""}
            placeholder="Enter your new password..."
            changed={(e: React.ChangeEvent) => {
              inputHandler("password", e);
            }}
          />
        </div>
        <div className="md:w-16 w-full">
          <Button>Save</Button>
        </div>
      </section>
    </div>
  );
};

export default Edit;
