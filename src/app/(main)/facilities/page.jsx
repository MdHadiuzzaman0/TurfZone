"use client";

import { getAllFacilities } from "@/lib/data";
import FacilityCard from "@/components/FacilityCard";
import Filter from "@/components/Filter";
import { useState, useEffect } from "react";

const AllFacilitiesPage = () => {
  const [displayedFacilities, setDisplayedFacilities] = useState([]);

  useEffect(() => {
    getAllFacilities().then(setDisplayedFacilities);
  }, []);
  
  return (
    <main className="min-h-screen bg-zinc-950 text-white py-12 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="text-center space-y-2">
          <h1 className="text-3xl sm:text-4xl font-sports font-black uppercase tracking-wide">
            All Sports <span className="text-arenaOrange">Facilities</span>
          </h1>
          <p className="text-zinc-400 text-sm font-body">
            Find and book the best court or turf around your area instantly.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-arenaCard p-4 rounded-xl border border-zinc-900 shadow-md">
            {/* Filter Dropdown Box */}
            <Filter setFilteredFacilities={setDisplayedFacilities} />

          {/* Search Input Box */}
          <input
            type="text"
            placeholder="Search by facility name..."
            className="w-full sm:max-w-md bg-zinc-950 border border-zinc-800 focus:border-arenaOrange outline-none px-4 py-2.5 rounded-md text-sm text-white placeholder-zinc-600 transition-colors"
          />

        </div>

        {displayedFacilities.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center py-20 px-4 bg-arenaCard border border-zinc-900 rounded-2xl shadow-xl max-w-md mx-auto space-y-4 my-12">
            <div className="p-4 bg-zinc-950 rounded-full border border-zinc-800 text-arenaOrange text-3xl animate-pulse">
              🔍
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-sports font-black uppercase tracking-wide text-zinc-200">
                No Facilities Found
              </h3>
              <p className="text-sm font-body text-zinc-400 max-w-xs mx-auto leading-relaxed">
                We couldn't find any courts or turfs for this specific sports type. Try checking another category!
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedFacilities.map((facility) => (
              <FacilityCard key={facility._id} facility={facility} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default AllFacilitiesPage;