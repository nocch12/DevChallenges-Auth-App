import React, { useState, useEffect, useCallback, useMemo } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth/useAuth";
import { Iprofile } from "../types";
import axios from "axios";

import CameraAlt from '@material-ui/icons/CameraAlt';
import ProfileInput from "../components/ProfileInput";
import ProfileTextarea from "../components/ProfileTextarea";
import Button from "../components/Button";

const Edit: React.FC = () => {
  const { state } = useAuth();
  const [profile, setProfile] = useState({} as Iprofile);
  const [photo, setPhoto] = useState<any>(null);
  const [password, setPassword] = useState("");

  useEffect(() => {
    setProfile(state.profile);
    setPhoto(state.profile.photo);
  }, [setProfile, setPhoto]);

  const setProfileHandler = useCallback(
    (key: string, value: string) => {
      let newProfile = { ...profile, [key]: value || "" };
      setProfile(newProfile);
    },
    [profile, setProfile]
  );

  const inputHandler = useCallback(
    (key: string, e: React.ChangeEvent<any>) => {
      if (key === "password") {
        return setPassword(e.target.value);
      }
      setProfileHandler(key, e.target.value);
    },
    [setPassword, setProfileHandler]
  );

  const submitHandler = (e: React.FormEvent) => {
    console.log(photo);

    e.preventDefault();
    const fd = new FormData();
    fd.append("name", profile.name);
    fd.append("biography", profile.biography);
    fd.append("phone", profile.phone);
    password && fd.append("password", password);
    photo && fd.append("photo", photo);

    axios
      .post("/api/user", fd)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err.response);
      });
  };

  const changePhotoHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      const files = e.target.files;
      if (!files || !files.length) return false;
      const file = files[0];

      setPhoto(file);
      setProfileHandler("photo", file.name);
    },
    [setPhoto, setProfileHandler]
  );

  const photoPreview = useMemo(() => {
    switch (true) {
      case photo instanceof Blob:
        return URL.createObjectURL(photo);
      case typeof photo === 'string':
        console.log(photo);

        return `../storage/profile_photo/${state.profile.id}/${photo}`;
      default:
        return "";
    }
  }, [state, photo]);
  console.log(photoPreview);


  return (
    <div className="pt-6 max-w-content mx-auto px-5 md:px-0">
      <div>
        <NavLink className="text-myblue-200" to="/user">
          &lt; Back
        </NavLink>
      </div>

      <section className="md:border md:rounded-xl border-mygray-400 md:px-14 md:py-12">
        <div className="mb-6">
          <h2 className="text-2xl mb-1">Change Info</h2>
          <p className="text-sm text-mygray-100">
            Changes will be reflected to every services
          </p>
        </div>

        <form onSubmit={submitHandler}>
          <div className="mb-6 flex items-center">
            <label htmlFor="photo" className="h-18 w-18 rounded-lg overflow-hidden relative cursor-pointer">
              <img className="absolute w-full h-full top left" src={photoPreview} alt="" />
              <div className="flex items-center justify-center absolute w-full h-full top left bg-black bg-opacity-25">
                <CameraAlt className="text-white" />
              </div>
            </label>
            <input id="photo" className="hidden" type="file" onChange={changePhotoHandler} />
            <div className="ml-8">
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
            <ProfileTextarea
              label="Bio"
              name="biography"
              value={profile.biography || ""}
              placeholder="Enter your bio..."
              rows="3"
              changed={(e: React.ChangeEvent) => {
                inputHandler("biography", e);
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
              disabled={true}
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
            <Button type="submit">Save</Button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Edit;
