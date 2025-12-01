import React from "react";

const achievements = [
  { number: "1000+", title: "Products" },
  { number: "500+", title: "Happy Customers" },
  { number: "50+", title: "Brands" },
  { number: "24/7", title: "Support" },
];

const Achievements = () => {
  return (
    <section className="py-16 bg-gray-50 my-7 rounded-lg">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
          Our Achievements
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg py-8 flex flex-col items-center justify-center hover:scale-105 transform transition duration-300"
            >
              <h3 className="text-3xl sm:text-4xl font-bold mb-2">
                {item.number}
              </h3>
              <p className="text-gray-600 text-lg">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
