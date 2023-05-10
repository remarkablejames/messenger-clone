import React from "react";
import { IconType } from "react-icons";

interface AuthSocialButton {
  icon: IconType;
  onClick: () => void;
}
const AuthSocialButton: React.FC<AuthSocialButton> = ({
  icon: Icon,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex w-full justify-center bg-white px-4 py-2 text-gray-500 hover:bg-gray-100 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      <Icon />
    </button>
  );
};

export default AuthSocialButton;
