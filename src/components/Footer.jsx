import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div>
      <p className="font-bold text-gray-300 mt-4">
        {year} Lagos Labs LLC. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
