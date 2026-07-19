import React from 'react';

export function Team() {
  const teamMembers = [
    {
      name: "Lorem ipsum",
      role: "Dolor sit amet",
      imageUrl: "https://api.dicebear.com/9.x/notionists/svg?seed=Alex", // Sostituire
    },
    {
      name: "Lorem ipsum",
      role: "Dolor sit amet",
      imageUrl: "https://api.dicebear.com/9.x/notionists/svg?seed=Priya", // Sostituire
    },
    {
      name: "Lorem ipsum",
      role: "Dolor sit amet",
      imageUrl: "https://api.dicebear.com/9.x/notionists/svg?seed=James", // Sostituire
    },
    {
      name: "Lorem ipsum",
      role: "Dolor sit amet",
      imageUrl: "https://api.dicebear.com/9.x/notionists/svg?seed=Maya", // Sostituire
    },
  ];

  return (
    <section className="w-full bg-[#FFFDF7] py-20 md:py-28">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Header Section */}
        <div className="text-center mb-16 flex flex-col items-center">
          <h2 className="text-3xl font-bold text-black sm:text-4xl mb-4">
            Team
          </h2>
          <p className="text-base text-[#2D2D2D] max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              
              {/* Profile Image */}
              <div className="relative w-36 h-36 mb-6">
                <div className="overflow-hidden rounded-full border border-slate-800 shadow-lg w-full h-full bg-[#1C2230]">
                  <img
                    src={member.imageUrl}
                    alt={`${member.name} - ${member.role}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Text Info */}
              <h3 className="text-lg font-semibold text-black mb-1">
                {member.name}
              </h3>
              <p className="text-sm text-[#2D2D2D]">
                {member.role}
              </p>
              
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}