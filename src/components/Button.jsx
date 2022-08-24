import React from "react";

function Button({ text, event, type }) {
  return (
    <button
      className="w-40 h-10 max-w-sm text-primary transition-all duration-700 border-primary border rounded-3xl hover:w-3/4 hover:border-transparent hover:text-white hover:bg-primary"
      onClick={event}
      type={type}
    >
      {text}
    </button>
  );
}

export default Button;
