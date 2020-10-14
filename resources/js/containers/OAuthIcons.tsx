import React from "react";
import { useAuth } from "../store/auth/useAuth";

import SocialButton from "../components/SocialButton";

const OAuthIcons: React.FC = () => {
  const { oauth } = useAuth();

  return (
    <div className="flex justify-between">
      <SocialButton type="google" clicked={() => oauth("google")} />
      <SocialButton type="facebook" clicked={() => oauth("facebook")} />
      <SocialButton type="twitter" clicked={() => oauth("twitter")} />
      <SocialButton type="github" clicked={() => oauth("github")} />
    </div>
  );
};

export default OAuthIcons;
