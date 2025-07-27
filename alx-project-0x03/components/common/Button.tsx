import React from "react";
import { ButtonProps } from "@/interface";

const Button: React.FC<ButtonProps> = ({ buttonLabel, buttonBackgroundColor, action }) => {
  return (
    <button
      onClick={action}
      className={`text-white py-2 px-4 rounded font-semibold bg-${buttonBackgroundColor}-500 hover:bg-${buttonBackgroundColor}-600`}
    >
      {buttonLabel}
    </button>
  );
};

export default Button;
