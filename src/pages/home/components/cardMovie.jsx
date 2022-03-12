import React from "react";

export default function CardMovie({ image, title }) {
  return (
    <div>
      <img className="w-36 h-40 rounded-md" src={image} />
      <p className="text-xs w-36 font-semibold">{title}</p>
    </div>
  );
}
