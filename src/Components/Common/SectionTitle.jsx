import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <div className="flex items-center justify-between mx-5 mt-8 mb-4 text-white">
      {/* Title */}
      <span className="text-lg font-medium leading-[26px]">{title}</span>

      {/* More Button */}
      <button
        className="flex items-center px-4 py-2 text-sm leading-6 bg-[#1f2429] text-white rounded-full hover:bg-[#2b3035] transition duration-200"
        aria-label="View more"
      >
        More
        <svg
          className="ml-2"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M11.5306 8.5306L6.5306 13.5306C6.3897 13.6715 6.19861 13.7506 5.99935 13.7506C5.80009 13.7506 5.60899 13.6715 5.4681 13.5306C5.3272 13.3897 5.24805 13.1986 5.24805 12.9993C5.24805 12.8001 5.3272 12.609 5.4681 12.4681L9.93747 7.99997L5.46935 3.5306C5.39958 3.46083 5.34424 3.37801 5.30649 3.28686C5.26873 3.19571 5.2493 3.09801 5.2493 2.99935C5.2493 2.90069 5.26873 2.80299 5.30649 2.71184C5.34424 2.62069 5.39958 2.53786 5.46935 2.4681C5.53911 2.39833 5.62194 2.34299 5.71309 2.30524C5.80424 2.26748 5.90194 2.24805 6.0006 2.24805C6.09926 2.24805 6.19696 2.26748 6.28811 2.30524C6.37926 2.34299 6.46208 2.39833 6.53185 2.4681L11.5318 7.4681C11.6017 7.53786 11.6571 7.62072 11.6948 7.71193C11.7326 7.80313 11.7519 7.9009 11.7518 7.99961C11.7517 8.09832 11.7321 8.19603 11.6941 8.28715C11.6562 8.37827 11.6006 8.461 11.5306 8.5306Z"></path>
        </svg>
      </button>
    </div>
  );
};

export default SectionTitle;
