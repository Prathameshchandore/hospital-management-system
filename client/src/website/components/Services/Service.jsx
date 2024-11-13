// src/components/DynamicTalentHub.jsx
import React from "react";
import dashboard from '../../assets/images/Dashboard.png';


const DynamicTalentHub = ({advertisements}) => {

console.log(advertisements)

  console.log()
  return (
    <>
      <div className="from-purple-100 to-pink-50 flex flex-col items-center justify-center h-full">
        <h2 className="text-3xl font-bold text-center">
          Our Product Services
        </h2>
        <p className="text-center text-gray-600">
          Let’s see what our happy patients say
        </p>
      </div>

      <section className=" from-purple-100 to-pink-50 flex flex-col md:flex-row justify-between items-center py-10">
        {/* Left Section */}
        <div className="w-full md:w-1/2 px-4">
          {/* Services */}
          <div className="space-y-6 p-5">

            {advertisements.map((item) => (
              <ServiceCard
                title={item.title}
                description={item.description}
                icon={item.imageUrl}
              />
            )
            )}
          </div>
        </div>

        {/* Right Section (Dynamic Talent Hub) */}
        <div className="md:w-1/2 flex justify-center items-center mt-10 md:mt-0">
          <div className="p-5 max-w-xxl md:max-w-xxl flex flex-col items-center">
            <div className="relative w-full max-w-xl">
              <img
                src={dashboard}
                alt="Dynamic Talent Hub"
                className="w-full h-auto rounded-lg shadow-md mb-4 border border-gray-600"
              />
            </div>
            <h1 className="font-bold text-lg lg:text-3xl text-center mb-4">
              Dynamic Talent Hub
            </h1>
            <p className="text-sm text-center lg:text-lg text-gray-600 mb-6">
              Welcome to our dynamic talent hub, where innovation and expertise
              converge to create a powerful ecosystem for connecting top-tier
              talent with unparalleled opportunities.
            </p>
          </div>
        </div>
      </section>

      <div className="from-purple-100 to-pink-50 flex flex-col items-center justify-center h-full">
        <button className="mt-4 px-6 py-2 bg-green-500 text-white font-semibold rounded-lg m-10 hover:bg-green-600">
          See More
        </button>
      </div>
    </>
  );
};

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="flex items-center space-x-4 p-10 rounded-lg shadow-md hover:shadow-xl transition-shadow bg-purple-50 duration-300 ">
      <img
                src={icon}
                alt="Dynamic Talent Hub"
                className="w-12 h-12 rounded-lg shadow-md mb-4 border border-gray-600 items-center"
              />
      <div>
        <h4 className="text-xl font-bold">{title}</h4>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default DynamicTalentHub;
